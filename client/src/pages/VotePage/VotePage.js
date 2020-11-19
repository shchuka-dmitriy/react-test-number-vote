import React from 'react';
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import NumberList from "../../components/NumberList/NumberList";
import styles from "../../assets/commonStyles.module.sass"
import BackButton from "../../components/BackButton/BackButton";

const VotePage = () => {
    return (
        <div className={styles.mainContainer}>
            <HeaderLabel text={"vote for favorite number"}/>
            <BackButton text={"to statistic"}/>
            <NumberList/>
        </div>
    );
};

export default VotePage;