import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Remain ahead of the competition.
                  </h2>
              <p>
                CometLeads constructs the fastest cold email infrastructure that matches the needs of our clients. 
              </p>
<br />
  <br />
<h2>Maximise your operation’s capabilities</h2>
 
  <p>Our model focuses on mobilzing our clients through the onboarding process
  — towards targeted high quality potential customers,
  at a faster rate than our competitors.
  </p>
  <br />
  <br />
              <h2>Save time & effort.</h2>

<p>             Saving you time and effort, allowing you to solely focus on the business rather than in. 
             
                 <br />
                 <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>We take care of the grueling work.</h2>
              <p>
               We specialize in acquiring qualified leads.  
               We utilize the power of the latest email technologies and tools, to constantly improve on our iterated models 
               — all set up and ready to facilitate your process to start obtaining clients.
                 <br />
                 <br />
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>We prioritize your growth and success.</h2>
              <p>
                CometLeads provides you the leads that propel you to the success you always wanted. 
               
                <br />
                Do not settle for alternatives that waste your time on futile calls and uninterested parties. 
                Focus on the growth you want and nothing more.  
                 <br />
                 <br />
                <a href="https://calendly.com/gritcult/cometleads-com">Book a call now! &nbsp;&#x2794;</a>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
