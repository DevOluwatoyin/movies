const SearchBox = () => {

  return (
    <form className="mx-4">
      <div className="form-case max-w-3xl mx-auto grid grid-cols-[1fr] p-2 rounded-full place-content-center space-y-2 sm:grid-cols-[5fr_2fr] sm:space-y-0">
        <input type="text" name="search" className="w-full h-12 px-8 rounded-full text-bg-color outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-opacity-50" placeholder="Search..."  />
        <button type="submit" className="btn w-full py-4 rounded-full text-center">Show me!</button>
      </div>
    </form>
  )
}

export default SearchBox;