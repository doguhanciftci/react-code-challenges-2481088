import { useReducer } from "react"

const initialState = {
  a: 0,
  b: 0,
  result: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'a':
      return { ...state, a: action.value }
    case 'b':
      return { ...state, b: action.value }
    case 'ADD':
      return { ...state, result: state.a + state.b }
    case 'SUBTRACT':
      return { ...state, result: state.a - state.b }
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({ type: 'a', value: number })}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({ type: 'b', value: number })}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => dispatch({ type: 'SUBTRACT' })}>-</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>c</button>
      </div>
      <div><h2>Result:</h2>{state.result}</div>
    </div>
  )
}
