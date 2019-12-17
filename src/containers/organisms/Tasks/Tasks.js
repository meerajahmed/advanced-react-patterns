import { connect } from 'react-redux';

import { addTaskAsync, updateTaskStatus } from './Tasks.actions';
import Tasks from '../../../components/organisms/Tasks';

const mapStateToProps = state => ({ tasks: state });

const mapDispatchToProps = dispatch => ({
  handleAddTask: task => dispatch(addTaskAsync(task)),
  handleStatusChange: (id, status) => dispatch(updateTaskStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
