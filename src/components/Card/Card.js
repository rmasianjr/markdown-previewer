import React from 'react';
import './Card.css';

const Card = ({ children, title }) => (
  <div className="Card">
    <div className="Card-header">
      <span className="Card-header-title">{title}</span>
      <div className="Card-header-circles">
        <span className="circle-1" />
        <span className="circle-2" />
        <span className="circle-3" />
      </div>
    </div>
    <div className="Card-content">{children}</div>
  </div>
);

export default Card;
