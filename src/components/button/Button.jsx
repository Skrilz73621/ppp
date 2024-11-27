import React, { useState, useRef } from 'react';
import styles from './Button.module.css';

const Button = ({ text, textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const messageRef = useRef(null);

  const copyTextToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      // Перезапуск анимации
      if (messageRef.current) {
        messageRef.current.classList.remove(styles.animate);
        void messageRef.current.offsetWidth; // Трюк для перезапуска анимации
        messageRef.current.classList.add(styles.animate);
      }

      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Ошибка:', err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => copyTextToClipboard(textToCopy)}
        className={styles.button}
      >
        {text}
      </button>
      {isCopied && (
        <span ref={messageRef} className={`${styles.copiedMessage} ${styles.animate}`}>
          The text has been successfully copied
        </span>
      )}
    </div>
  );
};

export default Button;
