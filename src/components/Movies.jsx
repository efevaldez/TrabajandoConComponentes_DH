import React from 'react'
import PropTypes from 'prop-types'


function Movies({
    id = 0,
    title = "No hay datos",
    qualification = 0,
    awards = 0,
    duration = 0
}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{qualification}</td>
            <td>{awards}</td>
            <td>{duration}</td>
        </tr>
    )
}

Movies.propTypes={
    id: PropTypes.number,
    title: PropTypes.string,
    qualification: PropTypes.number,
    awards: PropTypes.number,
    duration: PropTypes.number
}

export default Movies
