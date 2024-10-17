import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  AboutUsDesigns,
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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
      name: 'Lead Tracking',
      description:
        'Monitor and manage potential clients effortlessly. Keep track of lead statuses and ensure no opportunity is missed.',
      icon: 'mdiAccountSearch',
    },
    {
      name: 'Department Integration',
      description:
        'Connect sales, marketing, and customer service departments. Foster collaboration and ensure seamless communication across teams.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Contact Management',
      description:
        'Organize and access client information easily. Maintain comprehensive records of all interactions and client details.',
      icon: 'mdiContactMail',
    },
  ];

  const testimonials = [
    {
      text: "Since implementing ${projectName}, our firm's efficiency has skyrocketed. The seamless integration between departments is a game-changer.",
      company: 'LawTech Solutions',
      user_name: 'John Doe, Operations Manager',
    },
    {
      text: "${projectName} has transformed our client management process. It's intuitive and has significantly improved our client interactions.",
      company: 'Legal Innovators Inc.',
      user_name: 'Jane Smith, Client Relations Director',
    },
    {
      text: "The lead tracking feature in ${projectName} is outstanding. We've seen a noticeable increase in our conversion rates.",
      company: 'Justice Partners',
      user_name: 'Michael Brown, Sales Lead',
    },
    {
      text: 'Our team loves the user-friendly interface of ${projectName}. It has made collaboration across departments so much easier.',
      company: 'Advocate Alliance',
      user_name: 'Emily White, Marketing Head',
    },
    {
      text: "With ${projectName}, we have all our client data organized and accessible. It's a must-have tool for any law firm.",
      company: 'Barrister Group',
      user_name: 'David Green, IT Specialist',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They helped us every step of the way during the setup process.',
      company: 'Legal Eagles',
      user_name: 'Sarah Johnson, Customer Service Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solutions for the Law Industry`}</title>
        <meta
          name='description'
          content={`Streamline your law firm's operations with our CRM app, connecting sales, customer service, and marketing into one cohesive system.`}
        />
      </Head>
      <WebSiteHeader projectName={'develop a aap for carbonIQ'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'develop a aap for carbonIQ'}
          image={['Law firm team collaboration']}
          mainText={`Revolutionize Your Law Firm's CRM Experience`}
          subTitle={`Connect sales, customer service, and marketing seamlessly with ${projectName}. Organize notes, activities, and metrics in one system.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <AboutUsSection
          projectName={'develop a aap for carbonIQ'}
          image={['Team collaborating in office']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the way law firms operate. Our CRM solution bridges departments, enhances efficiency, and drives success.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'develop a aap for carbonIQ'}
          image={['Dashboard showing CRM features']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Enhance your law firm's efficiency with ${projectName}. Explore features designed to streamline operations and improve client management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'develop a aap for carbonIQ'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'develop a aap for carbonIQ'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team at ${projectName} is here to assist you with any inquiries or support you need. We respond promptly to all messages.`}
        />
      </main>
      <WebSiteFooter projectName={'develop a aap for carbonIQ'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
