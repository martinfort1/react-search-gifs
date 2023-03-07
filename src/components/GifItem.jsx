import propTypes from 'prop-types'

import React from 'react'

export const GifItem = ({ title, url, id }) => {
    // console.log({title, url});
  return (
    <div className='card'>
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
    )
}
// yarn add prop-types

GifItem.propTypes ={
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
}