import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FileCreator from './FileCreator'
import ContentEditable from './ContentEditable'

const LicenseEdit = ({license}) => {
  return (
    <div>
      <pre>
          {<ContentEditable text={license}/>}
      </pre>
      <FileCreator text={license}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    license : state.text,
  }
}

export default connect(mapStateToProps)(LicenseEdit)
