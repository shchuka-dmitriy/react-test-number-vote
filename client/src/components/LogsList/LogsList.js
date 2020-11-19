import React from 'react';
import {connect} from 'react-redux';
import styles from './LogsList.module.sass';
import commonStyles from '../../assets/commonStyles.module.sass';
import {getLogsAction} from "../../actions/actionCreator";
import Spinner from '../../components/Spinner/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';
import classNames from 'classnames';
import ListItem from "../ListItem/ListItem";

class LogsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            offset: 0
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     *
     * @description Get new logs data from server
     */
    getData = () => {
        this.props.getLogs(Object.assign({}, {
            limit: this.state.limit,
            offset: this.state.offset
        }));
    };

    prevButtonHandler = () => {
        if (this.state.offset > 0) {
            this.setState({
                offset: --this.state.offset
            });
            this.getData();
        }
    };

    nextButtonHandler = () => {
        if (this.props.logsData.length >= 10) {
            this.setState({
                offset: ++this.state.offset
            });
            this.getData();
        }
    };

    /**
     * @description Create list of html elements (logs)
     * @return {html[]}
     */
    setLogsList = () => {
        const { logsData } = this.props;
        return ( logsData ?
            [...logsData.values()].map(log =>
                <ListItem id={log.id} key={log.id + 1} data={log}/>) : null
            )
    };

    render() {
        const { error, isFetching, haveMore } = this.props;

        return (
            <>
                <div className={styles.mainInfoContainer}>
                    {error ? <div className={commonStyles.tryContainer}><TryAgain getData={this.getData}/></div> :
                        (
                            <div className={styles.statisticContainerWrapper}>
                                <button className={ classNames(styles.paginationButton,
                                    this.state.offset === 0 && styles.notActive) }
                                        onClick={this.prevButtonHandler}>prev</button>
                                {
                                    isFetching
                                        ?   <div className={commonStyles.containerSpinner}>
                                            <Spinner/>
                                        </div>
                                        :
                                        <div className={styles.logsContainer}>
                                            {this.setLogsList()}
                                        </div>
                                }
                                <button className={classNames(styles.paginationButton, !haveMore && styles.notActive)}
                                        onClick={this.nextButtonHandler}>next</button>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.logsStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLogs: (data) => dispatch(getLogsAction(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogsList);