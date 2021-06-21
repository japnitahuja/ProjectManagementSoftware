import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CreateTaskForm from "../../components/create-task-form/create-task-form.component";

 class CreateTask extends Component {

    constructor(){
      super()
      this.state={
       projectId: ''
      }
    }

    componentDidMount(){
      const projectId = this.props.match.params.projectId;
      this.setState({projectId:projectId})
  }

    render() {
        const {projectId} = this.state
       

        return (
            <div>
                <CreateTaskForm projectId = {projectId}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

  });
  
  const mapDispatchToProps = (dispatch) => ({
 
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);

