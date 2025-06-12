import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-gray-50">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
          Welcome to Campus Club Finder
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover student clubs, join communities, and get involved on campus.
        </p>
        <img
          src="/images/hero-club.png"
          alt="Campus clubs illustration"
          className="w-full max-w-md mx-auto mb-10"
        />
        {/* <Link
          to="/clubs"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
        >
          Explore Clubs
        </Link> */}
      </div>
    </div>
  );
}
