import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from "react-chartjs-2";
import moment from "moment";
import styles from './CircleChart.module.sass';
import CONSTANTS from '../../constants';

const CircleChart = ({values, selectedDay}) => {
    const day = moment(selectedDay).format('Do MMMM YYYY');

    const labelArr = [];
    const dataArr = [];
    values.forEach( (dayStatistic) => {
        labelArr.push(dayStatistic.number);
        dataArr.push(dayStatistic.count);
    })

    const state = {
        labels: labelArr,
        datasets: [
            {
                label: 'Vote statistic',
                backgroundColor: CONSTANTS.BACKGROUND_COLOR,
                hoverBackgroundColor: CONSTANTS.HOVER_BACKGROUND_COLOR,
                data: dataArr
            }
        ]
    }

    return (
        <div className={styles.mainContainer}>
            <Pie
                data={state}
                options={{
                    title:{
                        display: true,
                        text: `Statistic of number vote per ${day}`,
                        fontSize: document.documentElement.clientWidth > 600 ? 22 : 14
                    },
                    legend:{
                        display: true,
                        position: 'right',
                        labels: {
                            fontSize: document.documentElement.clientWidth > 750 ? 20 : 13
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function (tooltipItem, data) { return data.labels[tooltipItem[0].index]; },
                            label: function (tooltipItem, data) {
                                const amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                const total = eval(data.datasets[tooltipItem.datasetIndex].data.join("+"));
                                return ' ( ' + parseFloat(amount * 100 / total).toFixed(2) + '% )';
                            }
                        },
                        titleFontSize: 16,
                        bodyFontSize: 16
                    }
                }}
            />
        </div>
    );
};

CircleChart.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object),
    selectedDay: PropTypes.string.isRequired,
};

export default CircleChart;