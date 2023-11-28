import React from 'react';
import styles from '@/styles/Home.module.css';
import { Fragment } from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    const cutMessage = description.split('\n');
    console.log(cutMessage);
    return (
        <div className={styles.card}>
                <div className={styles["card-content"]}>
                <h2 className={styles["card-title"]}>{title}</h2>
                <p className={styles["card-description"]}>{cutMessage.map((item, index) => (
                     <Fragment key={index}>
                        {item}
                        <br />
                    </Fragment>
                ))}</p>
            </div>
        </div>
    );
};

export default Card;