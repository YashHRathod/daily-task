import Link from 'next/link';


export default function Home() {

  return (
    <div className="p-8">
      <div className="">
        <h1 className="text-4xl font-bold mb-4">Centered Heading</h1>
      </div>

      <div className="">
        <p className="text-lg mb-4">This is my home page. Im learning Next.js!</p>
      </div>

      <Link href="/user" className="text-blue-500 underline">
        Go to User Page
      </Link>
      <br/>
      <Link href="/counter" className="text-blue-500 underline">
        Go to Counter
      </Link>
    </div>
  );
}
