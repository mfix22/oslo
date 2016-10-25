import React from 'react'
import FileCreator from './FileCreator'
import ContentEditable from './ContentEditable'

class LicenseEdit extends React.Component {
  render() {
    return (
      <div>
        <pre>
          {<ContentEditable text={this.props.license}/>}
        </pre>
        <FileCreator text={this.props.license}/>
      </div>
    )
  }
  
  onChange(event) {
    this.setState({text : event.target.value});
    console.log(event.target.value);
  }
}

export default LicenseEdit
