import React from 'react';

export default function Example() {
    return (
      <>
      <div className="min-h-full flex flex-col  py-12 sm:px-6 ">
        <div className="ml-60 sm:w-full sm:max-w-md">
          <h2 className="mt-6  text-3xl font-extrabold text-gray-700">Anouncement Form</h2>
        </div>

        <div className="mt-8 ml-64 sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="" action="#" method="POST">
              <div>
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Anouncement
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="Anouncement" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Anouncement
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
                    defaultValue={''}
                  />
                  <p className="mt-2 text-sm text-gray-500">Write a few sentences about Anouncement.</p>
                </div>
              </div>
                <button
                  type="submit"
                  className=" flex justify-right py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>

        );
        }