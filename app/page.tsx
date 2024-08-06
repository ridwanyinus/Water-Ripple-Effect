import dynamic from "next/dynamic";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const RippleEffect = dynamic(() => import("@/components/RippleEffect"), { ssr: false });

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      <RippleEffect />
      <div className="relative flex  flex-col justify-center items-center  bg-green-700 py-1 z-50 w-1/2 mx-auto">
        <h1 className="text-white text-2xl font-semibold tracking-wide">Created by Ridwan</h1>
        <Link rel="stylesheet" href="https://github.com/ridwanyinus/particles-effect" className="flex py-3 gap-x-1 hover:underline text-white">
          Link to github repo <FaGithub size={20} />
        </Link>
      </div>
    </div>
  );
}
