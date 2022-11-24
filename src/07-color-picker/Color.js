export default function Color ({ hex, name, onClick }) {
  return (
    <button
      className='color-square'
      onClick={() => onClick(hex)}
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
