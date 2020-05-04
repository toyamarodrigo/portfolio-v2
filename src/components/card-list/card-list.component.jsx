import React from 'react';
import { Container } from 'react-bootstrap'

class CardList extends React.Component {
  render() {
    return <Container className="py-5">{this.props.children}</Container>;
  }
}

export default CardList;
