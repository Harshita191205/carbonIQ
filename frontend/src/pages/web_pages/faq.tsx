import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'develop a aap for carbonIQ';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and how does it work?',
      answer:
        '${projectName} is a CRM solution designed for law firms to streamline operations by integrating departments, managing client relationships, and automating workflows.',
    },
    {
      question: 'How can ${projectName} benefit my law firm?',
      answer:
        '${projectName} enhances efficiency by providing real-time analytics, secure document storage, and seamless communication across departments, allowing you to focus on client service.',
    },
    {
      question: 'Is my data safe with ${projectName}?',
      answer:
        'Yes, ${projectName} employs advanced security measures to protect your data, ensuring that all client information and documents remain confidential and secure.',
    },
    {
      question: 'Can I customize ${projectName} to suit my needs?',
      answer:
        "Absolutely! ${projectName} offers customizable features and workflows to tailor the CRM to your specific requirements, enhancing your firm's productivity.",
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        '${projectName} provides comprehensive support, including a dedicated team ready to assist with any questions or issues you may encounter.',
    },
    {
      question: 'How does the pricing structure work for ${projectName}?',
      answer:
        '${projectName} offers various pricing plans, including Standard, Premium, and Business, each designed to meet different needs and budgets.',
    },
    {
      question: 'Is there a trial period for ${projectName}?',
      answer:
        "Yes, we offer a free trial period for you to explore ${projectName}'s features and see how it can benefit your law firm.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and support options. Contact us for further assistance.`}
        />
      </Head>
      <WebSiteHeader projectName={'develop a aap for carbonIQ'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'develop a aap for carbonIQ'}
          image={['Person reading FAQ document']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn more about our features, pricing, and support.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Browse FAQs`}
        />

        <FaqSection
          projectName={'develop a aap for carbonIQ'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'develop a aap for carbonIQ'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person writing an email']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have more questions or need assistance? Contact ${projectName} anytime. Our team is ready to help and responds promptly to all inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'develop a aap for carbonIQ'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
