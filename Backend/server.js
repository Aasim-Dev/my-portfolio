const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("./config/db");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json({ limit: "100kb" }));

// CORS_ORIGINS supports two kinds of entries (comma-separated):
//   - exact origins:  https://example.com
//   - regex patterns: /^https:\/\/.*\.vercel\.app$/  (wrap in slashes)
// Defaults: localhost:3000 + any *.vercel.app subdomain.
const DEFAULT_ORIGINS = "http://localhost:3000,/^https:\\/\\/.*\\.vercel\\.app$/";

const cleanEntry = (raw) =>
  raw
    .trim()
    .replace(/^["']|["']$/g, "") // strip stray surrounding quotes
    .replace(/\/+$/, ""); // strip trailing slashes (browser Origins don't have them)

const parseAllowedOrigins = (value) =>
  (value && value.trim() ? value : DEFAULT_ORIGINS)
    .split(",")
    .map(cleanEntry)
    .filter(Boolean)
    .map((entry) => {
      if (entry.startsWith("/") && entry.endsWith("/") && entry.length > 1) {
        try {
          return new RegExp(entry.slice(1, -1));
        } catch (e) {
          console.warn(`[cors] invalid regex pattern, ignoring: ${entry}`);
          return null;
        }
      }
      return entry;
    })
    .filter(Boolean);

const allowedOrigins = parseAllowedOrigins(process.env.CORS_ORIGINS);

console.log(
  "[cors] Allowed origins loaded:",
  allowedOrigins.map((r) => (r instanceof RegExp ? `/${r.source}/` : r))
);
console.log(
  "[cors] Source:",
  process.env.CORS_ORIGINS ? "env CORS_ORIGINS" : "default fallback"
);

const isOriginAllowed = (origin) => {
  const normalized = origin.replace(/\/+$/, "");
  return allowedOrigins.some((rule) =>
    rule instanceof RegExp ? rule.test(normalized) : rule === normalized
  );
};

app.use(
  cors({
    origin: (origin, callback) => {
      // No origin = same-origin request, server-to-server, or curl. Allow.
      if (!origin) return callback(null, true);
      if (isOriginAllowed(origin)) return callback(null, true);
      console.warn(`[cors] blocked origin: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
  })
);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});
app.use("/api/", apiLimiter);

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/contact", contactLimiter, contactRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
