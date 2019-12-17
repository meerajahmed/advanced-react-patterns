import React from 'react';
import PropTypes from 'prop-types';
import Task, { TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED } from '../../atoms/Task';

const selectTasks = (tasks, select = TASK_NOT_STARTED) => {
  return tasks.filter(task => task.status === select);
};

const TaskList = props => {
  const taskMap = selectTasks(props.tasks, props.select).map(task => (
    <Task key={task.id} task={task} handleStatusChange={props.handleStatusChange} />
  ));

  return (
    <div>
      {taskMap.length > 0 && (
        <h4 className="mb-3">
          {props.select === TASK_NOT_STARTED && <span>Not Started</span>}
          {props.select === TASK_IN_PROGRESS && <span>In Progress</span>}
          {props.select === TASK_COMPLETED && <span>Completed</span>}
        </h4>
      )}
      <div className="row">{taskMap}</div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string
    })
  ),
  select: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
  handleStatusChange: PropTypes.func
};

export default TaskList;
