import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './footer-contact.styles.scss';

const FooterContact = ({ profile }) => (
  <ul className="footer-contact-list">
    {profile.basics.footer.map((profile, id) => (
      <li key={id}>
        <a
          className={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={
              profile.name === 'ig'
                ? faInstagram
                : profile.name === 'linkedin'
                ? faLinkedinIn
                : profile.name === 'github'
                ? faGithub
                : ''
            }
            className="svg-icon"
          />
        </a>
      </li>
    ))}
  </ul>
);
export default FooterContact;
