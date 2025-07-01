import React from 'react';
import { Star, Calendar, Tag } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 text-gray-300"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20">
      <div className="relative overflow-hidden">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450/4F46E5/white?text=No+Image';
          }}
        />
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white font-semibold text-sm">{movie.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
            {movie.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-4 mb-3 text-gray-300">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{movie.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="w-4 h-4" />
            <span className="text-sm">{movie.genre}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 mb-3">
          {renderStars(movie.rating)}
          <span className="text-gray-300 text-sm ml-2">({movie.rating}/5)</span>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;