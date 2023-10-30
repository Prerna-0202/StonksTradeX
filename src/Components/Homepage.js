import Link from "next/link";
import HomePageImage from "../assets/home-page-image.svg";
import Image from "next/image";

const Homepage = () => (
  <div className="flex text-center flex-col items-center justify-center gap-10 pt-8">
    {/* Image */}
    <Image src={HomePageImage} width={500} />
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="text-3xl font-extrabold uppercase text-center">
        Groww Stonks
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        quasi.
      </p>
      {/* Button to Register*/}
      <Link
        href="/Register"
        className="bg-[#0074e1] text-white border-indigo-300 text-lg px-12 py-4 flex items-center justify-center cursor-pointer border-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-[#0074e1] hover:scale-[1.02] transition duration-150"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Homepage;
