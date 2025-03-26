import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from "../components/Dashboard";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setFilms(response.data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  const filteredFilms = films.filter((film) => film.title.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <Dashboard>
      <div className="p-4 bg-[#03123D] min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-2xl font-bold">Films</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Search films" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="mr-4 p-2 rounded bg-white/10 text-white" />
            <div className="flex space-x-2">
              <button onClick={() => setViewMode("grid")} className={`p-2 rounded ${viewMode === "grid" ? "bg-pink-600 text-white" : "bg-white/10 text-white"}`}>
                Grid
              </button>
              <button onClick={() => setViewMode("list")} className={`p-2 rounded ${viewMode === "list" ? "bg-pink-600 text-white" : "bg-white/10 text-white"}`}>
                List
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
        ${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" : "space-y-4"}
      `}
        >
          {filteredFilms.map((film) => (
            <div
              key={film.episode_id}
              className={`
              bg-[#1E2B4D] rounded-lg overflow-hidden shadow-lg
              ${viewMode === "grid" ? "flex flex-col" : "flex items-center"}
            `}
            >
              <div
                className={`
                ${viewMode === "grid" ? "h-48 w-full" : "w-48 h-32 mr-4 flex-shrink-0"} 
                bg-white/10 flex items-center justify-center
              `}
              >
                <span className="text-white text-center">Film Poster</span>
              </div>
              <div className="p-4 flex-grow">
                <h2 className="text-white font-bold text-xl mb-2">{film.title}</h2>
                <div className="text-white/70 space-y-1">
                  <p>Release Date: {film.release_date}</p>
                  <p>Director: {film.director}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-pink-600 text-white px-3 py-1 rounded">View Details</button>
                  <div className="relative">
                    <button className="text-white hover:bg-white/10 rounded p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default Films;
