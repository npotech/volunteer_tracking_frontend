import { useState } from 'react'

const useFormState = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  return {
    ...state,
    setValue: (name, value) => setState({ ...state, [name]: value })
  }
}

export default useFormState
