export default function Login() {
  return (
    <div className="container mx-auto px-4">
      <form>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <button
            type="submit"
            className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
