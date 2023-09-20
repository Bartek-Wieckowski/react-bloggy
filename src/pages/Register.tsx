import { motion } from "framer-motion";
export default function Register() {
  return (
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="firstname" className="block mb-2 text-sm font-medium">
            Firstname
          </label>
          <input
            type="text"
            id="firstname"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="lastname" className="block mb-2 text-sm font-medium">
            Lastname
          </label>
          <input
            type="text"
            id="lastname"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="nickname" className="block mb-2 text-sm font-medium">
            Your nickname
          </label>
          <input
            type="text"
            id="nickname"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required=""
          />
        </div>
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium">
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required=""
          />
        </div>

        <div className="mb-6 max-w-md mx-auto">
          <button
            type="submit"
            className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
      </form>
    </motion.div>
  );
}
