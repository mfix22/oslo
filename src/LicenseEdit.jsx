import React from 'react'
import FileCreator from './FileCreator'

const LicenseEdit = ({text}) => (
  <div>
    <pre>
      {text}
    </pre>
    <FileCreator/>
  </div>
)

export default LicenseEdit
