import React from 'react';
import Statistic from "../../components/Statistic/Statistic";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import styles from "../../assets/commonStyles.module.sass"
import BackButton from "../../components/BackButton/BackButton";

const Home = () => {

    return (
        <div className={styles.mainContainer}>
            <HeaderLabel text={"favorite numbers statistics"}/>
            <Statistic/>
            <BackButton text={"to logs"} url={"/logsPage"}/>
        </div>
    )
};

export default Home;