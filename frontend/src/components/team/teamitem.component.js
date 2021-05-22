import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectUsers } from "../../redux/current-project/current-project.selectors";
import AddUserForm from "../adduser-form/adduser-form.component";
import { DropDownContent, DropDownOption, LowerDiv, Overlay, FormButton, FormInverseButton, Text, SmallCircle, BigCircle, Image, TeamDiv, TeamDivItem } from "./team.styles";
import removeImage from "../../assets/remove.png"
import { deleteUserStart } from "../../redux/current-project/current-project.actions";

class TeamItem extends Component {
    constructor(props){
        super(props)
        this.dropdownContainer = React.createRef();
        this.state = {
            removeToggle: false
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        event.preventDefault()
        if (
          this.dropdownContainer.current &&
          !this.dropdownContainer.current.contains(event.target)
        ) {
          this.setState({removeToggle:false})
        }
      };

    toggleRemoveDropdown = (e) => {
      e.preventDefault()
      if(this.state.removeToggle){
        this.setState({removeToggle:false})
      }
      else{
        this.setState({removeToggle:true})
      }
      
    }

    deleteUser = (e) => {
      e.preventDefault()
      let {id} = e.target.dataset;
      let payload = {
        userId: [id],
        projectId: this.props.projectId
      }
      console.log(payload);
      this.props.deleteUser(payload);
    }

  render() {
   
    const { id,  unnamed } = this.props;
    const {firstName} = this.props.user;
    
    return (
          <TeamDivItem key={id}>
                <div style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
                  <BigCircle>{firstName?firstName.charAt(0):unnamed.charAt(0)}</BigCircle>
                  <Text style={{marginLeft:"1em"}}>{firstName?firstName:unnamed}</Text>
                </div>
                <div style={{marginLeft:"1.5em"}} 
                      data-id={id} 
                      onClick={this.toggleRemoveDropdown}>
                        <SmallCircle ></SmallCircle>
                        <SmallCircle ></SmallCircle>
                        <SmallCircle ></SmallCircle>
                        <DropDownContent 
                            data-id={id}
                            ref={this.dropdownContainer} 
                            display={this.state.removeToggle?"block":"none"}
                            onClick={this.deleteUser}>
                            <DropDownOption
                              data-id={id}>
                                <Image src={removeImage}/>
                                Remove
                            </DropDownOption>
                        </DropDownContent>
                    </div>
              </TeamDivItem>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userDetails) => dispatch(deleteUserStart(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamItem);
