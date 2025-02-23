import Link from 'next/link'

export default function SecondPage() {
    return (
     <div className="h-screen flex flex-col justify-center">
      <h1 className="text-center text-7xl font-bold">Hi Again</h1>
      <Link
      className="mx-auto mt-4 px-5 py-2"
      href={{
        pathname: '/',
      }}
    >
    <button className="px-5 py-2 bg-blue-500 text-white rounded-md">Back</button>
    </Link>
     </div>
    );
  }