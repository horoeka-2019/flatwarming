import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown } from 'semantic-ui-react'

class FlatmateList extends React.Component {
  onChange = (event, data) => {
    const { flatmates } = this.props
    const selectedFlatmate = data.value

    const flatmate = flatmates.find(flatmate =>
      flatmate.name === selectedFlatmate)

    this.props.eventHandlerFlatmate(flatmate)
  }

  render () {
    const options = this.props.flatmates.map(flatmate => ({
      key: flatmate.id,
      value: flatmate.name,
      text: flatmate.name
    }))

    return (
      <Form.Field control={Dropdown}
        selection
        clearable
        placeholder="Select Flatmate"
        onChange={this.onChange}
        options={options}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    flatmates: state.flatmatesReducer
  }
}

export default connect(mapStateToProps)(FlatmateList)
