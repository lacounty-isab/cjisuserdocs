import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const API = ({title, summary, spec, draft}) => (
  <div className={classnames('col', styles.api)}>
    <div className={classnames('card', styles['card-shadow'],
                               {[styles.draft]: draft},
                               {[styles.live]: !draft})}>
      <div className={'card__header'}>
        <h3>{title}</h3>
      </div>
      <div className={'card__body'}>
        <small>{summary}</small>
      </div>
      <div className={'card__footer'}>
        <div className={'button-group button-group--block'}>
          <a className={'button button--secondary'} target="_blank" href={spec}>
            Download YAML
          </a>
          <Link className={'button button--secondary'}
                to={`/apis?spec=${spec}&title=${title}`}
                >
            Browse API
          </Link>
        </div>
      </div>
    </div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <div className={styles.apis}>
          <section>
            <div className={'container'}>
              <div className={'row'}>
                {apis.map( (props, idx) => (
                  <API key={idx} {...props}/>
                ))}
              </div>
            </div>
          </section>
        </div> 
      </main>
    </Layout>
  );
}

export default Home;

const apis = [
  {
    title: 'Charge Code',
    summary: 'Criminal charge code attributes',
    spec: '/openapi/ChargeCode.yaml'
  },
  {
    title: 'Color Code',
    summary: 'Eye and hair color codes to full names',
    spec: '/openapi/ColorCode.yaml'
  },
  {
    title: 'LEA',
    summary: 'Law Enforcement Agency names and addresses related to county law enforcement agencies',
    spec: '/openapi/Lea.yaml'
  },
  {
    title: 'Charge Conversion',
    summary: 'Mapping used to assist with charge code conversions within Cloverleaf',
    spec: '/openapi/ChargeConversion.yaml'
  },
  {
    title: 'Court Districts (draft)',
    summary: 'Addresses for court districts',
    spec: '/openapi/CourtDistrict.yaml',
    draft: true
  },
  {
    title: 'Court Departments (draft)',
    summary: 'Addresses for court departments/divisions',
    spec: '/openapi/CourtDistrict.yaml',
    draft: true
  }
]
