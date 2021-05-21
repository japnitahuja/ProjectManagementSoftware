import React, { Component } from 'react'
import { selectCurrentProjectName, selectCurrentProjectPunchlists, selectCurrentProjectTasks } from '../../redux/current-project/current-project.selectors';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { TaskNav } from '../../components/task-nav/task-nav.component';
import LowerNavBar from '../../components/lower-nav-bar/lower-nav-bar.component';
import PunchLists from '../../components/all-punch-list/all-punch-list.component'
import SearchBar from '../../components/search-bar/search-bar.component';
import { fetchCurrentProjectStart } from '../../redux/current-project/current-project.actions';
import NoResult from '../../components/no-result/no-result.component';


class ProjectPunchList extends Component {
    constructor(){
        super()
        this.state={
            punchlistsList: ''
        }
    }
    componentDidMount(){
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId);
        this.setState({punchlistsList: this.props.punchlists})
    }

    search = (searchedText) => {
        let temp = this.props.punchlists

        if(searchedText){
          temp = temp.filter(({punchListName})=>{
            return punchListName.toLowerCase().includes(searchedText.toLowerCase())
          })
        }
        
     
        this.setState({punchlistsList: temp})
        
     }


    render() {
        const {punchlistsList} = this.state;
        const {projectName} = this.props;

        return (
             <div>
                <TaskNav title = {projectName}/>
                <SearchBar placeholder="Search Punch Lists..." search={this.search}/>
                {punchlistsList.length === 0?<NoResult/>: <PunchLists punchlists= {punchlistsList} />}
                <LowerNavBar/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    projectName: selectCurrentProjectName,
    punchlists: selectCurrentProjectPunchlists
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchProject: (projectId) => dispatch(fetchCurrentProjectStart(projectId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectPunchList);