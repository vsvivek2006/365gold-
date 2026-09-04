import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import NotFound from '@/components/NotFound';
import SEO from '@/components/SEO';
import InfoPage from '@/components/InfoPage';
import type { PageData } from '@/components/InfoPage';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Contact from '@/pages/Contact';

import {
  aboutPage, howItWorksPage, gettingStartedPage, featuresPage,
  downloadPage, apkPage, appPage,
} from '@/data/corePages';

import {
  guidePage, loginGuidePage, appGuidePage, apkGuidePage,
  downloadGuidePage, registrationGuidePage, accountGuidePage,
  mobileGuidePage, websiteGuidePage,
} from '@/data/guidePages';

import {
  helpCenterPage, faqPage, loginHelpPage, registrationHelpPage,
  downloadHelpPage, installationGuidePage, accountHelpPage,
  troubleshootingPage, securityPage, responsibleUsePage,
} from '@/data/supportPages';

import {
  privacyPolicyPage, termsPage, disclaimerPage, cookiePolicyPage,
  editorialPolicyPage, securityPolicyPage, refundPolicyPage,
  contactSupportPolicyPage, accessibilityPage,
} from '@/data/legalPages';

import {
  blogPage, updatesPage, appUpdatesPage, downloadUpdatesPage,
  beginnerGuidePage, faqGuidePage,
  securityTipsPage, userGuidePage,
} from '@/data/blogPages';

function DataPage({ data }: { data: PageData }) {
  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        path={data.path}
      />
      <InfoPage data={data} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Custom pages */}
              <Route path="/login/" element={<Login />} />
              <Route path="/register/" element={<Register />} />
              <Route path="/contact/" element={<Contact />} />

              {/* Core pages */}
              <Route path="/about/" element={<DataPage data={aboutPage} />} />
              <Route path="/how-it-works/" element={<DataPage data={howItWorksPage} />} />
              <Route path="/getting-started/" element={<DataPage data={gettingStartedPage} />} />
              <Route path="/features/" element={<DataPage data={featuresPage} />} />
              <Route path="/download/" element={<DataPage data={downloadPage} />} />
              <Route path="/apk/" element={<DataPage data={apkPage} />} />
              <Route path="/app/" element={<DataPage data={appPage} />} />

              {/* Guide pages */}
              <Route path="/guide/" element={<DataPage data={guidePage} />} />
              <Route path="/login-guide/" element={<DataPage data={loginGuidePage} />} />
              <Route path="/app-guide/" element={<DataPage data={appGuidePage} />} />
              <Route path="/apk-guide/" element={<DataPage data={apkGuidePage} />} />
              <Route path="/download-guide/" element={<DataPage data={downloadGuidePage} />} />
              <Route path="/registration-guide/" element={<DataPage data={registrationGuidePage} />} />
              <Route path="/account-guide/" element={<DataPage data={accountGuidePage} />} />
              <Route path="/mobile-guide/" element={<DataPage data={mobileGuidePage} />} />
              <Route path="/website-guide/" element={<DataPage data={websiteGuidePage} />} />

              {/* Support pages */}
              <Route path="/help/" element={<DataPage data={helpCenterPage} />} />
              <Route path="/faq/" element={<DataPage data={faqPage} />} />
              <Route path="/login-help/" element={<DataPage data={loginHelpPage} />} />
              <Route path="/registration-help/" element={<DataPage data={registrationHelpPage} />} />
              <Route path="/download-help/" element={<DataPage data={downloadHelpPage} />} />
              <Route path="/installation-guide/" element={<DataPage data={installationGuidePage} />} />
              <Route path="/account-help/" element={<DataPage data={accountHelpPage} />} />
              <Route path="/troubleshooting/" element={<DataPage data={troubleshootingPage} />} />
              <Route path="/security/" element={<DataPage data={securityPage} />} />
              <Route path="/responsible-use/" element={<DataPage data={responsibleUsePage} />} />

              {/* Legal pages */}
              <Route path="/privacy-policy/" element={<DataPage data={privacyPolicyPage} />} />
              <Route path="/terms/" element={<DataPage data={termsPage} />} />
              <Route path="/disclaimer/" element={<DataPage data={disclaimerPage} />} />
              <Route path="/cookie-policy/" element={<DataPage data={cookiePolicyPage} />} />
              <Route path="/editorial-policy/" element={<DataPage data={editorialPolicyPage} />} />
              <Route path="/security-policy/" element={<DataPage data={securityPolicyPage} />} />
              <Route path="/refund-policy/" element={<DataPage data={refundPolicyPage} />} />
              <Route path="/contact-support-policy/" element={<DataPage data={contactSupportPolicyPage} />} />
              <Route path="/accessibility/" element={<DataPage data={accessibilityPage} />} />

              {/* Blog / Content pages */}
              <Route path="/blog/" element={<DataPage data={blogPage} />} />
              <Route path="/updates/" element={<DataPage data={updatesPage} />} />
              <Route path="/app-updates/" element={<DataPage data={appUpdatesPage} />} />
              <Route path="/download-updates/" element={<DataPage data={downloadUpdatesPage} />} />
              <Route path="/beginner-guide/" element={<DataPage data={beginnerGuidePage} />} />
              <Route path="/faq-guide/" element={<DataPage data={faqGuidePage} />} />
              <Route path="/security-tips/" element={<DataPage data={securityTipsPage} />} />
              <Route path="/user-guide/" element={<DataPage data={userGuidePage} />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
