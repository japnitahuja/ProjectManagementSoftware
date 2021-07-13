import React, { Component } from "react";
import { SmallText } from "../project-item/project-item.styles";
import { POItemMenuDiv, POItemMenuItem } from "./PO-item-menu.styles";

class POItemMenu extends Component {
  render() {
    let { active, changeActive } = this.props;
    return (
      <POItemMenuDiv>
        <POItemMenuItem
          active={active === "PO"}
          onClick={() => {
            changeActive("PO");
          }}
        >
          <SmallText>PO</SmallText>
        </POItemMenuItem>
        <POItemMenuItem
          active={active === "INFO"}
          onClick={() => {
            changeActive("INFO");
          }}
        >
          <SmallText>INFO</SmallText>
        </POItemMenuItem>
        <POItemMenuItem
          active={active === "LOG"}
          onClick={() => {
            changeActive("LOG");
          }}
        >
          <SmallText>LOG</SmallText>
        </POItemMenuItem>
      </POItemMenuDiv>
    );
  }
}

export default POItemMenu;
