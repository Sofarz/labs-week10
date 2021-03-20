import React from 'react'

import FooterWrapper from './FooterWrapper.js'

export const App = () => {
  return (
    <>
    <div class="main-container">
      <footer className="footer">
        <FooterWrapper
          firstCircleColor="#DA876C"
          secondCircleColor="#387E8E"
          lineColor="#AB558B"
          firstLink="About"
          secondLink="Careers"
          thirdLink="Pricing"
          fourthLink="Feedback"
          fifthLink="Roadmap"
          color="#323232"
        />
      </footer>
    </div>
    </>
  );
};
