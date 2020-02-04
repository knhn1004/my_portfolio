import React, {Component, Fragment} from 'react';
import {TextInput, Textarea, Button, Icon} from 'react-materialize';
import axios from 'axios';

class Form extends Component {

  state = {
    name: '',
    email: '',
    msg: '',
  };

  handleNameChange = e => {
    this.setState({name: e.target.value});
  };

  handleEmailChange = e => {
    this.setState({email: e.target.value});
  };

  handleMsgChange = e => {
    this.setState({msg: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    axios.post('/api/v1/create_form/', 
      {
	name: this.state.name,
	email: this.state.email,
	message: this.state.msg
      })
      .then(res => {
	console.log(res);
	M.toast({html: `Form Submitted! Thank you ${this.state.name}!`});
	document.querySelector('#msg-form').reset();
	this.setState({
	  name: '',
	  email: '',
	  msg: '',
	})

      })
      .catch(err => {
	console.error(err)
	M.toast({html: 'Submission Failed! (Invalid Form)'});
    })
  }

  render() {
    return (
      <Fragment>
        <div id="contact-form" className="container">
          <form id="msg-form" onSubmit={this.handleSubmit}>
	    <div className="row">
	      <div className="col s12">
		<h4>Contact Me</h4>
	      </div>
	      <div className="col s12 m6">
		<TextInput name label="Name" onChange={this.handleNameChange} />
	      </div>
	      <div className="col s12 m6">
		<TextInput
		  email
		  validate
		  success="email validated"
		  error="invalid email"
		  label="Email"
		  onChange={this.handleEmailChange}
		/>
	      </div>
	      <div className="col s12">
		<Textarea label="Mesage" onChange={this.handleMsgChange} />
		<Button
		  className="pink darken-2"
		  type="submit"
		  large
		  wave="light"
		  style={{width: '100%'}}>
		  Submit
		  <Icon right>send</Icon>
		</Button>
	      </div>
	    </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Form;
