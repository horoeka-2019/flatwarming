import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Grid, Segment, Message, Image } from 'semantic-ui-react'

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
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as='h1' color='orange' textAlign='center'>
            <Image src='/favicon.png' /> Register To Flat Warming
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
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='/register'>Log In </a>
          </Message>
        </Grid.Column>
      </Grid>
      
  </React.Fragment>
  )
}
