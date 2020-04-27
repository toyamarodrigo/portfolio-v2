import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ConnectIcons = ({ title, url, font, clase }) => (
  <div>
    <ul className="connect-list">
      <li>
        <a
          className={`${title} connect-icon`}
          href={url}
          aria-label={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={font} className={`fa ${clase}`} />
        </a>
      </li>
    </ul>
  </div>
);

export default ConnectIcons;
