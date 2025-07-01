import React from 'react';
import { Search, Star, RotateCcw } from 'lucide-react';

const Filter = ({ filters, onFilterChange, onReset }) => {
  const handleTitleChange = (e) => {
    onFilterChange({
      ...filters,
      title: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    onFilterChange({
      ...filters,
      rating: parseFloat(e.target.value),
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search movies..."
            value={filters.title}
            onChange={handleTitleChange}
            className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 w-5 h-5" />
          <select
            value={filters.rating}
            onChange={handleRatingChange}
            className="pl-10 pr-8 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer min-w-[180px]"
          >
            <option value={0} className="bg-gray-800">All Ratings</option>
            <option value={1} className="bg-gray-800">1+ Stars</option>
            <option value={2} className="bg-gray-800">2+ Stars</option>
            <option value={3} className="bg-gray-800">3+ Stars</option>
            <option value={4} className="bg-gray-800">4+ Stars</option>
            <option value={5} className="bg-gray-800">5 Stars</option>
          </select>
        </div>
        
        <button
          onClick={onReset}
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;