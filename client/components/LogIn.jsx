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
      <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 125, maxWidth: '40vw' }}>

        <Header as='h2' textAlign='center'>Log In</Header>

        <Form size = 'large'>

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