import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>{config.links_title}</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <ul className="alt">
          {config.links.map(social => {
            const { text, url } = social;
            return (
            <li key={url}><a href={url} target="_blank"><span className="label">{text}</span></a></li>
            );
          })}
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
