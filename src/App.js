import React, { useEffect, useState } from 'react'

function Some() {
  return <div>hello worldsss</div>
}
export default function App() {
  const [testCode, setTestCode] = useState(false)
  useEffect(() => {
    setTestCode(true)
    console.log(testCode)
  }, [])
  return (
    <div>
      <Some />
    </div>
  )
}
