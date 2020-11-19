import React from 'react';
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import LogsList from "../../components/LogsList/LogsList";
import styles from "../../assets/commonStyles.module.sass"
import BackButton from "../../components/BackButton/BackButton";

const LogsPage = () => {
    return (
        <div className={styles.mainContainer}>
            <HeaderLabel text={"list of vote logs"}/>
            <BackButton text={"to statistic"}/>
            <LogsList/>
        </div>
    );
};

export default LogsPage;