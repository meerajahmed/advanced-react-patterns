import React from 'react';
import AddTask from "../../molecules/AddTask";
import TaskListView from "../../molecules/TaskListView";

const Tasks = (props) => (
    <div className="container my-5">
        <AddTask handleAddTask={props.handleAddTask}/>
        { props.tasks.length > 0 &&
        <TaskListView tasks={props.tasks} handleStatusChange={props.handleStatusChange}/> }
    </div>
);

export default Tasks;