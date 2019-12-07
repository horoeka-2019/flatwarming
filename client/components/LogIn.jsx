import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux' 
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'


function LogIn (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    signIn({
      username: form.email,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/dashboard')
          props.dispatch(hideReg())
          props.dispatch(hideLogin())
          props.dispatch(showLogout())
        }
      })
  }
  return (
    <React.Fragment>
      <Grid textAlign='center' style={{ height: '100vh', marginTop: 125 }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='orange' textAlign='center'>
            <Image src='/favicon.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
            <Form.Field>
            <label>Email</label>
            <input name='email' type='email'
              value={form.email}
              onChange={handleChange}
            />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input name='password' type='password'
                value={form.password}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field type='button' onClick={handleClick}
              control={Button}
              disabled={
                !form.password ||
                !form.email ||
                !form.email.includes('@')
              }
            >Login
            </Form.Field>

          </Form>


              {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form> */}
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>

      {/* <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 125, maxWidth: '40vw' }}>

        <Header as='h2' textAlign='center'>Log In</Header>

        <Form size = 'large'> */}

          <Form.Field>
            <label>Email</label>
            <input name='email' type='email'
              value={form.email}
              onChange={handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input name='password' type='password'
              value={form.password}
              onChange={handleChange}
            />
          </Form.Field>

          <Form.Field type='button' onClick={handleClick}
            control={Button}
            disabled={
              !form.password ||
      !form.email ||
      !form.email.includes('@')
            }
          >Login
          </Form.Field>

        </Form>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout
  }
}

export default connect(mapStateToProps)(LogIn)