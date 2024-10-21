import { faAdd, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topfold = () => {
  return (
    <div className="flex justify-between m-auto w-1/2 mt-3">
      <div className="p-2 rounded-md border bg-white">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search your expenses..."
          className="ml-2 border-none outline-none"
        />
      </div>
      <div>
        <button className="pl-2 pr-2 pt-1 pb-1 rounded-md border-black border-2 shadow-lg">
          <FontAwesomeIcon icon={faAdd} className="ml-1 mr-1" />
          Add New
        </button>
      </div>
    </div>
  );
};

export default Topfold;
