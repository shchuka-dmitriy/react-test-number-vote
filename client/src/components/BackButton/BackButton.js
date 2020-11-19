import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './BackButton.module.sass'
import PropTypes from "prop-types";

const BackButton = (props) => {
    function clickHandler(){
        props.url ? props.history.push(props.url) : props.history.goBack();
    }

    return (
        <button onClick={clickHandler} className={styles.buttonContainer}>
            <span>{props.text}</span>
        </button>
    )
};

BackButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default withRouter(BackButton);


