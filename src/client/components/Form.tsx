import * as React from 'react'
import {useState} from 'react'
import {CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

 

interface FormProps extends ReactStripeElements.InjectedStripeProps {
  // stripe: any
  // elements: any
  total: number
}


const Form: React.FC<FormProps> = (props) => {

  const total = props.total
  const [name, setName ] = useState<string>('')


  function handleName (e: React.ChangeEvent<HTMLInputElement>):void {

    setName(e.target.value)

  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    console.log(name)

    try {
      let token = await props.stripe.createToken({name})
      console.log(token)
    } catch (e) {
      throw e
    }

  }


  

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={(e) => handleName(e)}/>


        <label >CC Number == Exp. Date -- CVC -- ZIP</label>
        <CardElement className="p-2 border border-dark"/>

        <label htmlFor="amount">Amount:</label>
        <input id="amount" value={total} readOnly/>

        <button>Purchase!</button>
      </form>
    </main>
  )


}


// REMEMBER TO WRAP FORM WITH INJECT STRIPE
export default injectStripe(Form)