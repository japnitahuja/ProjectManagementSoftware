import { Link } from "react-router-dom";
import { CategoryDiv } from "./costbook-category.styles";

export const CostbookCategory = ({ categoryName }) => {
  return <CategoryDiv>{categoryName}</CategoryDiv>;
};
