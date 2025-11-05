import React, { useState } from 'react';
import { FiSearch, FiBell, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FiClock } from "react-icons/fi";
import { motion } from 'framer-motion';

// --- DUMMY DATA (Extended for all sections) ---
const ARTISTS_PER_PAGE = 4;
const MOVIES_PER_PAGE = 3;
const INITIAL_POPULAR_LIMIT = 3;
const INITIAL_FAVORITES_LIMIT = 3;

const allArtists = [
  { name: 'Charlize Theron', movies: '+12 Movies', src: 'public/charlize theron.jpg' },
  { name: 'Laurence Fishburne', movies: '+27 Movies', src: 'public/Laurence Fishburne.jpg' },
  { name: 'Martin Freeman', movies: '+10 Movies', src: 'public/Martin Freeman.jpg' },
  { name: 'Keanu Reeves', movies: '+27 Movies', src: 'public/Keanu Reeves.jpg' },
  { name: 'Tom Hanks', movies: '+15 Movies', src: 'public/tom hanks.jpg' }, 
  { name: 'Scarlett Johansson', movies: '+20 Movies', src: 'public/scarlett johansson.jpg' },
  { name: 'Denzel Washington', movies: '+30 Movies', src: 'public/denzel washington.jpg' },
  { name: 'Zendaya', movies: '+8 Movies', src: 'public/zendaya.jpg' },
];

const allContinueWatching = [
    { name: 'Matrix Revolution', progress: 75, src: "public/Matrix Revolution.jpg" },
    { name: 'Deadpool', progress: 50, src: "public/Deadpool.jpg" },
    { name: 'Lord of the Rings', progress: 30, src: "public/Lord of the Rings.jpg" },
    { name: 'Interstellar', progress: 90, src: "public/Interstellar.jpg" },
    { name: 'Inception', progress: 20, src: "public/Inception.jpg" },
];

const popularMoviesData = [
    { name: 'John Wick', genre: 'Action, Horror', rating: 7.4, src: "public/John Wick.jpg" },
    { name: 'Mad Max', genre: 'Action, Adventure', rating: 8.1, src: "public/Mad Max.jpg" },
    { name: 'Ip Man 2', genre: 'Action, Biography', rating: 7.2, src: "public/Ip Man 2.jpg" },
    // Extra Popular Movies
    { name: 'Extraction 2', genre: 'Action, Thriller', rating: 7.0, src: "public/Extraction 2.jpg" },
    { name: 'Mission Impossible', genre: 'Spy, Action', rating: 8.0, src: "public/Mission Impossible.jpg" },
    { name: 'The Dark Knight', genre: 'Action, Crime', rating: 9.0, src: "public/The Dark Knight.jpg" },
];

const favoritesData = [
    { name: 'Hobbit 1', genre: 'Adventure, Fantasy', rating: 7.8, src: "public/Hobbit 1.jpg" },
    { name: 'I Am Legend', genre: 'Action, Adventure', rating: 7.2, src: "public/I Am Legend.jpg" },
    { name: 'Avatar', genre: 'Action, Adventure', rating: 7.8, src: "public/Avatar.jpg" },
    // Extra Favorites Movies
    { name: 'Dune', genre: 'Sci-Fi, Adventure', rating: 8.1, src: "public/Dune.jpg" },
    { name: 'The Martian', genre: 'Sci-Fi, Drama', rating: 7.9, src: "public/The Martian.jpg" },
];


// --- 1. POPULAR MOVIES SIDEBAR COMPONENT ---
const PopularMoviesSidebar = ({ handleSeeMorePopular, popularMoviesData, visiblePopularMovies, showPopularSeeMore, handleSeeMoreFavorites, favoritesData, visibleFavorites, showFavoritesSeeMore }) => (
    <div className="w-full lg:w-80 flex-shrink-0 overflow-y-auto pb-8"> 
        <div className="relative mb-8">
            <input type="text" placeholder="Search" className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"/>
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        
        {/* Popular Movies */}
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Popular Movies</h3>
            <div className="space-y-4">
              {visiblePopularMovies.map((movie, index) => (
                 <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={movie.src} alt={movie.name} className="w-16 h-16 object-cover rounded-lg"/>
                    <div>
                        <p className="font-semibold">{movie.name}</p>
                        <p className="text-gray-400 text-sm">{movie.genre}</p>
                        <span className="text-yellow-400 text-sm font-bold flex items-center"><span className="text-base mr-1">⭐</span>{movie.rating}</span>
                    </div>
                </motion.div>
              ))}
              {showPopularSeeMore && (
                <button onClick={handleSeeMorePopular} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors">
                  See More ({popularMoviesData.length - visiblePopularMovies.length} more)
                </button>
              )}
            </div>
        </div>

        {/* Favorites */}
        <div>
            <h3 className="text-xl font-bold mb-4">Favorites</h3>
            <div className="space-y-4">
              {visibleFavorites.map((movie, index) => (
                 <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={movie.src} alt={movie.name} className="w-16 h-16 object-cover rounded-lg"/>
                    <div>
                        <p className="font-semibold">{movie.name}</p>
                        <p className="text-gray-400 text-sm">{movie.genre}</p>
                        <span className="text-yellow-400 text-sm font-bold flex items-center"><span className="text-base mr-1">⭐</span>{movie.rating}</span>
                    </div>
                </motion.div>
              ))}
              {showFavoritesSeeMore && (
                <button onClick={handleSeeMoreFavorites} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full mt-4 transition-colors">
                  See More ({favoritesData.length - visibleFavorites.length} more)
                </button>
              )}
            </div>
        </div>
    </div>
);


