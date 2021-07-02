import { Link } from "react-router-dom";
import {
  SearchDiv,
  NavBar,
  Heading,
  Back,
  Image,
  OneThirdDiv,
} from "./costbook-costcodenav.styles";
import backArrow from "../../assets/backArrowBlack.png";
import search from "../../assets/navsearch.png";

export const CostBookCostCodeNav = ({ title, toggleSearch }) => {
  return (
    <NavBar>
      <OneThirdDiv align="flex-start">
        <Back>
          <Link
            to="/costbook"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Image src={backArrow} /> Cost Codes
          </Link>
        </Back>
      </OneThirdDiv>

      <OneThirdDiv align="center">
        <Heading> {title} </Heading>
      </OneThirdDiv>

      <OneThirdDiv align="flex-end" onClick={toggleSearch}>
        <SearchDiv src={search} />
      </OneThirdDiv>
    </NavBar>
  );
};
