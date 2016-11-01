import React from 'react'
import LicenseEdit from './LicenseEdit'
import ContentEditable from './ContentEditable'
import FilterCard from './FilterCard'


import MIT_License from 'to-string!../assets/documents/MIT_LICENSE.md'

const DocumentSection = ({header, subHeader, endContent, cards}) => {
  return (
    <section className="document-section">
      <h2>
        {header}
      </h2>
      <h4>
        {subHeader}
      </h4>
      <div className="grid">
        { cards.map((card, i) => (<FilterCard key={i} filter={card.filter} link={card.link} title={card.title} length={3 / cards.length}/>)) }
        {endContent}
      </div>
    </section>
  )
}

export default DocumentSection
