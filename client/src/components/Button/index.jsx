import React from 'react';
import './style.scss';

export default function Button({ text, type = 'button', onClick = null }) {
  return (
    <button type={type} className="newsletter-btn" onClick={onClick}>
      {text}
    </button>
  );
}
