import React from 'react';
import { connect } from 'react-redux';
import { setCompleteGoals } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends React.Component {
  componentDidMount () {
    completeGoalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        goals.push({ email, title });
      });
      this.props.setCompleteGoals(goals);
    });
  }

  completeClear () {
    completeGoalRef.set([]);
  }

  render () {
    return (
      <div>
        <div id="complete-goals">
          {
            this.props.completeGoals.map(({ title, email }, idx) => (
              <div key={idx} className="complete-goal">
                <strong>{title}</strong>
                <span>Completed by <em>{email}</em></span>
              </div>
            ))
          }
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.completeClear}
        >
          Clear All
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { completeGoals } = state;
  return {
    completeGoals
  };
};

export default connect(mapStateToProps, {
  setCompleteGoals
})(CompleteGoalList);
