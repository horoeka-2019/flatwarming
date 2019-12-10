import React from 'react'
import { getUserDetails } from '../api/registerFlatDetails'
import { connect } from 'react-redux'
import { hideLogin, hideReg, showLogout } from '../actions/nav-buttons'
import { Link } from 'react-router-dom'



import Footer from './Footer'

import {
  Button,
  Form,
  Input,
  FormField,
  List,
  Dropdown,
  Grid,
  Segment,
  Header,
  Image,
  Divider,
  Icon,
  Table
} from 'semantic-ui-react'


const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
  { key: 13, text: '13', value: 13 },
  { key: 14, text: '14', value: 14 },
  { key: 15, text: '15', value: 15 },
  { key: 16, text: '16', value: 16 },
  { key: 17, text: '17', value: 17 },
  { key: 18, text: '18', value: 18 },
  { key: 19, text: '19', value: 19 },
  { key: 20, text: '20', value: 20 },
  { key: 21, text: '21', value: 21 },
  { key: 22, text: '22', value: 22 },
  { key: 23, text: '23', value: 23 },
  { key: 24, text: '24', value: 24 },
  { key: 25, text: '25', value: 25 },
  { key: 26, text: '26', value: 26 },
  { key: 27, text: '27', value: 27 },
  { key: 28, text: '28', value: 28 },
  { key: 29, text: '29', value: 29 },
  { key: 30, text: '30', value: 30 },
  { key: 31, text: '31', value: 31 }
]

const textOptions = [
  { key: 1, text: 'Elly', value: 'Elly' },
  { key: 2, text: 'Matt', value: 'Matt' },
  { key: 3, text: 'Brittany', value: 'Brittany' },
  { key: 4, text: 'Pat', value: 'Pat' }
]

class Settings extends React.Component {
  state = { 
    details: ''
   }

  hideNavButtons = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(hideLogin())
    this.props.dispatch(showLogout())
  }

   componentDidMount () {
    this.hideNavButtons()
    getUserDetails(this.props.match.params.usersId)
      .then(res => {
        this.setState({
          details: res
        })
      })
   }

  render() { 
    console.log(this.props.flatmates)
    return ( 
      <>
        {/* {this.props.flatmates.map(flatmate => {
          <p key={flatmate.id} style={{marginTop: 150}}>
            {flatmate.name}'s name
          </p>
        })} */}
        <Grid textAlign='center' style={{ alignItems: 'center', padding: '8em 0em' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header size='large'textAlign='center'>
              <Icon name='settings' />
              SETTINGS
            </Header>
            <Header>
              <Link to={`/dashboard/${this.props.flatId}`}>
                <Button 
                  style={{marginLeft: 20}} 
                  >
                  <Icon name='redo' />
                  Back to DashBoard
                </Button>
              </Link>
              </Header>
            <Header as='h2' color='orange' textAlign='center'>
              <Image src='/favicon.png' /> Change Your Details Below:
            </Header>



            
            <Form size='huge'>
              <Segment stacked>
                <Divider horizontal style={{ padding: 20 }}>Need to Add or Remove a flatmate?</Divider>
                <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Remove?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

              <Table.Row>
                <Table.Cell textAlign='center'>
                  Elly
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button>X</Button>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell textAlign='center'>
                  Matt
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button>X</Button>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell textAlign='center'>
                  Brittany
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button>X</Button>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell textAlign='center'>
                  Pat
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button>X</Button>
                </Table.Cell>
              </Table.Row>

        </Table.Body>

      </Table>

      <Input id="textfield1" type="text" style={{marginRight: 20}}></Input>
      <Button color='green'>
        ADD A FLATMATE
      </Button>

            {this.props.flatmates.map(flatmate => {console.log(flatmate)})}
            <Divider horizontal style={{ padding: 20 }}>Moved House?</Divider>
            <FormField
              control={Input}
              name='address'
              type='text'
              label='Address: '
              placeholder='123 Onehunga Mall'
            >
            </FormField>

            <FormField
              control={Input}
              name='suburb'
              type='text'
              label='Suburb: '
              placeholder='Onehunga'>
            </FormField>

            <Divider horizontal style={{ padding: 20 }}>Changed A payment date?</Divider>
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Power Due Date:"
              options={options}
              name="powerDay"
              label="Power Due Date"
            />
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Water Due Date:"
              options={options}
              name="waterDay"
              label="Water Due Date:"
            />
            <Form.Field control={Dropdown}
              selection
              clearable
              placeholder="Internet Due Date:"
              options={options}
              name="wifiDay"
              label="Internet Due Date:"
            />

            <Button> 
              Submit Update
            </Button>

              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        <Footer />
      </>
     )
  }
}
 
const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    flatmateDetail: state.flatmateDetailReducer,
    error: state.error,
    flatmates: state.flatmatesReducer
  }
}

export default connect(mapStateToProps)(Settings)
