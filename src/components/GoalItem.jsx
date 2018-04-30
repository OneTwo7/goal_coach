import React from 'react';

const GoalItem = ({ goal: { title, email, serverKey }, completeGoal }) => {
  const complete = () => {
    completeGoal(title, serverKey);
  }

  return (
    <div className="goal">
      <strong>{title}</strong>
      <span>Submitted by <em>{email}</em></span>
      <button
        className="btn btn-sm btn-primary"
        type="button"
        onClick={complete}
      >
        Complete
      </button>
    </div>
  );
};

export default GoalItem;
