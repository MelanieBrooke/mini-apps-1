// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import {} from './module.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
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
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendUserData = this.sendUserData.bind(this);
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render () {
    if (this.state.currentForm === 0) {
      return <this.DisplayFormZero onClick={this.handleClick}/>
    } else if (this.state.currentForm === 1) {
      return <this.DisplayFormOne onClick={this.handleClick} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clickity click');
    if (this.state.currentForm !== 4) {
      this.state.currentForm += 1;
      this.setState({
        currentForm: this.state.currentForm
      })
    }
    console.log('HEY RIGHT HERE: ', this.state.currentForm);
  }

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
    var formName = e.target.id;
    this.sendUserData(formName);
    // this.handleClick(e);
    // clarify which form was submitted
    // call a post function based on form
  }

  sendUserData (formName) {
    console.log('sendUserData for form ', formName);
    var url = '/' + formName;
    // var data = this.state;
    axios.post(url, this.state)
    .then(function (response) {
      console.log(response);
    })
  }

  DisplayFormZero(props) {
    return (
      <div>
        <h1>Welcome to the Ultimate Checkout Experience</h1>
        <button id="buttonCheckout" onClick={props.onClick}>Proceed with account creation and checkout</button>
      </div>
    )
  }

  DisplayFormOne(props) {
    return (<div>
      <h3>Create Account</h3>
      <form onSubmit={props.onSubmit} id="userInfo">
        <label htmlFor="firstName">First Name:</label>
        <input onChange={props.onChange} type="text" name="firstName" id="firstName"/>
        <label htmlFor="lastName">Last Name:</label>
        <input onChange={props.onChange} type="text" name="lastName" id="lastName"/>
        <label htmlFor="userName">Select a Username:</label>
        <input onChange={props.onChange} type="text" name="userName" id="userName"/>
        <label htmlFor="password">Select a Password:</label>
        <input onChange={props.onChange} type="text" name="password" id="password"/>
        <label htmlFor="email">Email:</label>
        <input onChange={props.onChange} type="text" name="email" id="email"/>
        <input type="submit" />
      </form>
    </div>)
  }

  // var DisplayForm2 = (props) => {
  //   return (<div>
  //     <h3>Enter Address and Contact Info</h3>
  //     <form onSubmit={this.handleSubmit} id="userContact">
  //       <label for="address1">Address Line 1:</label>
  //       <input onChange={this.handleChange} type="text" name="address1" id="address1"/>
  //       <label for="address2">Address Line 2:</label>
  //       <input onChange={this.handleChange} type="text" name="address2" id="address2"/>
  //       <label for="addressCity">City:</label>
  //       <input onChange={this.handleChange} type="text" name="addressCity" id="addressCity"/>
  //       <label for="addressState">State:</label>
  //       <select onChange={this.handleMenuChange} name="addressState" id="addressState">
  //         <option value="CO">Colorado</option>
  //         <option value="CA">California</option>
  //         <option value="TX">Texas</option>
  //         <option value="WA">Washingtin</option>
  //       </select>
  //       <label for="addressZip">Zip Code:</label>
  //       <input onChange={this.handleChange} type="text" name="addressZip" id="addressZip"/>
  //       <input type="submit">Next</input>
  //     </form>
  //   </div>)
  // }

  // var DisplayForm3 = (props) => {
  //   return (<div>
  //     <form onSubmit={this.handleSubmit} id="userPayment">
  //       <label for="cardNum">Payment Card Number:</label>
  //       <input onChange={this.handleChange} type="number" name="cardNum" id="cardNum"/>
  //       <label for="cardCVV">CVV (3-digit security code):</label>
  //       <input onChange={this.handleChange} type="number" name="cardCVV" id="cardCVV"/>
  //       <label for="cardExpMonth">Expiration Month:</label>
  //       <input onChange={this.handleChange} type="number" name="cardExpMonth" id="cardExpMonth"/>
  //       <label for="cardExpYear">Expiration Year:</label>
  //       <input onChange={this.handleChange} type="range" min="2021" max="2031" name="cardExpYear" id="cardExpYear"/>
  //       <label for="billingZip">Email:</label>
  //       <input onChange={this.handleChange} type="text" name="billingZip" id="billingZip"/>
  //       <input type="submit">Next</input>
  //     </form>
  //   </div>)
  // }

  // var DisplayForm4 = (props) => {
  //   return (<div>
  //     <h2>Your order has been submitted!<br></br>Thank you for shopping with us.</h2>
  //   </div>)
  // }


  // will be using /userInfo, /userContact, and /userPayment to send post requests




}


ReactDOM.render(<App/>, document.getElementById('app'));
