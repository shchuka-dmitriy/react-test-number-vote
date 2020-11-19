import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const InputField = (props) => {
    const { input, type, classes, touched, active, error, onChange, maxDate, value} = props;
    const inputClassName = classNames(classes.input, {
        [classes.valid]: active && !error,
        [classes.notValid]: touched && error
    });

    return (
        <div className={classes.container}>
            <input {...input} type={type} value={value}
                   className={ inputClassName } onChange={onChange} max={maxDate}/>
            {classes.warning && (touched && (error && <span className={classes.warning}>{error}</span>))}
        </div>
    )
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    maxDate: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.shape({
        container: PropTypes.string,
        input: PropTypes.string,
        valid: PropTypes.string,
        notValid: PropTypes.string,
        warning: PropTypes.string
    })
};

export default InputField;