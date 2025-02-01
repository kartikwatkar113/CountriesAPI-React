import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../App.css";
import { useWindowSize } from "../hooks/useWindowSize";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [isdark] = useContext(ThemeContext);
  const windowSize=useWindowSize();

  return (
    <main className={`${isdark?'dark':''}`}>
      {/* <h2 style={{textAlign:'center'}}>{windowSize.width}x{windowSize.height}</h2> */}
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
};
