import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './contact-list.styles.scss';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 0,
          name: 'file',
          url: 'https://github.com/toyamarodrigo',
          fontIcon: faFileAlt,
          aria: 'CV',
        },
        {
          id: 1,
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/rodrigo-toyama-1861b1154/',
          fontIcon: faLinkedinIn,
          aria: 'LinkedIn',
        },
        {
          id: 2,
          name: 'github',
          url: 'https://github.com/toyamarodrigo',
          fontIcon: faGithub,
          aria: 'Github',
        },
        {
          id: 3,
          name: 'mail',
          url: 'mailto:toyama.rodrigo@gmail.com',
          fontIcon: faEnvelopeSquare,
          aria: 'Mail',
        },
      ],
    };
  }
  render() {
    return (
      <ul className="connect-list">
        {this.state.contactList.map(({ id, name, url, fontIcon, aria }) => (
          <li key={id}>
            <a
              className={`${name} connect-icon`}
              href={url}
              aria-label={aria}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={fontIcon} className="svg-icon" />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

// <ul>
//     <li>
//     <a
//       className={`${this.state.contactList.name} connect-icon`}
//       href={url}
//       aria-label="CV"
//     >
//       <FontAwesomeIcon icon={fontIcon} className="svg-icon" />
//     </a>
//   </li>
// </ul>
