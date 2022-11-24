import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']

  const context = useContext(ColorContext);

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => context.color = color} />)}
    </div>
  )
}

function Pixel () {
  const [color, setColor] = useState('lightGrey');

  const context = useContext(ColorContext);

  return <div style={{ height: '20px', width: '20px', backgroundColor: color, margin: '1px' }} onClick={() => setColor(context.color)} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  )
}
