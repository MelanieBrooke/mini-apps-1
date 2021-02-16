// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import {} from './module.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      addressCity: '',
      addressState: '',
      addressZip: '',
      cardNum: '',
      cardCVV: '',
      cardExpMonth: '',
      cardExpYear: '',
      billingZip: ''
    }
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render () {
    return (<div>
      <h1>Welcome to the Ultimate Checkout Experience</h1>
      {/* <button id="buttonCheckout" onClick={this.handleClick}>Proceed with account creation and checkout</button> */}
    </div>)
  }

  // display initial page
    // 'purchase' button, maybe an image for fun

  // display form1
    // form has fields for name, email, and password (account creation)
    // 'next' button is displayed
    // when button is hit, save info to DB and also set state
    // then move on to form2

  // display form2
    // form has fields for address and phone
    // next button is displayed
    // when button is hit, save info to DB and also set state
    // then move on to form 3

  // display form3
    // form has fields for payment info
    // next button is displayed
    // info is saved to DB and set state
    // next button moves on to confirmation

  // display confirmation
    // show all information (by showing what's in state)
    // have a 'complete purchase' button to finalize (maybe use this to reset the form and display a 'confirmed' message)

  // handle submit functions
    // one to start process
    // one for form1
    // one for form2
    // one for form3
    // one to finalize

  // handle change function (instead of setting state on form submit?)
    // to deal with input as it comes in

  // component did mount
    // run first page

  // render?
    // do I need a separate render function or is that actually instead of component did mount?

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleMenuChange(e) {
    this.setState({
      addressState: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // clarify which form was submitted
    // call a post function based on form
  }

  sendUserData (formName) {

  }


  displayForm1 () {
    return (<div>
      <h3>Create Account</h3>
      <form onSubmit={this.handleSubmit} id="userInfo">
        <label for="firstName">First Name:</label>
        <input onChange={this.handleChange} type="text" name="firstName" id="firstName"/>
        <label for="lastName">Last Name:</label>
        <input onChange={this.handleChange} type="text" name="lastName" id="lastName"/>
        <label for="userName">Select a Username:</label>
        <input onChange={this.handleChange} type="text" name="userName" id="userName"/>
        <label for="password">Select a Password:</label>
        <input onChange={this.handleChange} type="text" name="password" id="password"/>
        <label for="email">Email:</label>
        <input onChange={this.handleChange} type="text" name="email" id="email"/>
        <input type="submit">Next</input>
      </form>
    </div>)
  }

  displayForm2 () {
    return (<div>
      <h3>Enter Address and Contact Info</h3>
      <form onSubmit={this.handleSubmit} id="userContact">
        <label for="address1">Address Line 1:</label>
        <input onChange={this.handleChange} type="text" name="address1" id="address1"/>
        <label for="address2">Address Line 2:</label>
        <input onChange={this.handleChange} type="text" name="address2" id="address2"/>
        <label for="addressCity">City:</label>
        <input onChange={this.handleChange} type="text" name="addressCity" id="addressCity"/>
        <label for="addressState">State:</label>
        <select onChange={this.handleMenuChange} name="addressState" id="addressState">
          <option value="CO">Colorado</option>
          <option value="CA">California</option>
          <option value="TX">Texas</option>
          <option value="WA">Washingtin</option>
        </select>
        <label for="addressZip">Zip Code:</label>
        <input onChange={this.handleChange} type="text" name="addressZip" id="addressZip"/>
        <input type="submit">Next</input>
      </form>
    </div>)
  }

  displayForm3 () {
    return (<div>
      <form onSubmit={this.handleSubmit} id="userPayment">
        <label for="cardNum">Payment Card Number:</label>
        <input onChange={this.handleChange} type="number" name="cardNum" id="cardNum"/>
        <label for="cardCVV">CVV (3-digit security code):</label>
        <input onChange={this.handleChange} type="number" name="cardCVV" id="cardCVV"/>
        <label for="cardExpMonth">Expiration Month:</label>
        <input onChange={this.handleChange} type="number" name="cardExpMonth" id="cardExpMonth"/>
        <label for="cardExpYear">Expiration Year:</label>
        <input onChange={this.handleChange} type="range" min="2021" max="2031" name="cardExpYear" id="cardExpYear"/>
        <label for="billingZip">Email:</label>
        <input onChange={this.handleChange} type="text" name="billingZip" id="billingZip"/>
        <input type="submit">Next</input>
      </form>
    </div>)
  }

  displayUserInfo () {
    return (<div>

    </div>)
  }

  displayConfirmation () {
    return (<div>
      <h2>Your order has been submitted!<br></br>Thank you for shopping with us.</h2>
    </div>)
  }


  // will be using /userInfo, /userContact, and /userPayment to send post requests




}


ReactDOM.render(<App/>, document.getElementById('app'));
