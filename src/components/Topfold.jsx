import {
  faAdd,
  faChevronLeft,
  faLeftLong,
  faRemove,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Topfold = () => {
  const [query, setQuery] = useState("");

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    console.log(inputValue);
  };

  return (
    <div className="flex justify-between m-auto w-1/2 mt-3">
      {window.location.pathname == "/" ? (
        <>
          <div className="p-2 rounded-md border bg-white">
            <FontAwesomeIcon icon={faSearch} />
            <input
              value={query}
              type="text"
              placeholder="Search your expenses..."
              className="ml-2 border-none outline-none"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div>
            <button className="pl-2 pr-2 pt-1 pb-1 rounded-md border-black border-2 shadow-lg">
              <FontAwesomeIcon icon={faAdd} className="ml-1 mr-1" />
              Add New
            </button>
          </div>
        </>
      ) : (
        <>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} className="ml-2 mr-2" />
            Back
          </button>

          <button>
            <FontAwesomeIcon icon={faRemove} className="ml-2 mr-2" />
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Topfold;
