import React from 'react'
import Toggle from 'material-ui/Toggle';
import RaisedButton  from 'material-ui/RaisedButton'
import FileSaver from 'file-saver'
const { saveAs } = FileSaver

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


const FileCreator = (text) => {
  let toggled = true;

  const download = () => {
    const blob = new Blob([text.text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `LICENSE${(toggled) ? '.md' : '.txt'}`);
  }

  const onToggle = () => {
    toggled = !toggled;
  }

  return (
    <div>
      <RaisedButton
        label="Download LICENSE File"
        primary={true}
        style={button_style}
        onClick={download}
      />
      <Toggle
        style={toggle_style}
        label={`Uses ${(toggled) ? '.md' : '.txt'} file extension:`}
        defaultToggled={true}
        iconStyle={{
          margin: "0"
        }}
        onToggle={onToggle}
      />
    </div>
  )
}

export default FileCreator
