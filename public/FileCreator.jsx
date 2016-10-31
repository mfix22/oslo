import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
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

let FileCreator = ({text, toggled, onToggle}) => {

  const download = () => {
    const blob = new Blob([text.text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `LICENSE${(toggled) ? '.md' : '.txt'}`);
  }
  if (text === '') {
    return (<div></div>)
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

const mapStateToProps = (state) => {
  return {
    text : state.text,
    toggled: state.file_type_md,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle : () => {
      dispatch({
        type : 'TOGGLE_USE_MD'
      })
    }
  }
}

FileCreator.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileCreator)
