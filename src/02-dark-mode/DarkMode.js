import { useState } from "react"

const darkModeCSS = 'dark-mode'

export default function DarkMode() {

  const [className, setClassName] = useState('')

  return (
    <div className={`page ${className}`}>
      <button className='dark-mode-button' onClick={() => setClassName(darkModeCSS)}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => setClassName('')}>Light Mode</button>
    </div>
  )
}
