import React from 'react';
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import { goalRef } from '../firebase';

class GoalList extends React.Component {
  componentDidMount () {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        goals.push({ email, title });
      });
      this.props.setGoals(goals);
    });
  }

  renderGoals () {
    return this.props.goals.map(({ email, title }, idx) => (
      <div key={idx} className="goal">
        <div>Email: {email}</div>
        <div>Goal: {title}</div>
      </div>
    ));
  }

  render () {
    return (
      <div id="goals">
        {this.renderGoals()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { goals } = state;
  return {
    goals
  };
};

export default connect(mapStateToProps, { setGoals })(GoalList);
