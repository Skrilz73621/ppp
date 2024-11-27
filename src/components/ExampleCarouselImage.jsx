import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleCarouselImage.module.css';

function ExampleCarouselImage({ text }) {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={styles.image}
        src={`https://via.placeholder.com/800x400?text=${encodeURIComponent(text)}`}
        alt={text}
      />
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
