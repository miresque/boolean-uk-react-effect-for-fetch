import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [allArtData, setAllArtData] = useState([])
  
  useEffect(() => {
    const apiURL = 'https://api.artic.edu/api/v1/artworks'
    const specificFieldsApiURL = 'https://api.artic.edu/api/v1/artworks?fields=artist_title,title,subject_ids,image_id'
    fetch(specificFieldsApiURL)
      .then(res => res.json())
      .then(data => {
        // console.log('raw art data',data.data)
        setAllArtData(data.data)})
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList allArtData={allArtData} />
      </div>
    </section>
  )
}

export default ArtsSection
