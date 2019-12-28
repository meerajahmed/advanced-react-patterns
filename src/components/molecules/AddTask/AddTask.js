import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Button from '@material-ui/core/Button';
import { TASK_NOT_STARTED } from '../../atoms/Task';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isFormVisible: false
    };
  }

  handleCreateTask = () => {
    this.setState(() => ({
      title: '',
      description: '',
      isFormVisible: true
    }));
  };

  handleTitleChange = title => {
    this.setState(() => ({ title }));
  };

  handleDescriptionChange = description => {
    this.setState(() => ({ description }));
  };

  handleAddTask = event => {
    event.preventDefault();
    const { description, title } = this.state;
    if (title || description) {
      const task = {
        id: uuid(),
        title,
        description,
        status: TASK_NOT_STARTED
      };
      const { handleAddTask } = this.props;
      handleAddTask(task);
      this.setState(() => ({
        title: '',
        description: '',
        isFormVisible: false
      }));
    }
  };

  render() {
    const { isFormVisible, title, description } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-primary" onClick={this.handleCreateTask}>
            + New Task
          </button>
        </div>
        {isFormVisible && (
          <form className="mt-3" onSubmit={this.handleAddTask}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="title"
                value={title}
                onChange={event => this.handleTitleChange(event.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="description"
                value={description}
                onChange={event => this.handleDescriptionChange(event.target.value)}
              />
            </div>
            <Button type="submit" variant="outlined" color="primary">
              Save
            </Button>
          </form>
        )}
      </div>
    );
  }
}

AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired
};
