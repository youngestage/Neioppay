import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-poppins font-bold text-blue-very-dark mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg font-inter text-blue-very-dark mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-blue-dark text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

