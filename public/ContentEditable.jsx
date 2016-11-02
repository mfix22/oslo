import React from 'react'

const ContentEditable = ({text}) => {
  return (
      <span
        id="editedText"
        dangerouslySetInnerHTML={{
          __html : text.replace(new RegExp('{{\\w*}}', 'g'), `<span contentEditable="true" style="color:#5555ff;" className="contenteditable">$&</span>`)
        }}
      />
    )
}

export default ContentEditable
