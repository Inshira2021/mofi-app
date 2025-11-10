// Components/MovieDetailPage.jsx

import React from 'react';
import { 
   FiPlayCircle, FiPlus, FiStar, FiClock, FiHeart, 
    FiMessageSquare, FiTrendingUp, FiUsers
} from 'react-icons/fi';


// DUMMY DATA for the detail page
const DUMMY_MOVIE_DETAILS = {
    id: 1,
    name: 'John Wick: Chapter 4',
    year: 2023,
    duration: '2h 49m',
    genre: 'Action, Thriller, Neo-Noir',
    rating: 8.5,
    heroSrc: 'public/John Wick.jpg', // Use the image from your dummy data
    description: "The film follows John Wick, who sets out to defeat the High Table in a duel with the Marquis Vincent de Gramont, a member of the High Table who has taken his vengeance for his attempted retirement. If John wins, he will be freed from the High Table's control, but the rules are set against him.",
    director: 'Chad Stahelski',
    cast: [
        { name: 'Keanu Reeves', role: 'John Wick', src: 'public/Keanu Reeves.jpg' },
        { name: 'Donnie Yen', role: 'Caine', src: 'public/Donnie Yen.jpg' }, // Assuming you have an image for this
        { name: 'Bill Skarsgård', role: 'Marquis', src: 'public/Bill Skarsgård.jpg' }, // Assuming you have an image for this
        { name: 'Laurence Fishburne', role: 'Bowery King', src: 'public/Laurence Fishburne.jpg' },
    ],
    similarMovies: [
        { name: 'Mad Max', src: 'public/Mad Max.jpg' },
        { name: 'Extraction 2', src: 'public/Extraction 2.jpg' },
        { name: 'Ip Man 2', src: 'public/Ip Man 2.jpg' },
        { name: 'The Dark Knight', src: 'public/The Dark Knight.jpg' },
    ],
    reviews: 15400,
};

// Component for a Cast Member
const CastCard = ({ name, role, src }) => (
    <div className="text-center">
        <img 
            src={src} 
            alt={name} 
            className="w-20 h-20 object-cover rounded-full mx-auto border-2 border-gray-700 hover:border-red-600 transition"
        />
        <p className="text-white font-semibold text-sm mt-2 truncate">{name}</p>
        <p className="text-gray-400 text-xs">{role}</p>
    </div>
);

// Component for a Similar Movie
const SimilarMovieCard = ({ name, src }) => (
    <div className="relative rounded-lg overflow-hidden h-40 group cursor-pointer">
        <img 
            src={src} 
            alt={name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-3 flex items-end">
            <p className="text-white font-semibold text-sm">{name}</p>
        </div>
    </div>
);


const MovieDetailPage = ({ movie = DUMMY_MOVIE_DETAILS, onBack }) => {
    // We use the dummy data above, but in a real app, 'movie' prop would be passed in.

    return (
        <div className="flex-grow overflow-y-auto pr-4">
            
            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="text-red-600 hover:text-white transition mb-6 flex items-center font-medium"
            >
                &larr; Back to Dashboard
            </button>

            {/* Hero Section with Background */}
            <div className="relative w-full h-96 bg-gray-800 rounded-xl overflow-hidden mb-12 shadow-2xl">
                <img 
                    src={movie.heroSrc} 
                    alt={movie.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent p-8 flex items-center">
                    
                    {/* Poster Image */}
                    <img 
                        src={movie.heroSrc} 
                        alt={movie.name} 
                        className="w-48 h-72 object-cover rounded-lg shadow-xl border-4 border-red-600/50 flex-shrink-0"
                    />

                    {/* Movie Info */}
                    <div className="ml-8 text-white">
                        <h1 className="text-6xl font-extrabold mb-3 leading-tight">{movie.name}</h1>
                        
                        {/* Metadata */}
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                            <span>{movie.year}</span>
                            <span className="text-red-600">•</span>
                            <span>{movie.duration}</span>
                            <span className="text-red-600">•</span>
                            <span>{movie.genre}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-4 mb-6">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full flex items-center transition">
                                <FiPlayCircle className="inline-block mr-2 w-5 h-5" /> Watch Now
                            </button>
                            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full flex items-center transition">
                                <FiPlus className="inline-block mr-2 w-5 h-5" /> Add to List
                            </button>
                        </div>
                        
                        {/* Rating and Description */}
                        <div className="flex items-center space-x-8 mb-4">
                            <div className="flex items-center">
                                <FiStar className="w-6 h-6 text-yellow-400 mr-2" />
                                <span className="text-3xl font-bold">{movie.rating}</span>
                                <span className="text-gray-400 ml-1">/10</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <FiMessageSquare className="w-5 h-5 mr-1" />
                                <span>{movie.reviews.toLocaleString()} Reviews</span>
                            </div>
                        </div>

                        <p className="text-gray-300 w-2/3 mt-3">{movie.description}</p>
                    </div>
                </div>
            </div>

            {/* --- Main Content Sections --- */}
            <div className="space-y-12">
                
                {/* Cast Section */}
                <section>
                    <h3 className="text-3xl font-bold mb-6 text-white border-b border-red-600/50 pb-2 flex items-center">
                        <FiUsers className="w-6 h-6 mr-2 text-red-600" /> Top Cast
                    </h3>
                    <div className="flex space-x-6 overflow-x-auto pb-4">
                        {movie.cast.map((actor, index) => (
                            <CastCard key={index} {...actor} />
                        ))}
                    </div>
                </section>

                {/* Similar Movies Section */}
                <section>
                    <h3 className="text-3xl font-bold mb-6 text-white border-b border-red-600/50 pb-2 flex items-center">
                        <FiTrendingUp className="w-6 h-6 mr-2 text-red-600" /> You Might Also Like
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {movie.similarMovies.map((similar, index) => (
                            <SimilarMovieCard key={index} {...similar} />
                        ))}
                    </div>
                </section>
                
            </div>
        </div>
    );
};



export default MovieDetailPage;