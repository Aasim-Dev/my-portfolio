import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { currentMonthYear } from '../../lib/dynamicTime';

export const RESUME_PDF = `${process.env.PUBLIC_URL || ''}/resume/Aasim_Sanandwala_Resume.pdf`;
export const RESUME_DOCX = `${process.env.PUBLIC_URL || ''}/resume/Aasim_Sanandwala_Resume.docx`;

const ResumeViewer = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close resume viewer"
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="relative w-full max-w-5xl h-[90vh] bg-stone-50 dark:bg-stone-900 rounded-2xl border hairline shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b hairline bg-white/60 dark:bg-stone-950/60 backdrop-blur">
              <div className="flex items-center gap-3 min-w-0">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/15 text-accent flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-display tracking-editorial text-lg leading-tight text-stone-900 dark:text-stone-50 truncate">
                    Aasim Sanandwala — Resume
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500 truncate">
                    PDF · 1 page · Updated {currentMonthYear()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <a
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 border hairline hover:border-accent hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open
                </a>
                <a
                  href={RESUME_PDF}
                  download="Aasim_Sanandwala_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-accent hover:text-accent-ink dark:hover:bg-accent dark:hover:text-accent-ink transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </a>
                <a
                  href={RESUME_DOCX}
                  download="Aasim_Sanandwala_Resume.docx"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 border hairline hover:border-accent hover:text-accent transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  DOCX
                </a>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-stone-200/60 dark:hover:bg-stone-800/60 text-stone-600 dark:text-stone-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-stone-200 dark:bg-stone-950 overflow-hidden">
              <iframe
                src={`${RESUME_PDF}#view=FitH&toolbar=0&navpanes=0`}
                title="Aasim Sanandwala Resume"
                className="w-full h-full"
              />
              <noscript>
                <a href={RESUME_PDF}>Download resume PDF</a>
              </noscript>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeViewer;
