/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const resumeData = '/JLang_Resume.pdf';
  const resumeVersions = [
    {
      label: 'Game & 3D Engineering',
      pdf: '/resumes/John_Lang_Game_Engineer_Resume.pdf',
      docx: '/resumes/John_Lang_Game_Engineer_Resume.docx',
    },
    {
      label: 'Robotics & Embedded Engineering',
      pdf: '/resumes/John_Lang_Robotics_Engineer_Resume.pdf',
      docx: '/resumes/John_Lang_Robotics_Engineer_Resume.docx',
    },
    {
      label: 'AI & ML Engineering',
      pdf: '/resumes/John_Lang_AI_ML_Engineer_Resume.pdf',
      docx: '/resumes/John_Lang_AI_ML_Engineer_Resume.docx',
    },
  ];

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Résumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={resumeData}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  View
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href={resumeData}
                  download="JLang_Resume.pdf"
                  aria-label="Download John Lang's resumé"
                >
                  Download
                </a>
              </b>{' '}
              the featured Game &amp; 3D Engineering résumé.
            </p>
            <ResumeVersions aria-label="Focused résumé versions">
              {resumeVersions.map((resume) => (
                <li key={resume.label}>
                  <span>{resume.label}</span>
                  <a
                    href={resume.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                  <a href={resume.docx} download>
                    Word
                  </a>
                </li>
              ))}
            </ResumeVersions>
          </article>
          <br />
          <iframe
            src={resumeData}
            allowFullScreen
            width="740"
            height="780"
            title="John Lang Resumé"
          />
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Convinced to contact me now ?
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
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;

const ResumeVersions = styled.ul`
  list-style: none;
  margin: 1rem 0 1.8rem;
  padding: 0;
  max-width: 48rem;

  li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: center;
    gap: 0.9rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid var(--button-index);
    color: var(--article-color);
  }

  span {
    font-weight: 700;
  }

  a {
    font-weight: 700;
  }
`;
export default Resume;
