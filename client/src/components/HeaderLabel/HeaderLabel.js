import React from 'react';
import styles from './HeaderLabel.module.sass';
import PropTypes from "prop-types";

const HeaderLabel = ({text}) => {
    return (
        <div className={styles.mainContainer}>
            <label className={styles.mainHeader}>{text}</label>
        </div>
    );
}

HeaderLabel.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HeaderLabel;