/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import { default as Img } from 'next/image';
/* ----------------------------- Image PropTypes ---------------------------- */
interface IImage {
  src: string;
  alt?: string;
  className?: string;
}

/* --------------------------- Image defaultProps --------------------------- */
const defaultProps = {
  alt: 'codewonders',
  className: '',
};

const Image: React.FC<IImage> = ({ src, alt, className }) => (
  <Img
    src={src}
    alt={alt || ''}
    id="cardHover"
    className={className}
    width={1200}
    height={900}
    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 83vw, 42vw"
  />
);

Image.defaultProps = defaultProps;

export default Image;
