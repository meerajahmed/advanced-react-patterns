import React, {Component} from 'react';
import uuid from "uuid";
import {TASK_NOT_STARTED} from "../../atoms/Task";

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

    handleTitleChange = (title) => {
        this.setState(() => ({title}));
    };

    handleDescriptionChange = (description) => {
        this.setState(() => ({description}));
    };

    handleAddTask = (event) => {
        event.preventDefault();
        if (this.state.title ||
            this.state.description) {
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
                    <Button outline color="primary" size="lg" onClick={this.handleCreateTask}>+ New Task</Button>
                </div>
                {
                    this.state.isFormVisible && (
                        <Form className="mt-3" onSubmit={this.handleAddTask}>
                            <FormGroup>
                                <Input type="text" placeholder="title" value={this.state.title}
                                       onChange={(event) => this.handleTitleChange(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label hidden htmlFor="inline-form-input-group">Username</Label>
                                <Input type="text" className="form-control" />

                                <Textarea className="w-100"
                                          placeholder="description"
                                          value={this.state.description}
                                          onChange={(event) => this.handleDescriptionChange(event.target.value)} />

                            </FormGroup>
                            <Button outline color="primary" type="submit">primary</Button>
                        </Form>
                    )
                }

            </div>
        );
    }
}