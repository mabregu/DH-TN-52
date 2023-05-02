import React from 'react'
import PropTypes from 'prop-types'

const Props = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <small>Edad: {props.age}</small>
        </div>
    )
}

Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

Props.defaultProps = {
    age: 10
}

export default Props