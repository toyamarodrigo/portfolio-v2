import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './contact-list.styles.scss';

class ContactList extends React.Component {
  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={10} lg={5}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default ContactList;
