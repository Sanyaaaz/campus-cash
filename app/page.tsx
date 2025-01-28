import { NavbarDemo } from "@/components/Navbar";


const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarDemo/>
      </div>
    </main>
  );
};

export default Home;