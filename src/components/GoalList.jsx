import React from 'react';
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import { goalRef, completeGoalRef } from '../firebase';
import GoalItem from './GoalItem';

class GoalList extends React.Component {
  constructor (props) {
    super(props);

    this.completeGoal = this.completeGoal.bind(this);
  }

  componentDidMount () {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      });
      this.props.setGoals(goals);
    });
  }

  completeGoal (title, serverKey) {
    const { email } = this.props.auth;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({ email, title });
  }

  render () {
    return (
      <div id="goals">
        {
          this.props.goals.map((goal, idx) => (
            <GoalItem key={idx} goal={goal} completeGoal={this.completeGoal} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, goals } = state;
  return {
    auth,
    goals
  };
};

export default connect(mapStateToProps, { setGoals })(GoalList);
