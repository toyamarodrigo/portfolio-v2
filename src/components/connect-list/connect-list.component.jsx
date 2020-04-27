import React from 'react';

import ConnectIcons from '../connect-icons/connect-icons.components';

class ConnectList extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          id: 1,
          title: 'file',
          url: 'https://github.com/toyamarodrigo',
          font: 'faFileAlt',
          clase: 'fa-file-text cv',
          addClass: false,
        },
        {
          id: 2,
          title: 'linkedin',
          url: 'https://www.linkedin.com/in/rodrigo-toyama-1861b1154/',
          font: 'faLinkedinIn',
          clase: 'fa-linkedin',
          addClass: false,
        },
        {
          id: 3,
          title: 'github',
          url: 'https://github.com/toyamarodrigo',
          font: 'faGithub',
          clase: 'fa-github',
          addClass: false,
        },
        {
          id: 4,
          title: 'mail',
          url: '',
          font: 'faEnvelopeSquare',
          clase: 'fa-envelope-square mail',
          addClass: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="connect-list">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <ConnectIcons key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ConnectList;
