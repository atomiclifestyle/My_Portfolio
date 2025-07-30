// import Link from 'next/link'
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { Button } from "../components/ui/moving-border";
// import { Spotlight } from "../components/ui/Spotlight";


// export default function Home() {
//   return (
//     <BackgroundBeamsWithCollision className='bg-black text-white'>
      // <Spotlight
      //   className="-top-40 left-0 md:left-60 md:-top-20"
      //   fill="white"
      // />
//     <div className="h-screen flex flex-col justify-center">
//     <h1 className="text-center text-7xl font-bold">Welcome to My Portfolio</h1>
//     <Link
//       className="mx-auto mt-4 px-5 py-2"
//       href={{
//         pathname: '/secpage',
//       }}
//     >
//     {/* <button className="px-5 py-2 text-white rounded-md border-white">Click Me</button> */}
//     <Button
//         borderRadius="1.75rem"
//         className= "bg-slate-900 text-white dark:border-slate-800 text-lg"
//       >
//         Work In Progress
//       </Button>
//     </Link>
//    </div>
//    </BackgroundBeamsWithCollision>
//   );
// }


// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Profiles } from "@/components/Profiles";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <>
    {/* <BackgroundBeamsWithCollision className='bg-black text-white'> */}
      <Navbar />
      <main className="flex flex-col items-center gap-12">
        <Hero />
        <Experience />
        <Profiles />
        <Education />
        <Projects />
      </main>
      <Footer />
      {/* </BackgroundBeamsWithCollision> */}
    </>
  );
}