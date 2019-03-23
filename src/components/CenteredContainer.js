import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: 'max-content',
    margin: '0 auto'
  }
})

const CenteredContainer = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
)

export default withStyles(styles)(CenteredContainer)
