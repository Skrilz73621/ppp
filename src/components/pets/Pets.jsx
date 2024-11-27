import React from 'react';
import styles from './Pets.module.css';

const Pets = ({ name, onClick }) => {

  return (
    <div className={styles.notification}>
      <div className={styles.notiglow} />
      <div className={styles.notiborderglow} />
      <div className={styles.notititle}>{name}</div>
      <div className={styles.notibody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus,
        expedita dignissimos recusandae sint facere! Nesciunt, accusamus maxime,
        veritatis, consectetur sunt sint natus illum eos quas inventore eaque
        excepturi. Quis!
      </div>
      <button onClick={onClick} className={styles.btn}>Click here!</button>
    </div>
  );
};

export default Pets;
