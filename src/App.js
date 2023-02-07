import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header>
        <p>Nice Movies:</p>

        {movies.length && 
          (<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
            {movies.map(function(movie, index) {
              return (
                <div key={`${index}-${movie.id}`} className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                  <div className="py-3 sm:max-w-xl sm:mx-auto">
                      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                          <div className="flex flex-col space-y-4">
                              <div className="flex justify-between items-start">
                                  
                                  <Link to={`/movies/${movie.id}`}><h2 className="text-3xl font-bold">{movie.title}</h2></Link>
                                  <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.vote_average}</div>
                              </div>
                              <div>
                                  <div className="text-sm text-gray-400">{movie.status}</div>
                                  <div className="text-lg text-gray-800">{movie.release_date}</div>
                              </div>
                              <p className=" text-gray-400 max-h-40 ">{movie.tagline}</p>
                              <div className="flex text-2xl font-bold text-a">{movie.runtime}</div>
                          </div>
                  
                      </div>
                  </div>
                  
              </div>
              )
            })}
          </div>)
        }
      </header>
    </div>
  );
}

export default App;
