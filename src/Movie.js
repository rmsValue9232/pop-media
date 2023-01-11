import React from "react";
import noImage from './no-image.svg';

const Movie = ({movie}) => {
    return(
        <div className='movie bg-transparent rounded-lg flex flex-col justify-center group w-72'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : noImage} alt={`Poster for ${movie.Title}`} className="peer rounded-lg shadow-md shadow-slate-900"/>
            <div className="text-transparent h-24 -mt-24 peer-hover:h-64 hover:h-64 peer-hover:-mt-64 peer-hover:text-slate-50 hover:text-slate-50 hover:-mt-64 peer-hover:bg-gradient-to-t peer-hover:from-black hover:bg-gradient-to-t hover:from-black transition-all duration-300 ease-out z-10 flex flex-col justify-end text-md rounded-t-3xl rounded-b-lg">
                <h3 className="px-4 font-lato">{movie.Type}</h3>
                <h3 className="px-4 font-lato">{movie.Year}</h3>
                <p className="mb-3 px-4 font-poppins font-bold break-all text-xl">{movie.Title}</p>
            </div>
        </div>
    );
}

export default Movie;