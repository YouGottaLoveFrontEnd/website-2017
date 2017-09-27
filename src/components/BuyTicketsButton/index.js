import React from 'react';
import './BuyTicketsButton.css';

const BuyTicketsButton = () => {
  const sendBi = () => {
    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'purchase',
        eventAction: 'click',
        eventLabel: 'Buy Tickets',
      });
    }
  };
  return (
    <a
      target="_blank"
      href="https://www.eventbrite.com/e/you-gotta-love-frontend-2017-tickets-32014463121?aff=websitecta#tickets"
      className="buy-tickets drop-shadow-small"
      rel="noopener noreferrer"
      onClick={sendBi}
    >
      Buy Tickets
    </a>
  );
};

export default BuyTicketsButton;
