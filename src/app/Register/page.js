"use client"
import Link from "next/link";

const page = () => {
  return (
    <div className="signup-1 flex items-center h-1/3  mt-52 md:mt-32">
      <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
      <form className="container px-4 mx-auto relative z-10">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
          <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600">
            <h2 className="text-3xl text-gray-800 text-center">Create Your Account</h2>

            {/* Input Username */}
            <div className="signup-form mt-6 md:mt-12">
              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="flex-1">
                  <input type="text"
                    placeholder="Username" className="h-10 py-1 pr-3 w-full" />
                </div>
              </div>

              {/* Input Email */}
              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="flex-1">
                  <input type="email"
                    placeholder="Email" className="h-10 py-1 pr-3 w-full" />
                </div>
              </div>

              {/* Input Password */}
              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="flex-1">
                  <input
                    type="password" placeholder="Password" className="h-10 py-1 pr-3 w-full" />
                </div>
              </div>

              {/* Sign-Up Button */}
              <div className="text-center mt-6 md:mt-12">
                <Link href="/Explore" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300 cursor-pointer">Sign Up</Link>
              </div>

            </div>
          </div>
        </div>
      </form>
    </div>)

}
export default page;
