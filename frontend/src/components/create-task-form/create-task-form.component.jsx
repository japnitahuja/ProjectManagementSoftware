import React, { Component } from "react";
import { connect } from "react-redux";
import { createTaskStart} from "../../redux/all-tasks/all-tasks.actions";
import { fetchCurrentProjectStart } from "../../redux/current-project/current-project.actions";
import { signOut } from "../../redux/user/user.actions";


class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetails: {
        taskName: "",
        taskStartDate: "",
        taskEndDate: "",
        projectId: this.props.projectId.toString()
      },
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let task = this.state.taskDetails;
    task[name] = value;

    this.setState({ taskDetails: task });
  };

  createTask = (e) => {
    e.preventDefault();
    let taskDetails = this.state.taskDetails;
    this.props.createTask(taskDetails);
    // window.location.reload()
    let projectId = this.state.taskDetails.projectId
    this.props.fetchProject(projectId)
  };

  render() {
    
    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column", margin:"20px" }}
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.createTask}
        >
          <div>
            <label htmlFor="taskName"> Task Name: </label>
            <input
              type="text"
              value={this.state.taskDetails.taskName}
              name="taskName"
              id="taskName"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>

          <div>
            <label htmlFor="taskStartDate"> Task Start Date: </label>
            <input
              type="date"
              value={this.state.taskDetails.taskStartDate}
              name="taskStartDate"
              id="taskStartDate"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>

          <div>
            <label htmlFor="taskEndDate"> Task End Date: </label>
            <input
              type="date"
              value={this.state.taskDetails.taskEndDate}
              name="taskEndDate"
              id="taskEndDate"
              onChange={(e) => this.handleOnChange(e)}
              required/>
          </div>
          
          <div>
            <input type="submit" value="Create Task" />
   
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  createTask: (taskDetails) => dispatch(createTaskStart(taskDetails)),
  fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId))
});

export default connect(null, mapDispatchToProps)(CreateTaskForm);
