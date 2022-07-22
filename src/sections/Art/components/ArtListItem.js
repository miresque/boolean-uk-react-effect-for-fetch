import {useState} from 'react'

function ArtListItem(props) {
    const {title, artist, artist_subjects} = props
    const [artData, setArtData] = useState({
        title: title,
        artist: '',
        artist_subjects: [],
        image: ''
      })

  return (
    <li>
        <div className="frame">
            <img
            src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"
            />
        </div>
        <h3>{artData.title}</h3>
        <p>Artist: </p>
        <h4>Artistic Subjects:</h4>
        <ul>
            <li>Century of Progress</li>
            <li>men</li>
            <li>portraits</li>
            <li>world's fairs</li>
            <li>Chicago World's Fairs</li>
        </ul>
    </li>
  )
}

export default ArtListItem