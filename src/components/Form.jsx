import React from 'react';
import firebaseApp from '../firebase';

class Form extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: {
        message: ''
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange (event) {
    const name = event.target.name;
    const { user } = this.state;
    user[name] = event.target.value;
    this.setState({ user });
  }

  onKeyDown (event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }

  submit () {
    const { email, password } = this.state.user;

    if (this.props.type === 'Sign Up') {
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
    } else {
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
    }
  }

  render () {
    const { onChange, onKeyDown, submit } = this;
    const { type } = this.props;

    return (
      <div className="form-inline">
        <h1>{type}</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={submit}
          >
            {type}
          </button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default Form;
