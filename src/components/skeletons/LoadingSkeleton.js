import React from "react";

export const LoadingSkeleton = () => {
  return (
    <main className="container mx-auto px-4">
      <section className="flex flex-col justify-center">
      {/**Loading Text  */}
      <div className="mb-4 mt-4 flex justify-center">
      <label htmlFor="typeFilter" className="text-gray-700 mr-2 dark:text-white">
        Loading
      </label>

      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/**Skeleton Displaying for 15 card */}
          {[...Array(15)].map((_, index) => (
            <div className="card-skeleton bg-gray-100 p-4 rounded-lg animate-pulse">
              {/**for id number right corner*/}
              <div className="skeleton-text mb-2 w-1/4 h-4 bg-gray-200"></div>

              {/** for center image*/}
              <div className="skeleton-image mx-auto mb-2 w-32 h-32 bg-gray-200"></div>

              {/**Title and Types */}
              <div className="skeleton-type my-2 flex flex-wrap gap-2 justify-center">
                <div className="skeleton-heading text-xl w-3/4 h-6 bg-gray-200 "></div>
                <div className="skeleton-subheading text-lg w-1/4 h-4 bg-gray-200"></div>
                <div className="skeleton-subheading text-lg w-1/4 h-4 bg-gray-200"></div>
                <div className="skeleton-subheading text-lg w-1/4 h-4 bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
