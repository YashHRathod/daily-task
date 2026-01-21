import Cards from "./component/Cards";

export default function App() {
  return (
    <div className="
      min-h-screen bg-red-300 p-10 text-xl font-semibold
      grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      gap-4
    ">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
