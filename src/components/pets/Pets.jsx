import React from 'react';
import styles from './Pets.module.css';
import photo from '../../media/123.png'

const Pets = ({ name, onClick, description, photo}) => {

  return (
    <div className={styles.notification}>
      <div className={styles.notiglow} />
      <div className={styles.notiborderglow} />
      <div className={styles.notititle}>{name}
        <div className={styles.image}>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className={styles.notibody}>
    
        {description}
      </div>
    </div>
  );
};

export default Pets;
