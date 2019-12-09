import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

class ErrorComponent extends React.Component {
  render () {
    return (
      <>

      {this.props.error &&
        <Message negative style={{ marginTop: 150 }}>
          <Message.Header>
            Dangit! An error has occurred!
          </Message.Header>
          <p>{this.props.error}</p>
        </Message>

      }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorComponent)
