import { useEffect, useState } from "react"
import ArtListItem from "./components/ArtListItem"

function ArtsSection() {
  const [allArtData, setAllArtData] = useState([])

  useEffect(() => {
    const artApiURL = 'https://api.artic.edu/api/v1/artworks/129884'
    const imgArtApiURL = 'https://api.artic.edu/api/v1/artworks?fields=artist_title,title,subject_ids,image_id'
    fetch(imgArtApiURL)
      .then(res => res.json())
      .then(data => setAllArtData([...allArtData, data.data]))
      .then(console.log('art stdfate',allArtData[0]))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {allArtData[0].map((info, i)=> {
            return (
              <ArtListItem 
              title={info.title}
              key={i}
              />
              )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
