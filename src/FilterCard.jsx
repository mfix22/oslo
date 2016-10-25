import React from 'react'

const FilterCard = ({filter, title, length}) => {
  return (
    <div className={`col col--${length || 1}-of-3`}>
      <div className="document">
        <h5>{title}</h5>
      </div>
    </div>
  )
}

export default FilterCard
