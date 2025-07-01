import React, { useState, useMemo } from 'react';
import { Film } from 'lucide-react';
import { allMovies } from './data/movies';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState(allMovies);
  const [filters, setFilters] = useState({
    title: '',
    rating: 0,
  });

  // Generate unique ID for new movies
  const getNextId = () => {
    return Math.max(...movies.map(m => m.id), 0) + 1;
  };

  const handleAddMovie = (movieData) => {
    const newMovie = {
      ...movieData,
      id: getNextId(),
    };
    setMovies(prev => [...prev, newMovie]);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      title: '',
      rating: 0,
    });
  };

  // Memoized filtered movies for performance
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(filters.title.toLowerCase());
      const matchesRating = filters.rating === 0 || movie.rating >= filters.rating;
      return matchesTitle && matchesRating;
    });
  }, [movies, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Film className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl font-bold text-white">
                My Movie Collection
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover, organize, and showcase your favorite movies and TV shows
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Filter Section */}
        <div className="mb-8">
          <Filter
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </div>

        {/* Movies Count */}
        <div className="mb-6">
          <p className="text-gray-300 text-lg">
            Showing <span className="font-semibold text-white">{filteredMovies.length}</span> of{' '}
            <span className="font-semibold text-white">{movies.length}</span> movies
          </p>
        </div>

        {/* Movie List */}
        <MovieList movies={filteredMovies} />

        {/* Add Movie Button */}
        <AddMovieForm onAddMovie={handleAddMovie} />
      </main>
    </div>
  );
}

export default App;