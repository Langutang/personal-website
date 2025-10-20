/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ArticleContext } from '../components/Utils/context';
import { PageSection } from './projects';

const Articles = () => {
  const articles = useContext(ArticleContext);
  return (
    <Layout title="Writing.">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Writing.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {articles.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Articles">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('article') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="White Papers">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('whitepaper') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Publications">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('publication') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Come say hey, you
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default Articles;
