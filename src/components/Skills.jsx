import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";


function Skills(){

const skills = [

{
name:"Python",
level:90
},

{
name:"SQL",
level:85
},

{
name:"Machine Learning",
level:80
},

{
name:"Power BI",
level:85
},

{
name:"Data Visualization",
level:90
},

{
name:"Statistics",
level:80
}

];


return (

<section
id="skills"
className="py-20 px-6 text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">

Technical Skills Dashboard

</h2>



<div className="bg-slate-900 rounded-2xl p-8">


<ResponsiveContainer width="100%" height={350}>

<BarChart data={skills}>


<XAxis 
dataKey="name"
stroke="white"
/>


<YAxis 
stroke="white"
/>


<Tooltip />


<Bar

dataKey="level"

fill="#3b82f6"

radius={[10,10,0,0]}

/>


</BarChart>


</ResponsiveContainer>


</div>



<div className="grid md:grid-cols-3 gap-5 mt-10">


{
skills.map((skill)=>(


<motion.div

whileHover={{scale:1.05}}

key={skill.name}

className="bg-slate-900 p-6 rounded-xl"

>


<h3 className="text-xl font-semibold">

{skill.name}

</h3>


<p className="text-blue-400 text-3xl font-bold mt-3">

{skill.level}%

</p>


</motion.div>


))

}



</div>


</div>


</section>

)

}


export default Skills;