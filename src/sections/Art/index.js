import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [allArtData, setAllArtData] = useState([])
  
  useEffect(() => {
    const imgArtApiURL = 'https://api.artic.edu/api/v1/artworks?fields=artist_title,title,subject_ids,image_id'
    fetch(imgArtApiURL)
      .then(res => res.json())
      .then(data => {
        console.log('art stdfate',data.data)
        setAllArtData(data.data)})
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <button onClick={() => console.log('artstate',allArtData)}>TEST</button>
      <div className="scroll-container">
        <ArtList allArtData={allArtData} />
      </div>
    </section>
  )
}

export default ArtsSection
