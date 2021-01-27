import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images}) {
  return (
    <ul className={s.ImageGallery}>
      {images  &&
        images.map(({id, webformatURL, tags, largeImageURL}) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
    </ul>
  );
}


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

 