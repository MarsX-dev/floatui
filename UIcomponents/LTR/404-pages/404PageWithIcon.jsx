/* eslint-disable @next/next/no-img-element */

export const PageWithIcon = () => {
  return (
    <>
      <main className="container mx-auto px-4 ">
        <div className="flex items-center justify-center h-screen">
          <div>
            {/*error Icon */}
            <img
              src="https://res.cloudinary.com/dkqdkfx5r/image/upload/v1680361874/404-error_1_jewfzt.png"
              alt="404 icon"
              className="w-[70px] mx-auto mb-4 opacity-60"
            />

            {/* 404 */}
            <h1 className="text-center font-semibold md:text-4xl text-3xl text-indigo-600 ">
              404 Error
            </h1>

            {/* 404 message */}
            <p className="text-gray-600 leading-4 md:text-lg text-md mt-5 text-center font-sans ">
              Page not found, but the internet is a big place. Keep exploring!
            </p>
            {/* return button */}
            <div className="flex items-center justify-center">
             
              <a href="javascript:void(0)" className="flex mt-4 py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            Go back
                       
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
