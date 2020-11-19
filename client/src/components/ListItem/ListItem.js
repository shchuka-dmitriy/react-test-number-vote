import React from 'react';
import styles from './ListItem.module.sass';

const ListItem = (props) => {

    const renderJson = (jsonParse) => {
        const paramsList = [];
        for(const key in jsonParse){
            if (jsonParse.hasOwnProperty(key)) {
                paramsList.push(
                    <span key={key} className={styles.title}>{key}: {jsonParse[key]}</span>
                )
            }
        }
        return paramsList;
    }

    /**
     *
     * @description Creates logs list element
     * @return {JSX.Element} - Logs list element
     */
    const renderProductItem = () => {
        const {url, json, date} = props.data;
        return (
            <div className={styles.descriptionContainer}>
                <div className={styles.containerPart}>
                    <span className={styles.title}>{date}</span>
                    <span className={styles.title}>{url}</span>
                </div>
                <div className={styles.containerPart}>
                    {renderJson(json)}
                </div>
            </div>
        )
    };

    return (
        <>
            {renderProductItem()}
        </>
    )
}

export default ListItem;