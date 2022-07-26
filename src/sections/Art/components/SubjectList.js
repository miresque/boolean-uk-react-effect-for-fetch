import React from 'react'

function SubjectList(props) {
  const { artData } = props
  return (
    <>
    <h4>Artistic Subjects:</h4>
    <ul>
        {artData.artist_subjects.map((subj , i) => {
        return (
            <li key={i}>{subj}</li>
            )   
        })}
    </ul>
    </>
  )
}

export default SubjectList