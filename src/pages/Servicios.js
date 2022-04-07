import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>{config.services_title}</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>{config.services_subHeading}</p>
          <ul className="alt">
              <li>{config.services_svc01_title}</li>
              <li>{config.services_svc02_title}</li>
              <li>{config.services_svc03_title}</li>
              <li>{config.services_svc04_title}</li>
              <li>{config.services_svc05_title}</li>
              <li>{config.services_svc06_title}</li>
              <li>{config.services_svc07_title}</li>
              <li>{config.services_svc08_title}</li>
              <li>{config.services_svc09_title}</li>
              <li>{config.services_svc10_title}</li>
              <li>{config.services_svc11_title}</li>
              <li>{config.services_svc12_title}</li>
              <li>{config.services_svc13_title}</li>
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
