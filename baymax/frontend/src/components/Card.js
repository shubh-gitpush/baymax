import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, url }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm transform transition-transform hover:scale-105 hover:shadow-purple-600">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 text-sm opacity-90">{description}</p>
        <button
          onClick={() => navigate(url)}
          className="mt-5 bg-white text-purple-700 font-semibold px-5 py-2 rounded-xl shadow hover:bg-purple-100 transition-all duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
