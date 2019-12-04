import React from 'react';
import TaskList from "../TaskList";
import {TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED} from "../../atoms/Task";

const TaskListView = (props) => {
    return (
        <div className="mt-5">
            <TaskList tasks={props.tasks} select={TASK_NOT_STARTED}
                      handleStatusChange={props.handleStatusChange}/>
            <TaskList tasks={props.tasks} select={TASK_IN_PROGRESS}
                      handleStatusChange={props.handleStatusChange}/>
            <TaskList tasks={props.tasks} select={TASK_COMPLETED}
                      handleStatusChange={props.handleStatusChange}/>
        </div>
    );
};

export default TaskListView;