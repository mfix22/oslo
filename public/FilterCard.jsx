import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const FilterCard = ({filter, title, length, onClick}) => {
  return (
    <div onClick={onClick} className={`col col--${length || 1}-of-3`}>
      <div className="document">
        <h5>{title}</h5>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (!ownProps.filter) return {
    onClick : () => {
      window.location = ownProps.link;
    }
  }
  return {
    onClick : () => {
      dispatch({
        type : 'FILTER_LICENSE',
        filter : ownProps.filter
      })
    }
  }
}

FilterCard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(FilterCard)
