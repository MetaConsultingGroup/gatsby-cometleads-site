import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';



const FAQS = [
  {
    title: 'What can I expect from CometLeads?',
    content: () => (
      <>
        We have iteratively developed high efficiency systems for cold email ooutreach.
      This is what we specialize in. The rest is up to you, do you want highly targeted clients? 
      Do you want high ticket clients? Do you prefer an exploratory mode in which we find the ideal industries and clients for your business?
      </>
    ),
  },
  {
    title: 'How do I partner with CometLeads',
    content: () => (
      <>
        The first thing you do is you book a meeting with us, that way we can assess your needs and establish goals and expectations.
      If we can make sure you'll be happy with our services we will provide you with an agreed amount of potential clients every week and go from there!
      <a href="https://calendly.com/metaconsulting/30min"><button>[You can book us here!]</button></a>
      </>
    ),
  },
  {
    title: 'Where do you source data from and why are you better than the rest?',
    content: () => (
      <>
        As for the data, we have our own database and have a network of outside specialists that we rely on for particularly niche industries. 
      We also constantly expand our database, this ensures that we are always on top of our game. 
      Aside from our high quality data, we have dedicated years to studying cold email approaches and changed our models accordingly, we know what works and what doesn't, we know which industries and clients to pursue or avoid.
      Our competitive advantage resides in experience.
      </>
    ),
  },
  {
    title: 'What is CometLeads story?',
    content: () => (
      <>
        We started out as a department in our parent company and pivoted into the private agency we are today.
        Every step of the way we were outperforming our competitors and were outgrowing our parent company's needs, so we decided to make it into it's own venture.
        The one that many have been asking us for.
      </>
    ),
  },
  /*{
    title: 'What exactly does Gatsby build?',
    content: () => (
      <>
        Gatsby.js is a static PWA (Progressive Web App) generator. You get code
        and data splitting out-of-the-box. Gatsby loads only the critical HTML,
        CSS, data, and JavaScript so your site loads as fast as possible. Once
        loaded, Gatsby prefetches resources for other pages so clicking around
        the site feels incredibly fast.
      </>
    ),
  }, */
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
