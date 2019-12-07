import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Grid, Segment, Message, Image } from 'semantic-ui-react'
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
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as='h1' color='orange' textAlign='center'>
            <Image src='/favicon.png' /> Log-in to your account
          </Header>
          <Form size='huge'>
            <Segment stacked>
              
              <Form.Input 
                name='email'
                type='email'
                value={form.email}
                onChange={handleChange}
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
              />

              <Form.Input
                name='password'
                type='password'
                value={form.password}
                onChange={handleChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button 
                color='orange' 
                fluid size='large'
                onClick={handleClick}
                disabled={
                !form.password ||
                !form.email ||
                !form.email.includes('@')
                }
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/register'>Register</a>
          </Message>
        </Grid.Column>
      </Grid>


          {/* <Form.Field>
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
      </Container> */}
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