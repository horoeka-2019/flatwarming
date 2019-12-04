import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { Button, Form } from 'semantic-ui-react'

export default function LogIn (props){

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
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }
  return (
    <React.Fragment>
      <h2>LogIn</h2>
      <Form>
      <Form.Field>
        <label>Email</label>
        <input name='username' type='email'
          value={form.username}
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
       !form.username ||
       !form.username.includes('@') 
      }
       >Login
      </Form.Field>
      </Form>
    </React.Fragment>
  )
}