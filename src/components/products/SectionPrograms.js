import React from 'react'
import Programme from './Programme'

const SectionPrograms = ({ programs }) => {

  const list = Object.keys(programs).map(item => (
    <Programme
      name={item}
      item={programs[item]}
      key={item}
    />
  ))

  return (
    <div className="row section-programs" id="programs">
        <div className="row">
          <h2> PROGRAMMES </h2>
        </div>
        <div className="row">
          {list}
        </div>
    </div>
  )
}

export default SectionPrograms
