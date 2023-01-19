import { Link } from "react-router-dom";


const ButtonGenre = () => {
  return (
    <Link to={`/genre/`}>
      <button type="button" className="btn btn-light">Genre</button>
    </Link>
    
  );
};
export default ButtonGenre;