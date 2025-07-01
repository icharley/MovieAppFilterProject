import React from 'react';
import { Film } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Film className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">No movies found</h3>
        <p className="text-gray-400 max-w-md">
          Try adjusting your filters or add some new movies to your collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;