import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


function Projects(){


const projects=[


{
title:"TwinMind AI",

description:
"AI-powered Industry 4.0 platform for predictive maintenance, anomaly detection and intelligent decision support.",

tech:[
"AI",
"Machine Learning",
"Analytics"
],

github:"https://github.com/Dishadinesh85"

},



{
title:"Netflix Data Analysis",

description:
"Exploratory analysis to discover content trends, genres and release patterns.",

tech:[
"Python",
"Pandas",
"Visualization"
],

github:"https://github.com/Dishadinesh85"

},



{
title:"Retail Decision Support System",

description:
"Business intelligence system for analyzing sales and customer insights.",

tech:[
"SQL",
"Database",
"Power BI"
],

github:"https://github.com/Dishadinesh85"

},



{
title:"AI Text Moderation System",

description:
"NLP based system for detecting harmful and inappropriate content.",

tech:[
"NLP",
"Machine Learning",
"Python"
],

github:"https://github.com/Dishadinesh85"

}



];



return(


<section
id="projects"
className="py-32 px-6 text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">

Featured Projects

</h2>



<div className="grid md:grid-cols-2 gap-8">


{

projects.map((project,index)=>(


<motion.div

key={index}

whileHover={{scale:1.03}}

className="bg-slate-900 p-8 rounded-2xl border border-slate-700"

>


<h3 className="text-2xl font-bold mb-4">

{project.title}

</h3>



<p className="text-gray-300 mb-5">

{project.description}

</p>



<div className="flex flex-wrap gap-2">


{

project.tech.map((item)=>(

<span

key={item}

className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full"

>

{item}

</span>


))

}


</div>



<div className="flex gap-5 mt-6">


<a

href={project.github}

target="_blank"

className="flex gap-2 items-center text-blue-400"

>

<FaGithub/>

GitHub

</a>



<a

href="#"

className="flex gap-2 items-center text-blue-400"

>

<FaExternalLinkAlt/>

Demo

</a>



</div>


</motion.div>


))

}


</div>


</div>


</section>


)

}


export default Projects;