import TopHeader from "@/components/TopHeader"; // Update the correct path

const SignupPage = () => {
  return (
    <>
      <TopHeader />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

