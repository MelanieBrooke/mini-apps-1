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
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.sendUserData = this.sendUserData.bind(this);
  }

  render () {
    if (this.state.currentForm === 0) {
      return <this.DisplayFormZero onClick={this.handleClick}/>
    } else if (this.state.currentForm === 1) {
      return <this.DisplayFormOne onClick={this.handleClick} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    } else if (this.state.currentForm === 2) {
      return <this.DisplayFormTwo onClick={this.handleClick} onSubmit={this.handleSubmit} onChange={this.handleChange} onMenuChange={this.handleMenuChange}/>
    } else if (this.state.currentForm === 3) {
      return <this.DisplayFormThree onClick={this.handleClick} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    } else if (this.state.currentForm === 4) {
      return <this.DisplayFormFour onClick={this.handleClick}/>
    } else if (this.state.currentForm === 5) {
      return <this.DisplayFormFive onClick={this.handleClick}/>
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.currentForm < 5) {
      this.state.currentForm += 1;
      this.setState({
        currentForm: this.state.currentForm
      })
    } else {
      this.setState({
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
      })
    }
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
    this.handleClick(e);
  }

  sendUserData (formName) {
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

  DisplayFormTwo(props) {
    return (<div>
      <h3>Enter Address and Contact Info</h3>
      <form onSubmit={props.onSubmit} id="userContact">
        <label htmlFor="address1">Address Line 1:</label>
        <input onChange={props.onChange} type="text" name="address1" id="address1"/>
        <label htmlFor="address2">Address Line 2:</label>
        <input onChange={props.onChange} type="text" name="address2" id="address2"/>
        <label htmlFor="addressCity">City:</label>
        <input onChange={props.onChange} type="text" name="addressCity" id="addressCity"/>
        <label htmlFor="addressState">State:</label>
        <select onChange={props.onMenuChange} name="addressState" id="addressState">
          <option value="CO">Colorado</option>
          <option value="CA">California</option>
          <option value="TX">Texas</option>
          <option value="WA">Washington</option>
        </select>
        <label htmlFor="addressZip">Zip Code:</label>
        <input onChange={props.onChange} type="number" name="addressZip" id="addressZip"/>
        <label htmlFor="phone">Phone Number:</label>
        <input onChange={props.onChange} type="number" name="phone" id="phone"/>
        <input type="submit"/>
      </form>
    </div>)
  }

  DisplayFormThree(props) {
    return (<div>
      <form onSubmit={props.onSubmit} id="userPayment">
        <label htmlFor="cardNum">Payment Card Number:</label>
        <input onChange={props.onChange} type="number" name="cardNum" id="cardNum"/>
        <label htmlFor="cardCVV">CVV (3-digit security code):</label>
        <input onChange={props.onChange} type="number" name="cardCVV" id="cardCVV"/>
        <label htmlFor="cardExpMonth">Expiration Month:</label>
        <input onChange={props.onChange} type="number" name="cardExpMonth" id="cardExpMonth"/>
        <label htmlFor="cardExpYear">Expiration Year:</label>
        <input onChange={props.onChange} type="number" name="cardExpYear" id="cardExpYear"/>
        <label htmlFor="billingZip">Billing Zip Code:</label>
        <input onChange={props.onChange} type="number" name="billingZip" id="billingZip"/>
        <input type="submit"/>
      </form>
    </div>)
  }

  DisplayFormFour(props) {
    return(<div>
      <h1>Confirm Payment</h1>
      <button id="buttonCheckout" onClick={props.onClick}>Confirm info and finalize purchase</button>
    </div>)
  }

  DisplayFormFive(props) {
    return (<div>
      <h2>Your order has been submitted!<br></br>Thank you for shopping with us.</h2>
      <button onClick={props.onClick}>Checkout Again</button>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));