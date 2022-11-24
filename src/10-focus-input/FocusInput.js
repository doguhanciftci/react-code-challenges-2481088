import { useEffect, useRef } from 'react';

export default function FocusInput() {

  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={ref} name='focused-input'></input>
    </div>
  )
}
