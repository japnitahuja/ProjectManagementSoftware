import React, { Component } from "react";
import { FormLabel,Container, FormDiv, Heading,FormButton, FormButtonsDiv } from "./projects-filter.styles";
import { connect } from "react-redux";
import { inviteUserStart, UpdateRolesInProjectStart } from "../../redux/current-project/current-project.actions";
import { createStructuredSelector } from "reselect";
import DropDown from "../projects-filter-dropdown/projects-filter-dropdown.component"
class ProjectsFilter extends Component {
  constructor() {
    super();
    this.state = {
      projectStatus:'',
      projectType:'',
      propertyType:'',

      allStatus: ['All Status','Active', 'Planned', 'Upcoming'],
      allPropertyTypes: ['All Property Types','Office', 'Retail', 'Industrial', 'Hospitality', 'Residential', 'Land', 'Agricultural', 'Senior Housing', 'Special Purpose', 'Sport Entertainment', 'Multi-family'],
      allProjectTypes: ['All Project Types','Remodel', 'New Build', 'Addition']

    };
  }

  changeStatus = (key) => {
    
    this.setState({
      projectStatus: key
    })
   
  }

  changeProjectType = (key) => {
    
    this.setState({
      projectType: key
    })
   
  }

  changePropertyType = (key) => {
    
    this.setState({
      propertyType: key
    })
   
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    let temp = {}
    console.log(this.state)
    let temp2 = ''
    for (let i in this.state.projectStatus){
      if(i!=" "){
        temp2 += this.state.projectStatus[i].toUpperCase()
      }
    }
    temp.projectStatus = temp2
    
   
    temp2 = ''
    for (let i in this.state.projectType){
      if(i!=" "){
        temp2 +=  this.state.projectType[i].toUpperCase()
      }
    }
    temp.projectType = temp2
    
    
    temp2 = ''
    for (let i in this.state.propertyType){
      if(i!=" "){
        temp2 += this.state.propertyType[i].toUpperCase()
      }
    }
    temp.propertyType = temp2
   
    this.props.onSubmit(temp)
    this.props.exit()
    
  }

  exit = (e) => {
    this.props.onSubmit({
      projectStatus:'',
      projectType:'',
      propertyType:''
    })

    this.props.exit()
  }
  
  render() {
    let {projectUsers, projectRoles} = this.props;
    
    return (
        <>
        <Container>
        <Heading>
          Filters

          <button  onClick={this.props.exit} style={{textDecoration:'none', 
                                    background: 'none', 
                                    border: 'none', 
                                    fontSize:'1.4em', 
                                    color:'rgba(102,102,102,0.6)'}}> &times;</button>
        </Heading>
        
        <FormDiv>
          <FormLabel>
            Status
          </FormLabel>
          <DropDown 
          options={this.state.allStatus}
          selected="All Status"
          onChange = {this.changeStatus}
          field="projectStatus"/>

          <FormLabel>
            Property Type
          </FormLabel>
          <DropDown 
          options={this.state.allPropertyTypes}
          selected="All Property Types"
          onChange = {this.changePropertyType}
          field="propertyType"
          />

          <FormLabel>
            Project Type
          </FormLabel>
          <DropDown 
          options={this.state.allProjectTypes}
          selected="All Project Types"
          onChange = {this.changeProjectType}
          field="projectType"/>
        </FormDiv>

        <FormButtonsDiv>
        <FormButton 
            border="1px solid #000000"
            color="#3F8CFF"
            bgcolor = "#FFFFFF"
            width="40%"
            onClick={this.exit}
          > 
          Cancel
          </FormButton>
          <FormButton 
            border="1px solid #3F8CFF"
            color="#FFFFFF"
            bgcolor = "#3F8CFF"
            width="40%"
            onClick={this.handleOnSubmit}
          > 
          Create
          </FormButton>
        </FormButtonsDiv>
       
        </Container>
         
      </>

    );
  }
}

const mapStateToProps = createStructuredSelector({


});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsFilter);
