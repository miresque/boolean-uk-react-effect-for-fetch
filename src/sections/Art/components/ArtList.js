import React from 'react'
import ArtListItem from "./ArtListItem"

function ArtList(props) {
  const { allArtData } = props

  return (
    <ul className="art-list">
        {allArtData.map((info, i)=> {
        return (
            <ArtListItem 
            title={info.title}
            key={i}
            />
            )
        })}
    </ul>
  )
}

export default ArtList