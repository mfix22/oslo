import React from 'react'
import Toggle from 'material-ui/Toggle';
import RaisedButton  from 'material-ui/RaisedButton'
const FileSaver = require('file-saver')
const { saveAs } = FileSaver

// var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
// saveAs(blob, "hello world.txt");

const button_style = {
  display: 'inline-block',
  marginRight: '30px'
}

const toggle_style = {
  fontFamily: 'monospace',
  fontSize : '12px',
  maxWidth: 220,
  display: 'inline-block'
}

const FileCreator = (text) => (
  <div>
    <RaisedButton
      label="Download LICENSE File"
      primary={true}
      style={button_style}
    />
    <Toggle
      style={toggle_style}
      label="Use .md file extension:"
      defaultToggled={true}
      elementStyle={{
        margin: "0"
      }}
      thumbStyle={{
        margin: "0"
      }}
      trackStyle={{
        margin: "0"
      }}
      iconStyle={{
        margin: "0"
      }}
    />
  </div>
)

export default FileCreator
