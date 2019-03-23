const ThankYou = ({ location }) =>
  location.state.from === '/demographic'
    ? 'Thank you for submitting'
    : 'Thank you for signing out'

export default ThankYou
