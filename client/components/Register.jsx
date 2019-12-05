import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Container } from 'semantic-ui-react'

export default function Register (props) {
 
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
    register({
      username: form.email,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/register-flat')
        }
      })
  }

  return (
    <React.Fragment>
      <Container text style={{ border: '1px', borderStyle: 'solid', padding: '30px', marginTop: 75, maxWidth: '40vw'}}>

      <Header as='h2' textAlign='center'>Register</Header>

      <Form size = 'large' style = {{paddingTop: 50}}>
      <Form.Field required>
        <label>Email</label>
        <input name='email' type='email'
            value={form.email}
            onChange={handleChange} 
        />
      </Form.Field>

      <Form.Field required>
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
        >Register
        </Form.Field>
    </Form>
  </Container>
  </React.Fragment>
  )
}