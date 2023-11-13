import React from 'react';

export const ErrorSkeleton = ({error}) => {
  return (
    <main className="container mx-auto px-4">
        <section className="flex flex-col justify-center items-center h-screen">
          <p className="text-2xl text-red-600 font-bold mb-4">Oops! Something went wrong.</p>
          <p className="text-gray-600">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </section>
      </main>
  )
}
