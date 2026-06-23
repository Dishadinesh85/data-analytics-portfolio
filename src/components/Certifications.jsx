import { motion } from "framer-motion";

function Certifications(){

const certificates = [

{
title:"NPTEL Certification",
desc:"Completed technical coursework and academic learning."
},

{
title:"Data Analytics Certification",
desc:"Skills in data analysis, visualization and insights."
},

{
title:"AI & Machine Learning",
desc:"Learning intelligent systems and predictive models."
}

];


return (

<section className="py-32 px-6 text-white">

<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">
🏆 Certifications
</h2>


<div className="grid md:grid-cols-3 gap-6">


{certificates.map((cert,index)=>(

<motion.div

key={index}

whileHover={{scale:1.05}}

className="bg-slate-900 p-6 rounded-2xl border border-slate-700"

>


<h3 className="text-xl font-bold text-blue-400">

{cert.title}

</h3>


<p className="text-gray-300 mt-3">

{cert.desc}

</p>


</motion.div>


))}


</div>


</div>


</section>

)

}


export default Certifications;