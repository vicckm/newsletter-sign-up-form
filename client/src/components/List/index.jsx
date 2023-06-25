import React from 'react';
import './style.scss';

export default function List({ children }) {
  return <ol className="newsletter-list">{children}</ol>;
}
