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
import { Date, Github, Rocket, Product, Medium } from '../components/Icons';

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
                  aria-label="Open John Lang's GitHub profile"
                  href="https://github.com/Langutang"
                >
                  Leadership{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open John Lang's GitHub profile"
                  id="cardHover"
                  href="https://github.com/Langutang"
                  className="float-right"
                >
                  View GitHub
                </a>
                <p>
                  Versatility is the center of how I lead. I can take the latest
                  foundation or vision model—or a specialized Hugging Face model,
                  tool, or dataset—understand its real capability, and adapt it to
                  the problem a business actually needs solved. I have worked with
                  and led teams ranging from seven to nearly fifty people, building
                  the ML and AI applications that help organizations learn quickly,
                  move confidently, and accomplish their goals with ease. I can
                  grow and align a department when the work demands it, but I still
                  prefer the focus, ownership, and building velocity of working solo.
                </p>
              </li>
              <li>
                <Link href="https://github.com/Langutang" aria-label="Open John Lang's GitHub profile">
                  Applied AI Architecture{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="https://github.com/Langutang"
                  aria-label="Open John Lang's GitHub profile"
                  id="cardHover"
                  className="float-right"
                >
                  View GitHub
                </Link>
                <p>
                  I turn model capability into dependable products. That can mean
                  evaluating frontier and open-source models, using Roboflow, or
                  reshaping a Hugging Face dataset for a narrow domain. I have built
                  my own applications to label, format, train, and validate data so
                  every model receives the inputs it actually needs. I also enjoy
                  finding new value in existing research data—for example,
                  repurposing Structured3D for computer-vision problems beyond its
                  original use case. Whether I am building retrieval and agent tools
                  or the evaluation, security, and observability needed to ship them,
                  the goal is practical: give people a faster, smarter way to work.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open John Lang's GitHub profile"
                  href="https://github.com/Langutang"
                >
                  Machine Learning Application{' '}
                  <small>
                    <Rocket />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open John Lang's GitHub profile"
                  id="cardHover"
                  href="https://github.com/Langutang"
                  className="float-right"
                >
                  View GitHub
                </a>
                <p>
                  I have applied ML to healthcare pricing, document intelligence,
                  recommendation systems, computer vision, legal risk, and
                  autonomous retraining. I enjoy the stubborn middle of the work:
                  testing models against real failure cases, tuning them to the
                  domain, measuring what changed, and staying with the problem
                  until the result is useful—not merely impressive in a demo.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  Firmware Engineering{' '}
                  <small>
                    <Rocket />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="/projects"
                  className="float-right"
                >
                  View Projects
                </a>
                <p>
                Firmware development is more than a skill—it’s my creative playground. Whether I’m coding motion algorithms for an 
                XGO Lite robot dog, prototyping smart home tech like a voice-controlled mirror, or deploying object-tracking 
                systems across a Coral TPU, I love pushing the boundaries of what’s possible at the edge. I’ve built virtual assistants using ChatGPT, 
                and even created a networked edge-computing camera that scans physical invoices and transfers digital records across systems. 
                It’s hands-on, systems-level engineering that reminds me why I started building in the first place.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open game design projects">
                  Game-Ready Design{' '}
                  <small>
                    <Rocket />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open game design projects"
                  id="cardHover"
                  className="float-right"
                >
                  View Projects
                </Link>
                <p>
                  I am building two connected systems: Return of the Mesh turns
                  residential plans into reviewed IFC and FBX based game-ready homes, while
                  Holoprojector turns real fixtures and furniture into accurate
                  GLBs. Across them I have trained and evaluated models over more
                  than a million vector primitives, including ViT, RT-DETR,
                  VecFormer, RoomFormer, PolyRoom, and Gemini-based geometry
                  reconciliation, then compared image-to-3D output from
                  TRELLIS.2, Rodin, Meshy, and Tripo. The biggest lesson is that
                  visual similarity is only the start: correct dimensions,
                  location, topology, pivots, UVs, collision, and instancing are
                  what make an asset truly game-ready. Blender automation and
                  Unreal MCP let me validate all of that quickly enough to build
                  complete, lively worlds without sacrificing runtime speed.
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
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="Certified with the cloud"
        >
          <article>
            <h4>Certifications</h4>
              <ul className="timeline">
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
                  Databricks Expert Architect <small>Databricks</small>
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
              </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="Welcome to my specializations"
        >
          <article>
            <h4>Specializations</h4>
              <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.coursera.org/account/accomplishments/specialization/CGVHHHDB38P9"
                >
                  Strategic Leadership and Management <small>University of Illinois</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2025</b>
                </a>
                <p>
                  7 course Coursera Specialization offered through University of Illinois focused on learning leadership, designing and organizing the, influencing, and company growth. Grew soft 
                  skills to become a better leader in technology
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
                  Data Science and Machine Learning <small>John's Hopkins University</small>
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
                  Entrepreneurship <small>Pennsylvania University</small>
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
                  aria-label="Open Butter Express Spotify Playlist"
                  href="https://open.spotify.com/playlist/5ivfjRIoFGCZ9cUn6O0w5r?si=bLlxDjPpQI6tIcHvu5js6w&utm_source=copy-link&pi=h0SlNBrWQRyNd"
                >
                  Butter Express <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Open Butter Express Spotify Playlist"
                  href="https://open.spotify.com/playlist/5ivfjRIoFGCZ9cUn6O0w5r?si=bLlxDjPpQI6tIcHvu5js6w&utm_source=copy-link&pi=h0SlNBrWQRyNd"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  This is what I play when I am snowboarding.
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
                  aria-label="Open Desert Morning Spotify Playlist"
                  href="https://open.spotify.com/playlist/6tRNrUGwRMDf0BMivVRE2T?si=E-liomNlQReYOIVvzgcRXQ&utm_source=copy-link&pi=-D1aw8eMRrCG5"
                >
                  Desert Morning <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Desert Morning Spotify Playlist"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/6tRNrUGwRMDf0BMivVRE2T?si=E-liomNlQReYOIVvzgcRXQ&utm_source=copy-link&pi=-D1aw8eMRrCG5"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>A relaxing morning strum to have a coffee with.</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open The Backroad Spotify Playlist"
                  href="https://open.spotify.com/playlist/707gPfCJFymfv8Xstl98mw?si=AacbhAQZTZm-dJDY24nT8Q&utm_source=copy-link&pi=dBsvlF9RQXi5M"
                >
                  The Backroad <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open The Backroad Spotify Playlist"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/707gPfCJFymfv8Xstl98mw?si=AacbhAQZTZm-dJDY24nT8Q&utm_source=copy-link&pi=dBsvlF9RQXi5M"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>A little roots-country playlist.</p>
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
                <Link href="https://www.artie.com">
                  Technical Board Advisor <small>Artie</small>
                </Link>
                <Link href="https://www.artie.com" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  I advise on practical AI teaching—helping turn complex model
                  concepts, responsible use, and modern build workflows into
                  lessons that people can understand and apply.
                </p>
              </li>
              <li>
                <Link href="https://www.hendersonhospital.com/">
                  Volunteer <small>Henderson Hospital</small>
                </Link>
                <Link href="https://www.hendersonhospital.com/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  Weekly volunteer at Henderson Hospital focused on technology
                  improvement, surgical case flow, and patient safety.
                </p>
              </li>
              <li>
                <Link href="https://www.boisestate.edu/recreation/sports/clubsports/judo-club/">
                  Volunteer <small>Boise State Judo</small>
                </Link>
                <Link href="https://www.boisestate.edu/recreation/sports/clubsports/judo-club/" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  Three-times-weekly volunteer at Boise State University,
                  supporting student success in the judo dojo and being a great
                  uke by getting tossed by everyone, everywhere.
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
                <Link href="https://www.usaskateshop.com/story-space-inline-skates-1101005065748-vconf?2=744&amp;0=1460">
                  Rollerblader <small>Eco Friendly</small>
                </Link>
                <Link href="https://www.usaskateshop.com/story-space-inline-skates-1101005065748-vconf?2=744&amp;0=1460" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  I rollerblade everywhere. I fill up my car&apos;s gas tank twice a
                  year. See you from the bike lane!
                </p>
              </li>
              <li>
                <Link href="https://www.evo.com/products/196831-burton-flight-attendant-snowboard-2022">
                  Snowboarder <small>Eco Friendly</small>
                </Link>
                <Link href="https://www.evo.com/products/196831-burton-flight-attendant-snowboard-2022" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  I go for speed. Top is 85.2mph, going for 90mph this year. 
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
