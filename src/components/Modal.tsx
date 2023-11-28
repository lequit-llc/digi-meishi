import { useState } from 'react';
import { ReactNode } from 'react';
import styles from '@/styles/Home.module.css'

interface CardProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<CardProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles.modal} style={{ transform: `scale(${isOpen ? 1.0 : 1.5 })`, transition: 'transform 0.3s ease' }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;