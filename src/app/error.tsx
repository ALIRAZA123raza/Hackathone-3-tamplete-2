"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-gray-700 mt-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}
