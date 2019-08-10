const ThankYou = ({ location }) =>
  location.state.from === '/demographic'
    ? 'Thank you for Signing In'
    : 'Thank you for Signing Out'

export default ThankYou
