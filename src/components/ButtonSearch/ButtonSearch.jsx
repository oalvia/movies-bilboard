import { Link } from "react-router-dom";


const ButtonSearch = () => {
  return (
    <Link to={`/filter/$`}>
      <button type="button" className="btn btn-light">Search</button>
    </Link>
    
  );
};
export default ButtonSearch;
