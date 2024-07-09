
// Purchase Button
function Button({children}) {
    return (
      <button className="bg-blue-800 capitalize text-white border-2 py-2 px-4 font-bold border-blue-500 rounded-lg hover:bg-white hover:text-blue-500 shadow-md transition-all duration-300">
        {children}
      </button>
    );
}

export default Button;