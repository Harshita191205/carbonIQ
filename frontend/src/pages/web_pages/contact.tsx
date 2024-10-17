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
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers features like seamless integration, real-time analytics, client relationship management, lead management, secure document storage, and automated workflows.',
    },
    {
      question: 'How does ${projectName} improve law firm operations?',
      answer:
        '${projectName} streamlines operations by connecting departments, automating tasks, and providing real-time data insights, allowing your team to focus on client service.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} uses top-notch security measures to protect your data, ensuring that all client information and documents are safe and confidential.',
    },
    {
      question: "Can I customize ${projectName} to fit my firm's needs?",
      answer:
        "Absolutely! ${projectName} offers customizable workflows and features to tailor the CRM to your specific requirements, enhancing your firm's efficiency.",
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        '${projectName} provides comprehensive support, including a dedicated support team available to assist with any questions or issues you may encounter.',
    },
    {
      question: 'How does the pricing work for ${projectName}?',
      answer:
        '${projectName} offers various pricing plans, including Standard, Premium, and Business, each designed to meet different needs and budgets.',
    },
    {
      question: 'Can I try ${projectName} before purchasing?',
      answer:
        "Yes, we offer a free trial period for you to explore ${projectName}'s features and see how it can benefit your law firm.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to ${projectName} for any inquiries or support. Our team is here to assist you. Find answers to common questions in our FAQ section.`}
        />
      </Head>
      <WebSiteHeader projectName={'develop a aap for carbonIQ'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'develop a aap for carbonIQ'}
          image={['Customer service representative smiling']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to help with any questions or support you need. Reach out to ${projectName} and let us assist you in optimizing your law firm's operations.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'develop a aap for carbonIQ'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'develop a aap for carbonIQ'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on keyboard']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have questions or need support? Contact ${projectName} anytime. Our team is ready to assist and responds promptly to all inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'develop a aap for carbonIQ'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
