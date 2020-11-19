import React from 'react';
import {connect} from 'react-redux';
import styles from './Statistic.module.sass';
import commonStyles from '../../assets/commonStyles.module.sass';
import {getStatisticAction} from "../../actions/actionCreator";
import Spinner from '../../components/Spinner/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';
import history from "../../browserHistory";
import moment from 'moment';
import InputField from "../InputField/InputField";
import CircleChart from "../CircleChart/CircleChart";

class Statistic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     *
     * @description Get new data from server or localstorage
     */
    getData = (date) => {
        const savedDate = localStorage.getItem("date");
        this.props.getStatistic(date || savedDate || this.state.date);
    };

    onChangeDateHandler = (event) => {
        localStorage.setItem("date", event.target.value);
        this.getData(event.target.value);
    };

    goToVoteNumber = () => {
        history.push('/votePage');
    };

    formInputClassNames = {
        container: commonStyles.inputContainer,
        input: commonStyles.input,
        valid: commonStyles.valid,
        notValid: commonStyles.notValid,
        warning: commonStyles.fieldWarning
    };

    render() {
        const { error, isFetching, statisticData } = this.props;
        const savedDate = localStorage.getItem("date");
        const selectedDay = savedDate || this.state.date;
        const day = moment(selectedDay).format('Do MMMM YYYY');
        return (
            <>
                <div className={styles.mainInfoContainer}>
                    {error ? <div className={commonStyles.tryContainer}><TryAgain getData={this.getData}/></div> :
                        (
                            <div className={styles.statisticContainerWrapper}>
                                {
                                    isFetching
                                        ?   <div className={commonStyles.containerSpinner}>
                                            <Spinner/>
                                        </div>
                                        :
                                        <div>
                                            <div className={styles.statisticContainerNavigation}>
                                                <div className={styles.inputMainContainer}>
                                                    <span className={styles.selectDateLabel}>Select date</span>
                                                    <InputField
                                                        value = {selectedDay}
                                                        name = 'inputDate'
                                                        classes = {this.formInputClassNames}
                                                        type = 'date'
                                                        label = 'Date'
                                                        maxDate = {this.state.date}
                                                        onChange={this.onChangeDateHandler}
                                                    />
                                                </div>
                                                <button onClick={this.goToVoteNumber} className={styles.voteButton}>
                                                    Vote for number
                                                </button>
                                            </div>
                                            {
                                                !statisticData.length > 0
                                                    ? <span className={styles.notFoundLabel}>No statistic found for {day} </span>
                                                    : <CircleChart values={statisticData} selectedDay={selectedDay}/>
                                            }
                                        </div>
                                }
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.statisticStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatistic: (data) => dispatch(getStatisticAction(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);