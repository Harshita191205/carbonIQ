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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'Integrated Workflow',
      description:
        "Streamline your firm's operations by connecting all departments. Enhance communication and ensure everyone is on the same page.",
      icon: 'mdiSync',
    },
    {
      name: 'Advanced Analytics',
      description:
        "Gain insights into your firm's performance with detailed analytics. Make informed decisions based on real-time data.",
      icon: 'mdiChartLine',
    },
    {
      name: 'Secure Data Management',
      description:
        'Keep your client data safe with top-notch security features. Trust ${projectName} to protect sensitive information.',
      icon: 'mdiLock',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The integration across departments has improved our workflow tremendously.',
      company: 'Legal Dynamics',
      user_name: 'Alice Johnson, Managing Partner',
    },
    {
      text: 'The analytics feature in ${projectName} provides us with invaluable insights. We can now make data-driven decisions with confidence.',
      company: 'Justice Solutions',
      user_name: 'Robert Lee, Data Analyst',
    },
    {
      text: 'Our client management has never been more organized. ${projectName} keeps all our information secure and easily accessible.',
      company: 'Advocate Network',
      user_name: 'Karen Smith, Client Manager',
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
        <title>{`About Us - Discover Our Mission and Values`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind ${projectName}. Discover how we are transforming the law industry with our innovative CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'develop a aap for carbonIQ'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'develop a aap for carbonIQ'}
          image={['Team brainstorming in office']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and innovation driving ${projectName}. Learn about our mission to revolutionize the law industry with cutting-edge CRM solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'develop a aap for carbonIQ'}
          image={['Team members discussing strategy']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the legal industry. Our team is dedicated to creating innovative solutions that connect and empower law firms.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'develop a aap for carbonIQ'}
          image={['Features dashboard illustration']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName}'s Powerful Features`}
          subTitle={`Discover how ${projectName} can enhance your law firm's operations with these innovative features designed for efficiency and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'develop a aap for carbonIQ'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients at ${projectName} `}
        />

        <ContactFormSection
          projectName={'develop a aap for carbonIQ'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person using a smartphone']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`We're here to help. Reach out to ${projectName} with any questions or support needs. Our team responds promptly to all inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'develop a aap for carbonIQ'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
