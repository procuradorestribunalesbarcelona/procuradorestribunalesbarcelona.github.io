import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.home_heading}</h2>
        <p>{config.home_subHeading}</p>
        <p className="subText">{config.home_subTitleTxt}</p>
      </div>
      <Scroll type="id" element="presentacion">
        <a href="#presentacion" className="more">{config.home_readMoreTxt}</a>
      </Scroll>
    </section>

    <section id="presentacion" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>{config.home_s1_heading}</h2>
            <p>{config.home_s1_p1}</p>
            <p>{config.home_s1_p2}</p>
            <p>{config.home_s1_p3}</p>
            <p>{config.home_s1_p4}</p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-gavel major style2">
              <span className="label">{config.home_s1_icon}</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="equipo" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>{config.home_teamTitle01}</h2>
          <p>{config.home_teamTxt01}</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>{config.home_teamTitle02}</h2>
          <p>{config.home_teamTxt02}</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>{config.home_teamTitle03}</h2>
          <p>{config.home_teamTxt03}</p>
        </div>
      </section>
    </section>

    <section id="partidos-judiciales" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>{config.partidos_title}</h2>
          <p>{config.partidos_subHeading}</p>
          <p>{config.partidos_subHeading2}</p>
        </header>
        <ul className="features">
          <li className="icon fa-map-location">
            <h3>{config.partidos_option01}</h3>
            <p> </p>
          </li>
          <li className="icon solid fa-laptops">
            <h3>{config.partidos_option02}</h3>
            <p> </p>
          </li>
          <li className="icon solid fa-laptops">
            <h3>{config.partidos_option03}</h3>
            <p> </p>
          </li>
          <li className="icon solid fa-laptops">
            <h3>{config.partidos_option04}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
            <h3>{config.partidos_option05}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
            <h3>{config.partidos_option06}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
            <h3>{config.partidos_option07}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
            <h3>{config.partidos_option08}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
            <h3>{config.partidos_option09}</h3>
            <p> </p>
          </li>
          <li className="icon fa-laptops">
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>{config.services_title}</h2>
          <p>{config.services_subHeading}</p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/Servicios" className="button fit">{config.services_call2action}</a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
