import { useEffect, useState } from "react";
import "./index.css";
import Movie from "./Movie";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c52073a1";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <>
      <header className="bg-blue-800 px-6 py-6 rounded-xl shadow-md shadow-slate-900 mb-6">
        <h1 className="title bg-blue-700 text-5xl text-center pt-6 pb-6 mb-6 rounded-lg shadow-md shadow-blue-900 px-3 font-poppins font-bold">Pop-Media</h1>
        <div className="searchField flex flex-shrink-0 sm:flex-row flex-col gap-3 font-lato">
          <input
            placeholder="Search movies, tv shows, video games"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter') {searchMovies(searchText)}
            }}
            className="searchTextBar rounded-md p-3 w-full sm:w-4/5 text-slate-800 text-lg bg-slate-200 hover:bg-slate-50  focus:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-150 ease-out"
          />
          <button
            onClick={(e) => searchMovies(searchText)}
            className="searchButton bg-sky-300 text-lg sm:w-1/5 p-3 rounded-md hover:bg-sky-200 hover:shadow-md hover:shadow-blue-900 text-slate-900 transition-all duration-150 ease-out"
          >Search</button>
        </div>
      </header>

      <main className="flex flex-row flex-shrink-0 flex-wrap justify-center gap-3 p-3">
        {movies?.length > 0 ? (
          <>
            {movies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </>
        ) : (
          <div className="noResult bg-blue-800 rounded-lg shadow-md shadow-slate-900 p-6 text-center text-xl">
            <h2 className="font-lato">
              Nothing found here. Make sure you have used correct spellings!
            </h2>
          </div>
        )}
      </main>
      <footer className=" font-lato text-center pb-3"><a href="https://www.flaticon.com/free-icons/video-stream" title="video stream icons" className="hover:bg-slate-700 transition-all duration-150 ease-in underline py-1 px-2 rounded">Video stream icons created by Flat Icons - Flaticon</a></footer>
    </>
  );
};

export default App;
