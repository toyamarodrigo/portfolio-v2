import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './contact-item.styles.scss';

const ContactItem = ({ profile }) => (
  <ul className="connect-list">
    {profile.basics.profiles.map((profile, id) => (
      <li key={id}>
        <a
          className={`${profile.name} ${profile.animation}`}
          href={profile.url}
          aria-label={profile.network}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={
              profile.name === 'file'
                ? faFileAlt
                : profile.name === 'linkedin'
                ? faLinkedinIn
                : profile.name === 'github'
                ? faGithub
                : profile.name === 'mail'
                ? faEnvelopeSquare
                : ''
            }
            className="svg-icon"
          />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactItem;