// --- 2. PLACEHOLDER CONTENT FOR MOVIES / ANIMES / OTHER PAGES ---
export const OtherPageContent = ({ title }) => ( 
    <motion.div 
        className="flex-grow overflow-y-auto pr-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
    >
        <h2 className="text-5xl font-bold mb-8 mt-4 text-white">{title} Content</h2>
        <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-10">
            <p className="text-gray-400 text-2xl">This is the dedicated {title} page!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <motion.div 
                    key={i} 
                    className="bg-gray-800 h-64 rounded-lg flex items-center justify-center text-gray-400 font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                >
                    {title} Item {i}
                </motion.div>
             ))}
        </div>
    </motion.div>
);


// --- 3. MAIN CONTENT (Previously HOME CONTENT) ---
const MainContent = () => { // Renamed from HomeContent to MainContent
    // State for Best Artists carousel
    const [artistStartIndex, setArtistStartIndex] = useState(0);
    const visibleArtists = allArtists.slice(artistStartIndex, artistStartIndex + ARTISTS_PER_PAGE);
    const goToNextArtists = () => { if (artistStartIndex + ARTISTS_PER_PAGE < allArtists.length) setArtistStartIndex(artistStartIndex + ARTISTS_PER_PAGE); };
    const goToPrevArtists = () => { if (artistStartIndex > 0) setArtistStartIndex(artistStartIndex - ARTISTS_PER_PAGE); };

    // State for Continue Watching carousel
    const [movieStartIndex, setMovieStartIndex] = useState(0);
    const visibleMovies = allContinueWatching.slice(movieStartIndex, movieStartIndex + MOVIES_PER_PAGE);
    const goToNextMovies = () => { if (movieStartIndex + MOVIES_PER_PAGE < allContinueWatching.length) setMovieStartIndex(movieStartIndex + MOVIES_PER_PAGE); };
    const goToPrevMovies = () => { if (movieStartIndex > 0) setMovieStartIndex(movieStartIndex - MOVIES_PER_PAGE); };

    return (
        <motion.div 
            className="flex-grow overflow-y-auto pr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
          
          {/* --- Hero Section --- */}
          <div className="relative w-full h-96 bg-gray-700 rounded-lg overflow-hidden mb-10">
            <img src="public/the-tomorrow-war.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-8 flex flex-col justify-end">
              <span className="text-red-600 text-sm font-semibold mb-2">ACTION, ADVENTURE, COMEDY</span>
              <h2 className="text-5xl font-bold mb-4">THE TOMORROW WAR</h2>
              <p className="text-gray-300 mb-6 w-2/3">The Tomorrow War (2021) is a sci-fi action film directed by Chris McKay and written by Zach Dean. Starring Chris Pratt, Yvonne Strahovski, and J.K. Simmons...</p>
              <div className="flex items-center space-x-4">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(220, 38, 38, 0.8)" }} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
                  <FiClock className="inline-block mr-2" /> Watch
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
                  + Add to List
                </motion.button>
              </div>
            </div>
          </div>

          {/* --- Best Artists Section (Carousel) --- */}
           <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Best Artists</h2>
              <div className="flex space-x-2">
                <button onClick={goToPrevArtists} disabled={artistStartIndex === 0} className={`p-2 rounded-full transition-colors ${artistStartIndex === 0 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-red-600 text-white'}`}><FiChevronLeft className="w-5 h-5"/></button>
                <button onClick={goToNextArtists} disabled={artistStartIndex + ARTISTS_PER_PAGE >= allArtists.length} className={`p-2 rounded-full transition-colors ${artistStartIndex + ARTISTS_PER_PAGE >= allArtists.length ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-red-600 text-white'}`}><FiChevronRight className="w-5 h-5"/></button>
              </div>
            </div>
            <div className="flex space-x-4">
              {visibleArtists.map((artist) => (
                <motion.div key={artist.name} className="flex-shrink-0 w-48 bg-gray-800 rounded-lg p-4 text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <img src={artist.src} alt={artist.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-red-600"/>
                  <h3 className="font-semibold text-lg">{artist.name}</h3>
                  <p className="text-gray-400 text-sm">{artist.movies}</p>
                  <button className="mt-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full hover:bg-red-700 transition-colors">+</button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Continue Watching Section (Carousel) --- */}
           <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Continue Watching</h2>
              <div className="flex space-x-2">
                <button onClick={goToPrevMovies} disabled={movieStartIndex === 0} className={`p-2 rounded-full transition-colors ${movieStartIndex === 0 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-red-600 text-white'}`}><FiChevronLeft className="w-5 h-5"/></button>
                <button onClick={goToNextMovies} disabled={movieStartIndex + MOVIES_PER_PAGE >= allContinueWatching.length} className={`p-2 rounded-full transition-colors ${movieStartIndex + MOVIES_PER_PAGE >= allContinueWatching.length ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-red-600 text-white'}`}><FiChevronRight className="w-5 h-5"/></button>
              </div>
            </div>
            <div className="flex space-x-4">
              {visibleMovies.map((movie) => (
                <div key={movie.name} className="flex-shrink-0 w-64 bg-gray-800 rounded-lg overflow-hidden">
                  <img src={movie.src} alt={movie.name} className="w-full h-36 object-cover"/>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{movie.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                      <div className="bg-red-600 h-1.5 rounded-full" style={{width: `${movie.progress}%`}}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </motion.div>
    );
};


// --- 4. MAIN DASHBOARD COMPONENT (Handles Navigation) ---
const Dashboard = () => {
    // State initialization
    const [activeTab, setActiveTab] = useState('TV Series'); 
    const [popularMoviesLimit, setPopularMoviesLimit] = useState(INITIAL_POPULAR_LIMIT);
    const [favoritesLimit, setFavoritesLimit] = useState(INITIAL_FAVORITES_LIMIT);

    // Handlers
    const handleSeeMorePopular = () => { setPopularMoviesLimit(popularMoviesData.length); };
    const handleSeeMoreFavorites = () => { setFavoritesLimit(favoritesData.length); };
    
    // Calculations
    const showPopularSeeMore = popularMoviesLimit < popularMoviesData.length;
    const showFavoritesSeeMore = favoritesLimit < favoritesData.length;
    const visiblePopularMovies = popularMoviesData.slice(0, popularMoviesLimit);
    const visibleFavorites = favoritesData.slice(0, favoritesLimit);

    // Function to render content based on the active tab
    const renderContent = () => {
        const sidebarProps = {
            handleSeeMorePopular,
            popularMoviesData, 
            visiblePopularMovies, 
            showPopularSeeMore,
            handleSeeMoreFavorites, 
            favoritesData, 
            visibleFavorites, 
            showFavoritesSeeMore,
        };
        
        switch (activeTab) {
            case 'Movies':
                return <OtherPageContent key="movies" title="Movies" />;
            case 'Animes':
                return <OtherPageContent key="animes" title="Animes" />;
            case 'TV Series':
            default:
                return (
                    // TV Series (Home) page renders MainContent and Sidebar side-by-side
                    <>
                        <MainContent /> {/* UPDATED COMPONENT NAME */}
                        <PopularMoviesSidebar {...sidebarProps} />
                    </>
                );
        }
    };

    return (
        <div className="flex-1 bg-gray-900 p-8 overflow-y-auto">
            
            {/* --- Top Header (Tabs and Icons) --- */}
            <div className="flex justify-between items-center mb-8">
                {/* Genre Navigation */}
                <div className="flex space-x-6 text-lg font-medium">
                    {['TV Series', 'Movies', 'Animes'].map((tab) => (
                        <a 
                            key={tab}
                            href="#" 
                            onClick={(e) => { e.preventDefault(); setActiveTab(tab); }} // Change state on click
                            className={`pb-1 cursor-pointer transition-colors duration-200 ${
                                tab === activeTab 
                                    ? 'text-red-600 border-b-2 border-red-600' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {tab}
                        </a>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-6">
                    <FiSearch className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
                    <FiBell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
                    <FiUser className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
                </div>
            </div>

            {/* --- Main Content Layout: Fixed Height Container --- */}
            <div className="flex gap-8 h-[calc(100vh-80px)]"> 
                 {renderContent()}
            </div>
        </div>
    );
};

// --- EXPORT SECTION ---
// Default export for the Dashboard component
export default Dashboard;

// Named export for the placeholder component, allowing it to be used by App.jsx
// export { OtherPageContent }; // This line is no longer needed

// The component is already exported here (Line ~110):
// export const OtherPageContent = ({ title }) => ( ... );