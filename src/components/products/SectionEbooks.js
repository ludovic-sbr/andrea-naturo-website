import React from 'react'

import Ebook from './Ebook'

const SectionEbooks = ({ ebooks }) => {

  const list = Object.keys(ebooks).map(item => (
    <Ebook
      item={ebooks[item]}
      key={item}
    />
  ))

  return (
    <div className="row section-ebooks" id="ebooks">
      <div className="row">
        <h2> E-BOOKS </h2>
      </div>
      <div className="row">
        {list}
      </div>
    </div>
  )
}

export default SectionEbooks