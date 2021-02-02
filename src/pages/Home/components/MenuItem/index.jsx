import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default function MenuItem({ image, text, alt, toUrl }) {
  return (
    <li>
      <Link to={toUrl}>
        <img className='link-img' src={image} alt={alt} />
        <p className='paragraph-img'>{text}</p>
      </Link>
    </li>
  );
}