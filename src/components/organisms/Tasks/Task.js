import React from 'react';
import PropTypes from 'prop-types';
import AddTask from '../../molecules/AddTask';
import TaskListView from '../../molecules/TaskListView';
import { TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED } from '../../atoms/Task';

const Tasks = props => (
  <div className="container my-5">
    <AddTask handleAddTask={props.handleAddTask} />
    {props.tasks.length > 0 && (
      <TaskListView tasks={props.tasks} handleStatusChange={props.handleStatusChange} />
    )}
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string
    })
  ),
  handleAddTask: PropTypes.func,
  handleStatusChange: PropTypes.func
};

export default Tasks;
