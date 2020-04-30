import React from 'react';
import ContactItem from '../contact-item/contact-item.component';

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
          animation: 'connect-icon',
        },
        {
          id: 1,
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/rodrigo-toyama-1861b1154/',
          fontIcon: faLinkedinIn,
          aria: 'LinkedIn',
          animation: 'connect-icon',
        },
        {
          id: 2,
          name: 'github',
          url: 'https://github.com/toyamarodrigo',
          fontIcon: faGithub,
          aria: 'Github',
          animation: 'connect-icon',
        },
        {
          id: 3,
          name: 'mail',
          url: 'mailto:toyama.rodrigo@gmail.com',
          fontIcon: faEnvelopeSquare,
          aria: 'Mail',
          animation: 'connect-icon',
        },
      ],
    };
  }
  render() {
    const { contactList } = this.state;
    return (
      <ul className="connect-list">
        {contactList.map(({ id, ...otherProps }) => (
          <ContactItem key={id} {...otherProps} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
