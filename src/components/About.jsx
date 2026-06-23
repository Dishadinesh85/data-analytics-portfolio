import { motion } from "framer-motion";

function About(){

return (

<section 
id="about"
className="py-20 text-white px-6"
>


<div className="max-w-6xl mx-auto">


<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

className="text-4xl font-bold text-center mb-10"

>

About Me

</motion.h2>



<div className="grid md:grid-cols-2 gap-10 items-center">


<div className="bg-slate-900 p-8 rounded-2xl shadow-lg">


<p className="text-gray-300 text-lg leading-relaxed">

I am a passionate Data Analyst and AI enthusiast focused on
building intelligent solutions using data, machine learning,
and modern technologies.

<br/><br/>

My work combines analytics, visualization, and artificial
intelligence to transform complex datasets into meaningful
business insights.

<br/><br/>

I enjoy developing projects in predictive analytics,
decision support systems, and AI-powered applications.

</p>


</div>




<div className="space-y-5">


<div className="bg-slate-900 p-6 rounded-xl">

<h3 className="text-xl font-bold text-blue-400">

🎓 Education

</h3>

<p className="text-gray-300">

Bachelor of Engineering

<br/>

Data Science / Computer Science

</p>

</div>




<div className="bg-slate-900 p-6 rounded-xl">

<h3 className="text-xl font-bold text-blue-400">

💡 Focus Areas

</h3>

<p className="text-gray-300">

Data Analytics

<br/>

Machine Learning

<br/>

Artificial Intelligence

<br/>

Business Intelligence

</p>

</div>




<div className="bg-slate-900 p-6 rounded-xl">

<h3 className="text-xl font-bold text-blue-400">

🚀 Goal

</h3>

<p className="text-gray-300">

Building impactful AI-driven products
that solve real-world problems.

</p>

</div>



</div>


</div>


</div>


</section>

)

}


export default About;