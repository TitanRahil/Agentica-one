import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';

// Code-split pages for high-performance loading
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then((m) => ({ default: m.SolutionsPage })));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage').then((m) => ({ default: m.MethodologyPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then((m) => ({ default: m.BookingPage })));

// Loading spinner fallback with specular glass styling
const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-midnight-200 border-t-icy-deep animate-spin" />
      <span className="text-xs font-mono tracking-widest uppercase text-midnight-500 font-semibold">
        Loading System View...
      </span>
    </div>
  </div>
);

// Helper component to restore scroll to top upon route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-sky-canvas text-midnight selection:bg-icy selection:text-midnight">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/methodology" element={<MethodologyPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </Router>
  );
};

export default App;
