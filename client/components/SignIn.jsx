import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignIn extends React.Component{

  render(){
    return (
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Form.Input label='Email' placeholder='joe@schmoe.com' />
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button onClick={signInWithGoogle} type='submit'>Sign in with Google</Button>
      </Form>
    )
  }

}

export default SignIn