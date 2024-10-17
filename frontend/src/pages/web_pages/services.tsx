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
  PricingDesigns,
  ContactFormDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const pricing_features = {
    standard: {
      features: [
        'Seamless Integration',
        'Client Relationship Management',
        'Secure Document Storage',
      ],
      limited_features: ['Basic Analytics', 'Limited Lead Management'],
    },
    premium: {
      features: [
        'Seamless Integration',
        'Client Relationship Management',
        'Secure Document Storage',
        'Real-Time Analytics',
      ],
      also_included: ['Advanced Lead Management', 'Priority Support'],
    },
    business: {
      features: [
        'Seamless Integration',
        'Client Relationship Management',
        'Secure Document Storage',
        'Real-Time Analytics',
        'Automated Workflows',
        'Custom Solutions',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is ideal for individual practitioners or small firms looking to streamline their operations with essential CRM features.',
    premium:
      'The Premium plan is perfect for small to medium-sized businesses seeking advanced analytics and enhanced lead management capabilities.',
    business:
      'The Business plan is designed for large enterprises requiring comprehensive CRM solutions, including custom workflows and dedicated support.',
  };

  const features_points = [
    {
      name: 'Seamless Integration',
      description:
        'Connect all your departments effortlessly. Enhance collaboration and ensure smooth communication across your law firm.',
      icon: 'mdiLink',
    },
    {
      name: 'Real-Time Analytics',
      description:
        "Access detailed insights into your firm's performance. Make informed decisions with up-to-date data at your fingertips.",
      icon: 'mdiChartBar',
    },
    {
      name: 'Client Relationship Management',
      description:
        'Manage client interactions and data efficiently. Build stronger relationships with a comprehensive CRM solution.',
      icon: 'mdiAccountHeart',
    },
    {
      name: 'Lead Management',
      description:
        'Track and nurture leads effectively. Increase your conversion rates with a streamlined lead management process.',
      icon: 'mdiAccountPlus',
    },
    {
      name: 'Secure Document Storage',
      description:
        'Keep your documents safe and organized. Trust ${projectName} to protect your sensitive legal files.',
      icon: 'mdiFolderLock',
    },
    {
      name: 'Automated Workflows',
      description:
        'Automate routine tasks to save time. Focus on what matters most with efficient workflow automation.',
      icon: 'mdiAutorenew',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our workflow. The integration and automation features have saved us countless hours.',
      company: 'Legal Innovators',
      user_name: 'Anna Thompson, Senior Partner',
    },
    {
      text: 'The analytics provided by ${projectName} are invaluable. We can now make data-driven decisions with ease.',
      company: 'Justice Solutions',
      user_name: 'Mark Wilson, Data Analyst',
    },
    {
      text: 'Our client management has improved significantly. ${projectName} keeps everything organized and accessible.',
      company: 'Advocate Network',
      user_name: 'Laura Green, Client Manager',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Barrister Associates',
      user_name: 'James Brown, IT Support',
    },
    {
      text: "With ${projectName}, our lead tracking is more efficient than ever. We've seen a significant increase in our conversion rates.",
      company: 'LawTech Innovators',
      user_name: 'Emily Davis, Sales Director',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to collaborate and stay updated on all client matters.',
      company: 'Legal Pioneers',
      user_name: 'Michael Green, Operations Head',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - Enhance Your Law Firm with ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName} to streamline your law firm's operations. Discover our features, pricing, and client testimonials.`}
        />
      </Head>
      <WebSiteHeader projectName={'develop a aap for carbonIQ'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'develop a aap for carbonIQ'}
          image={['Law firm team meeting']}
          mainText={`Transform Your Law Firm with ${projectName}`}
          subTitle={`Discover the innovative services offered by ${projectName} to streamline your operations and enhance client management. Experience the future of legal CRM solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <PricingSection
          projectName={'develop a aap for carbonIQ'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <FeaturesSection
          projectName={'develop a aap for carbonIQ'}
          image={['Features overview illustration']}
          withBg={0}
          features={features_points}
          mainText={`Unleash the Power of ${projectName}'s Features`}
          subTitle={`Explore the cutting-edge features of ${projectName} designed to optimize your law firm's operations and client management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'develop a aap for carbonIQ'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
        />

        <ContactFormSection
          projectName={'develop a aap for carbonIQ'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Customer support representative']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have questions or need assistance? Contact ${projectName} anytime. Our team is ready to help and responds promptly to all inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'develop a aap for carbonIQ'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
