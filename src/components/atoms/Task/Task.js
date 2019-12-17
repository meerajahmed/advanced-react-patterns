import React from 'react';
import PropTypes from 'prop-types';

export const TASK_NOT_STARTED = 'TASK.NOT_STARTED';
export const TASK_IN_PROGRESS = 'TASK.IN_PROGRESS';
export const TASK_COMPLETED = 'TASK.COMPLETED';

const Task = props => {
  let cardBorderStyle;

  switch (props.task.status) {
    case TASK_IN_PROGRESS:
      cardBorderStyle = 'primary';
      break;
    case TASK_COMPLETED:
      cardBorderStyle = 'success';
      break;
    default:
      cardBorderStyle = 'secondary';
  }

  return (
    <div className="col-sm-4">
      <div className={`card border-${cardBorderStyle} mb-3`}>
        <div className={`card-header bg-transparent border-${cardBorderStyle}`}>
          {props.task.title}
        </div>
        <div className={`card-body text-${cardBorderStyle}`}>
          <p className="card-text">{props.task.description}</p>
        </div>
        <div className={`card-footer bg-transparent border-${cardBorderStyle}`}>
          <select
            value={props.task.status}
            className="form-control"
            onChange={event => props.handleStatusChange(props.task.id, event.target.value)}
          >
            <option value={TASK_NOT_STARTED}>Not Started</option>
            <option value={TASK_IN_PROGRESS}>In Progress</option>
            <option value={TASK_COMPLETED}>Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
  }),
  handleStatusChange: PropTypes.func
};

export default Task;
