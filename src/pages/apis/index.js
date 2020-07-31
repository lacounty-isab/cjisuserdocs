import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { RedocStandalone } from 'redoc';
import qs from 'qs';


function Home(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  let defaultValues = {
    title: 'OpenAPI',
    summary: 'OpenAPI Version: 3.0',
    spec: '/openapi'
  }
  const fromQueryString = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const params = {...defaultValues, ...fromQueryString};
  console.log('params', JSON.stringify(params, null, 2));
  return (
    <Layout title={params.title} description="OpenAPI 3.0 Spec">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{params.title}</h1>
          <p className="hero__subtitle">{params.summary}</p>
        </div>
      </header>
      <main>
        <RedocStandalone specUrl={params.spec} />
      </main>
    </Layout>
  );
}

export default Home;