import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FileCreator from './FileCreator'
import ContentEditable from './ContentEditable'

const LicenseEdit = ({license}) => {
  let text;
  return (
    <div className="file-area">
      <pre
        ref={node => {
          if (text) console.log(text.children[0]);
          text = node
        }}
      >
          {<ContentEditable text={license} />}
      </pre>
      <FileCreator editedText={text} text={license}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    license : state.text,
  }
}

export default connect(mapStateToProps)(LicenseEdit)
