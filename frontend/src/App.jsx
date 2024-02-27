import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ProfileCard from "./components/ProfileCard";
import Description from "./components/Description";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="top flex gap-10 justify-around ">
        <div className="w-full md:w-1/3 mt-10 ml-10 p-4 bg-gray-200 border-2 border-solid border-black resizable">
          <ProfileCard />
        </div>

        <div className="w-full md:w-2/3 mt-10 mr-10 p-4 bg-gray-300 border-2 border-solid border-black resizable">
          <Description />
        </div>
      </div>

      <div className="bottom border-2 border-solid border-black m-10 resizable">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
