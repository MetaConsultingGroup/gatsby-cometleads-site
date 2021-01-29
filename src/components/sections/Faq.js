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
      If we can make sure you'll be happy with our services we will provide you with an agreed amount of potential clients every week!
      </>
    ),
  },
  /*{
    title: 'Where can you source data from?',
    content: () => (
      <>
        We have our own database and have a network of outside 
      </>
    ),
  },
  {
    title: 'How does do I future-proof my website?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
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
