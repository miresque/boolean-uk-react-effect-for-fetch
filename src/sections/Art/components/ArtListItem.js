import {useState} from 'react'

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
            <>
            <h4>Artistic Subjects:</h4>
            <ul>
                {artData.artist_subjects.map((subj) => {
                return (
                    <li>{subj}</li>
                    )   
                })}
            </ul>
            </>
        }
    </li>
  )
}

export default ArtListItem