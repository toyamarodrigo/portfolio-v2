import React from 'react';
import { Row } from 'react-bootstrap';

import './contact-list.styles.scss';

class ContactList extends React.Component {
  render() {
    return <Row className="justify-content-center">{this.props.children}</Row>;
  }
}

export default ContactList;
