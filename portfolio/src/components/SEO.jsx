import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Aasim Sanandwala — Engineering revenue, not just features.',
  description = 'Full-stack engineer who shipped a +20% revenue lift, 85% fewer release-day errors, and 3× search performance at 99.5% uptime. Laravel · Next.js · Docker · Elasticsearch.',
  url = 'https://aasim-portfolio.vercel.app',
  image = '/og-image.jpg'
}) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Aasim Sanandwala, Product Engineer, Full-Stack Developer, Laravel, Next.js, React, Node.js, Docker, MongoDB, Elasticsearch"
      />
      <meta name="author" content="Aasim Sanandwala" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
