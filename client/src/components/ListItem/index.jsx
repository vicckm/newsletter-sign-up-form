import React from 'react';
import IconList from '../IconList';
import './style.scss';

export default function ListItem({ text }) {
  return (
    <li className="newsletter-list__item">
      <IconList /> <p>{text}</p>
    </li>
  );
}
