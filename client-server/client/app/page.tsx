'use client'

import React, {useState, useEffect} from "react"

export default function Home() {
  const [message, setMessage ] = useState('Loading');
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/test').then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setArray(data.array)
      }
    )
  }, [])
  return (
   <>
    <div>
      {message}
    </div>
    <div>
      {
        array.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))
      }
    </div>
   </>
  )
}
