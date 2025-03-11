import Image from "next/image";
import jeopardy from "../public/jeopardy.png"

export default function Home() {
  return (
    <>
  
    <div className="container mx-auto">

  {/* hero section */}

  <div className="hero flex items-center pt-9">
       
    <div className="p-2 w-[50%]">
      <h1 className="mb-8 font-bold text-3xl">Test Your Knowledge with Jeopardy!</h1>
      <p className="mb-8 font-medium text-[18px]">Step up to the challenge and put your trivia skills to the test! Play Jeopardy, answer questions across various categories, and see if you can claim the top spot. Are you ready to win big? </p>
       <div ><a href="/homePage" className="bg-blue-900 text-white px-4 py-3 font-medium rounded">Start game</a></div>
    </div>
    <div className="p-2 w-[50%] ">
      <Image src={"/jeopardy.png"} width={700} height={900} alt="logo" className="ml-auto"/>
    </div>
  </div>
  </div>
  </>
  );
}
