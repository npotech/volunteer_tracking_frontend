import styled from 'styled-components'
import prop from '../utils/prop'

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  width: ${prop('width')};
`

export default CenteredContainer
