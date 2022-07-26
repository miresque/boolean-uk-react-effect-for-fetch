import {useState} from 'react'
import SubjectList from './SubjectList'

function ArtListItem(props) {
  const {title, artist, artistSubjects, imageID} = props
  const [artData, setArtData] = useState({
     title: title,
     artist: artist,
     artist_subjects: artistSubjects,
     image: imageID
  })
  const imgURL = `https://www.artic.edu/iiif/2/${artData.image}/full/843,/0/default.jpg`

  return (
    <li>
        <div className="frame">
            <img
            src={imgURL}
            />
        </div>
        <h3>{artData.title}</h3>
        <p>Artist: {artData.artist}</p>
        { artData.artist_subjects.length > 0 && 
            <SubjectList artData={artData} />
        }
    </li>
  )
}

export default ArtListItem