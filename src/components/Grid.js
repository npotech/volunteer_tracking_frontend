import styled from 'styled-components'
import prop from '../utils/prop'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${prop('columns')};
  grid-template-rows: ${prop('rows')};
  align-items: ${prop('alignItems')};
  justify-content: ${prop('justify-content')};
  grid-gap: ${prop('gap')};
`

export default Grid
