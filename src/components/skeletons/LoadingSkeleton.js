import React from "react";
import Skeleton from "react-loading-skeleton";

export const LoadingSkeleton = () => {
  return (
    <main className="container mx-auto px-4">
      <section className="flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <Skeleton height={150} width={150} />
              <div className="text-center mt-4">
                <Skeleton height={50} width={80} />
                <div className="my-2 flex flex-wrap gap-2 justify-center">
                  <div className="text-gray-600 text-lg">Type: </div>
                  <Skeleton height={30} width={60} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
