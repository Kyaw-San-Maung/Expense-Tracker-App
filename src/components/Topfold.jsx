import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topfold = () => {
  return (
    <div className="flex justify-between m-auto w-1/2 mt-3">
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search your expenses..." />
      </div>
      <div>Add New</div>
    </div>
  );
};

export default Topfold;
