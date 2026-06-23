import { motion } from "framer-motion";

function Hero(){

return(

<section 
id="home"
className="min-h-screen flex items-center justify-center text-white px-6 py-20"
>

<div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">


<div>


<motion.h1

initial={{opacity:0,y:-40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="text-5xl md:text-6xl font-bold"

>

Building AI & Data Solutions

</motion.h1>



<h2 className="text-2xl text-blue-400 mt-5">

Data Analyst | AI Enthusiast | ML Developer

</h2>



<p className="text-gray-300 mt-6 text-lg">

I transform raw data into meaningful insights and
build intelligent AI solutions for real-world problems.

</p>



<div className="flex gap-5 mt-8">


<a

href="#projects"

className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700"

>

View Projects

</a>



<a

href="/resume.pdf"

download

className="border px-8 py-3 rounded-xl hover:bg-white hover:text-black"

>

Download Resume

</a>


</div>


</div>



<motion.img

initial={{opacity:0,scale:0.8}}

animate={{opacity:1,scale:1}}

transition={{duration:0.8}}

src="/profile.png.jpg"

alt="Profile"

className="rounded-full w-80 h-80 object-cover border-4 border-blue-500"

/>


</div>


</section>

)

}


export default Hero;