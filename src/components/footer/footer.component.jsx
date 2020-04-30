import React from 'react';
import ContentContainer from '../content-container/content-container.component';
import FooterContact from '../footer-contact/footer-contact.component';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer-copyright text-center py-3 fixed-bottom">
    <ContentContainer>
      <FooterContact />
    </ContentContainer>
    <ContentContainer className="text-white">
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a href="https://toyamarodrigo.com">Rodrigo Toyama</a>
    </ContentContainer>
  </div>
);

export default Footer;
