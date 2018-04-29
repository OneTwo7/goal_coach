import React from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange (event) {
    this.setState({ title: event.target.value });
  }

  onKeyDown (event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }

  submit () {
    console.log('this.state', this.state);
    const { email } = this.props;
    const { title } = this.state;
    goalRef.push({ email, title });
  }

  render () {
    return (
      <div className="form-inline form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Add a goal"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={this.submit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { email } = state.auth;
  return {
    email
  };
};

export default connect(mapStateToProps)(AddGoal);
