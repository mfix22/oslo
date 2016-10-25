import React from 'react'
import LicenseEdit from './LicenseEdit'
import ContentEditable from './ContentEditable'
import FilterCard from './FilterCard'

const DocumentSection = ({header, subHeader, endContent}) => {
  return (
    <section className="document-section">
      <h2>
        {header}
      </h2>
      <h4>
        {subHeader}
      </h4>
      <div className="grid">
        <FilterCard
          filter="MIT"
          title="MIT"
        />
        <FilterCard
          filter="ISC"
          title="ISC"
        />
        <FilterCard
          filter="GNU"
          title="GNU (v3.0)"
        />
        {endContent}
      </div>
    </section>
  )
}

export default DocumentSection
