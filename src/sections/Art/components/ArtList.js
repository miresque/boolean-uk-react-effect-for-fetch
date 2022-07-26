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
            artist={info.artist_title}
            artistSubjects={info.subject_titles}
            imageID={info.image_id}
            key={i}
            />
            )
        })}
    </ul>
  )
}

export default ArtList