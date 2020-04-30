import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact-item.styles.scss';

const ContactItem = ({ id, name, url, fontIcon, aria, animation }) => (
  <li key={id}>
    <a
      className={`${name} ${animation}`}
      href={url}
      aria-label={aria}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={fontIcon} className="svg-icon" />
    </a>
  </li>
);

export default ContactItem;
