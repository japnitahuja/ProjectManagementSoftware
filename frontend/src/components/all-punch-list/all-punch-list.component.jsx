import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentProjectPunchlists } from "../../redux/current-project/current-project.selectors";
import { BigText, SmallText } from "../project-item/project-item.styles";
import SearchBar from "../search-bar/search-bar.component";
import {PODetailsDiv, PODiv,PONameDiv, Image} from "./all-punch-list.styles";
import punch from "../../assets/PunchDark.png";

class PunchLists extends React.Component {
  constructor(props){
    super(props)
  }
    
  render() {
    let punchlists = this.props.punchlists;
 
    if (!punchlists) {
        punchlists = [];
    }
    return (
      <div>
        {punchlists.map(({_id, punchListName, punchListItems}, index) => {
            return (
              <PODiv
                key={_id}
              >
                <Link to={`/punchList/${_id}`} style={{textDecoration: 'none'}}>
                <PONameDiv>
                  <Image src={punch}></Image>
                  <BigText>{punchListName}</BigText>
                </PONameDiv>
                </Link>

                <PODetailsDiv>
                  <BigText>{punchListItems.length}</BigText>
                </PODetailsDiv>
              </PODiv>
            );
          }
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PunchLists);
