import { Link } from "react-router-dom"
import MovieList from "../components/MovieList"

const Home = () => {
  return (
    <div className="pt-14">
      <div className="hero relative w-full h-[40vh]">
        <span className="absolute top-0 left-0 w-full h-full bg-bg-transparent1"></span>
        <div className="relative w-full h-full space-y-6 md:space-y-11">
          <div className="w-full text-center font-bold space-y-6 md:pt-8">
            <h1 className="text-3xl md:text-7xl">Welcome!</h1>
            <p className="text-xl md:text-4xl max-w-4xl mx-auto">Discover and explore recent and trending Movies & TV Shows</p>
          </div>
          <form className="mx-4">
            <div className="form-case max-w-3xl mx-auto grid grid-cols-[1fr] p-2 rounded-full place-content-center space-y-2 sm:grid-cols-[5fr_2fr] sm:space-y-0">
              <input type="text" name="search" className="w-full h-12 px-8 rounded-full outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-opacity-50" placeholder="Search..." />
              <button type="submit" className="btn w-full py-4 rounded-full text-center">Show me!</button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-8 w-full h-full bg-bg-color pt-14 py-4">
        <div className="trending max-w-4xl mx-auto">
          <div className="flex justify-between space-x-4 items-center mb-8">
            <div className="relative">
              <h2 className="relative text-2xl font-bold pb-1">What&apos;s Trending</h2>
              <span className="line absolute w-full h-0.5 bottom-0"></span>
            </div>
            <Link to="/trending">
              <button className="bg-heart-color px-4 rounded-full">View all</button>
            </Link>
          </div>
          <MovieList />
        </div>
      </div>
    </div>
  )
}

export default Home
