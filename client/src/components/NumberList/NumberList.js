import React from 'react';
import styles from './NumberList.module.sass';
import {createVoteAction} from "../../actions/actionCreator";
import {connect} from "react-redux";
import {confirmAlert} from 'react-confirm-alert';
import CONSTANTS from '../../constants'

const NumberList = (props) => {
    const voteForNumber = (number) => {
        confirmAlert({
            message: `Are you sure wish to vote for number ${number}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        props.createVote(Object.assign({}, {
                            number: number
                        }));
                        window.location.assign(CONSTANTS.HOME_URL);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    }

    const buttonArr = [];
    const renderNumbers = () => {
        for(let i = 1; i < 10; ++i) {
            buttonArr.push(
                <button className={styles.numberElem} key={i} onClick={() => voteForNumber(i)}>
                    <span className={styles.number}>{i}</span>
                </button>);
        }
        return buttonArr;
    }

    return (
        <div className={styles.numberListMainContainer}>
            {renderNumbers()}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createVote: (data) => dispatch(createVoteAction(data)),
    }
};

export default connect(null, mapDispatchToProps)(NumberList);