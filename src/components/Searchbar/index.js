import { Search, User } from "react-feather";
import { Link } from "react-router-dom";
import { Line } from "..";
import { TextLink } from "../Buttons/TextLink";
import { SearchContainer } from "./style";

export const Searchbar = () => {
  return (
    <SearchContainer>
      <input type="text" value="" placeholder="Qual a sua dúvida?" />
      <Search />
    </SearchContainer>
  );
}