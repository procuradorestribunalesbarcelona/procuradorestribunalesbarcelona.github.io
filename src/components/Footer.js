import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; {config.home_heading}</li>
        <li>{config.powered}: <a href="https://sirastudio.net" target="_blank">SIRAstudio</a> · {config.using}: <a href="http://html5up.net" target="_blank">HTML5 UP</a></li>
      </ul>
    </footer>
  );
}
