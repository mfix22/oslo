import React from 'react'

const ContentEditable = ({text}) => {
  return (
      <span
        dangerouslySetInnerHTML={{
          __html : text.replace(new RegExp('{{\\w*}}', 'g'), `<span ContentEditable="true" style="color:#5555ff;" className="contenteditable">$&</span>`)
        }}
      />
    )
}

export default ContentEditable
