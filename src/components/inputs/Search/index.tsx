import "./Search.css";

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <input
      className="search border-default"
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search projects..."
      type="search"
      value={searchValue}
    ></input>
  );
}
