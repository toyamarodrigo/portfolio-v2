import React from 'react';
import { Container } from 'react-bootstrap';
import CardItem from '../card-item/card-item.component';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 0,
          title: 'Invoice Management System',
          subtitle: 'Used Tech',
          urlImg:
            'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg',
          description:
            'Some quick example text to build on the card title and up the bulk of the cards content. text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
          classPosition: false,
        },
        {
          id: 1,
          title: 'Web Portfolio',
          subtitle: 'Used Tech',
          urlImg:
            'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg',
          description:
            'Some quick example text to build on the card title and up the bulk of the cards content. text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
          classPosition: 'flex-row-reverse',
        },
        {
          id: 2,
          title: 'Made-up SAP Company Web',
          subtitle: 'Used Tech',
          urlImg:
            'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg',
          description:
            'Some quick example text to build on the card title and up the bulk of the cards content. text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
          classPosition: false,
        },
        {
          id: 3,
          title: 'Made-up E-Commerce Web',
          subtitle: 'Used Tech',
          urlImg:
            'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg',
          description:
            'Some quick example text to build on the card title and up the bulk of the cards content. text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
          classPosition: 'flex-row-reverse',
        },
      ],
    };
  }
  render() {
    const { cardList } = this.state;
    return (
      <Container>
        {cardList.map(({ id, ...otherProps }) => (
          <CardItem key={id} {...otherProps} />
        ))}
      </Container>
    );
  }
}

export default CardList;
