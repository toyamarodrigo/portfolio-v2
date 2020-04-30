import React from 'react';
import ContactItem from '../contact-item/contact-item.component'
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './footer-contact.styles.scss';

class FooterContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 0,
          name: 'ig',
          url: 'https://instagram.com/rt.codes',
          fontIcon: faInstagram,
        },
        {
          id: 1,
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/rodrigo-toyama-1861b1154/',
          fontIcon: faLinkedinIn,
        },
        {
          id: 2,
          name: 'github',
          url: 'https://github.com/toyamarodrigo',
          fontIcon: faGithub,
        },
      ],
    };
  }
  render() {
    const { contactList } = this.state;
    return (
      <ul className="footer-contact-list">
        {contactList.map(({ id, ...otherProps }) => (
          <ContactItem key={id} {...otherProps} />
        ))}
      </ul>
    );
  }
}

export default FooterContact;
