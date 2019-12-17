import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { TASK_NOT_STARTED } from '../../atoms/Task';

export default class AddTask extends Component {
  state = {
    title: '',
    description: '',
    isFormVisible: false
  };

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
    if (this.state.title || this.state.description) {
      const task = {
        id: uuid(),
        title: this.state.title,
        description: this.state.description,
        status: TASK_NOT_STARTED
      };
      this.props.handleAddTask(task);
      this.setState(() => ({
        title: '',
        description: '',
        isFormVisible: false
      }));
    }
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-primary" onClick={this.handleCreateTask}>
            + New Task
          </button>
        </div>
        {this.state.isFormVisible && (
          <form className="mt-3" onSubmit={this.handleAddTask}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="title"
                value={this.state.title}
                onChange={event => this.handleTitleChange(event.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="description"
                value={this.state.description}
                onChange={event => this.handleDescriptionChange(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Save
            </button>
          </form>
        )}
      </div>
    );
  }
}

AddTask.propTypes = {
  handleAddTask: PropTypes.func
};
