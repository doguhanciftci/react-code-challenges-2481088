import { useEffect } from "react"

const alertMessage = () => alert("'Double Clicked!")

export default function WindowEvent () {

  useEffect(() => {
      window.addEventListener('dblclick', alertMessage);

      return () => window.removeEventListener('dblclick', alertMessage);
  }, []);

  return (
    <h2>Window event active</h2>
  )
}
