import { useState } from 'react';

export default function DogPics () {
  // API: https://dog.ceo/dog-api/

  const [source, setSource] = useState('https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg');

  const handleClick = () => {

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setSource(data.message))
  }

  return (
    <div className='dog-pics'>
      <img alt='random dog images' src={source} />
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}
