import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [addAPICallCount, setAddAPICallCount] = useState(0);
  const [updateAPICallCount, setUpdateAPICallCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://data-neuron-assessment-backend.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
        setUpdateAPICallCount(response.data.updateAPICallCount);
        setAddAPICallCount(response.data.addAPICallCount);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <div className="d-flex gap-2">
          <Button variant="info">Add: {addAPICallCount}</Button>
          <Button variant="info">Update: {updateAPICallCount}</Button>

          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
