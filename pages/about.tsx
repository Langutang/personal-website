/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn Link"
                  href="https://www.linkedin.com/in/johnvjlang/"
                >
                  Leadership{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn Link"
                  id="cardHover"
                  href="https://www.linkedin.com/in/johnvjlang/"
                  className="float-right"
                >
                  View LinkedIn
                </a>
                <p>
                As a Data Engineering and Science Manager, I lead a high-performing team of six engineers and data scientists, driving innovation across complex data domains. 
                My leadership journey has evolved into a strategic architecture role, where I guide companies on unifying data engineering methodologies and implementing 
                robust MLOps practices. From building internal systems that scale across teams to architecting MLFlow pipelines for model governance and reproducibility, 
                I bridge the gap between business goals and technical execution with a sharp focus on velocity, reliability, and long-term impact.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Data Engineering{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Products
                </Link>
                <p>
                I work comfortably at petabyte scale, particularly within sensitive and regulated domains like healthcare. 
                I specialize in owning end-to-end data ecosystems—aggregating, cleaning, and transforming vast datasets into actionable systems 
                such as automated reporting platforms, real-time notification engines, and user-facing products. Whether it's streaming architecture, 
                lakehouse design, or complex ETL orchestration, I bring both the technical and product sense needed to turn raw data into business value for 
                internal stakeholders and external clients alike.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/codewonders"
                >
                  Data Science{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/codewonders"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                From predicting the most cost-effective healthcare plans to building insurance pricing models for e-commerce platforms, 
                I’ve developed and deployed machine learning solutions that move the needle. I’ve built everything from production-grade 
                facial recognition filters to recommendation systems and autonomous retraining pipelines. I’m equally at home with 
                classical models and cutting-edge deep learning, and I thrive in cross-functional environments where experimentation, 
                iteration, and ownership are key.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/codewonders"
                >
                  Firmware Engineering{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/codewonders"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                Firmware development is more than a skill—it’s my creative playground. Whether I’m coding motion algorithms for an 
                XGO Lite robot dog, prototyping smart home tech like a voice-controlled mirror, or deploying object-tracking 
                systems across a Coral TPU, I love pushing the boundaries of what’s possible at the edge. I’ve built virtual assistants using ChatGPT, 
                and even created a networked edge-computing camera that scans physical invoices and transfers digital records across systems. 
                It’s hands-on, systems-level engineering that reminds me why I started building in the first place.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>Education</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.wabash.edu/"
                >
                  Bachelor's in Mathematics <small>Wabash College</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Crawfordsville, IN</b>
                </a>
                <p>
                  Bachelor's in Mathematics with a focus on financial pricing and probabilistic models.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.eastern.edu/"
                >
                  Master's in Data Science and Statistics <small>Eastern University</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Saint Davids, PA</b>
                </a>
                <p>
                  Master's Degree in Data Science and Statistics from Eastern Univseristy. Focusing in on the implementation and ethical dillemas with militaristic,
                  autonomous, militaristic machines{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.credly.com/badges/a19943ab-3647-40ed-be11-eda491934f94/linked_in_profile"
                >
                  Azure Solutions Architect <small>Microsoft</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022</b>
                </a>
                <p>
                  3 part specialization achievement - azure foundations, azure admin associate, azure solution expert. Learned all tools and resources available
                  within the Azure cloud environment. Using tools daily to orchestrate data or machine learning flows {' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.credly.com/badges/a19943ab-3647-40ed-be11-eda491934f94/linked_in_profile"
                >
                  Databricks Architect <small>Databricks</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022</b>
                </a>
                <p>
                  3 part specialization achievement - Databricks Foundation, Databricks Associate Engineer, Databricks Advanced Data Engineer. Learned all tools and resources available
                  within the Databricks cloud environment. Using tools daily to model machine learning pipelines, create new product pipelines, share and network with team on best practices {' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.credly.com/badges/a19943ab-3647-40ed-be11-eda491934f94/linked_in_profile"
                >
                  SnowPro Advanced: Architect <small>Snowflake</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022</b>
                </a>
                <p>
                  2 part specialization achievement - SnowPro Core, Snowpro Advanced: Architect. Learned all tools and resources available
                  within the Snowflake cloud environment. Using tools daily to sell data on the marketplace, aggregate for reports, or drive a new product pipeline {' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.coursera.org/account/accomplishments/specialization/JFA6BJ292E8Y"
                >
                  Specialization Data Science and Machine Learning <small>John's Hopkins University</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021</b>
                </a>
                <p>
                  5 course Coursera Specialization offered through John's Hopkins University focused on learning best practices for model development, tuning, and evaluation. Learning
                  the latest methods in the AI / ML field
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.coursera.org/account/accomplishments/specialization/CGVHHHDB38P9"
                >
                  Specialization in Entrepreneurship <small>Pennsylvania University</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  5 course Coursera Specialization offered through Pennsylvania University focused on learning best practices leadership, influencing, and seeing a product to the end state. Grew soft 
                  skills to become a better leader in technology
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Playlist.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Codewonders Spotify Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                >
                  Codewonders. <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Open Lofii Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  This is an intensive, energizing songs list that helps me
                  through the day and inspires generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                >
                  Chill Lofi Study Beats <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  The perfect study beats, twenty four seven. with over 178
                  SONGS
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                >
                  Mellow Drive <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Easy listening for pleasant drive</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                >
                  Rap UK <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>One of the finest rap in UK. Cover: Aitch</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                >
                  Mood Booster 🎅🏽 <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Get happy with today's dose of feel-good songs!</p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper aria-label="You are now in lens section">
          <article>
            <h4>My Person</h4>
            <ul className="timeline">
              <li>
                <Link href="https://www.hendersonhospital.com/">
                  Volunteer <small>Henderson Hospital</small>
                </Link>
                <Link href="https://www.hendersonhospital.com/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  Weekly vounteer at Henderson Hospital focusing on technology improvement, surgical case flow, as well as patient safety
                </p>
              </li>
              <li>
                <Link href="https://www.hendersonhospital.com/">
                  Volunteer <small>Boise State Judo</small>
                </Link>
                <Link href="https://www.hendersonhospital.com/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  Three times weekly vounteer at Boise State University focusing on improving student success in the Judo Dojo. Being a great uke by being tossed by everyone, everywhere.
                </p>
              </li>
              <li>
                <Link href="https://sbgidaho.com/judo/">
                  Athlete <small>SBG Idaho</small>
                </Link>
                <Link href="https://sbgidaho.com/judo/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  International Judo athlete competing for SBG, Idaho - competing in National events USA, Japan, and Canada
                </p>
              </li>
              <li>
                <Link href="https://sbgidaho.com/judo/">
                  Rollerblader <small>Eco Friendly</small>
                </Link>
                <Link href="https://sbgidaho.com/judo/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  I rollerblade everywhere. I fill up my car's gas tank twice a year. See you from the bike lane!
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
