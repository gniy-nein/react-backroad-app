import React from 'react'
import { socialLinks } from '../data';

const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li>
            <a
              href={link.href}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks