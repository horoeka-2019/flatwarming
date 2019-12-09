import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Grid, Segment, Message, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'
import Footer from './Footer'
import { getUserByName } from '../api/registerFlatDetails'

import { setError } from '../actions/error'

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
          getUserByName(form.email)
            .then(user => props.history.push(`/dashboard/${user.id}`))
          props.dispatch(hideReg())
          props.dispatch(hideLogin())
          props.dispatch(showLogout())
        }
      })
      .catch(err => props.setError('Oops! Are you trying to sign-up? Press Register! ', err))
  }

  return (
    <>
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
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
    <Footer />
    </>
  )
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    error: state.error
  }
}

const mapDispatchToProps = {
  setError
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
