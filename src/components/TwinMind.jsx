import { motion } from "framer-motion";


function TwinMind(){

const metrics=[

{
title:"Machine Health",
value:"92%",
status:"Healthy"
},

{
title:"Failure Risk",
value:"12%",
status:"Low Risk"
},

{
title:"Prediction Accuracy",
value:"94%",
status:"AI Confidence"
},

{
title:"Active Machines",
value:"128",
status:"Monitoring"
}

];


return(

<section
className="py-32 px-6 text-white"
id="twinmind"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">

🧠 TwinMind AI Intelligence Dashboard

</h2>



<p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">

An AI-powered Industry 4.0 platform that predicts failures,
detects anomalies and provides intelligent maintenance insights.

</p>



<div className="grid md:grid-cols-4 gap-6">


{

metrics.map((item,index)=>(


<motion.div

key={index}

whileHover={{scale:1.05}}

className="bg-slate-900 p-6 rounded-2xl border border-slate-700"

>


<h3 className="text-gray-400">

{item.title}

</h3>


<p className="text-4xl font-bold text-blue-400 mt-3">

{item.value}

</p>


<p className="mt-2">

{item.status}

</p>


</motion.div>


))

}


</div>




<div className="mt-12 grid md:grid-cols-2 gap-8">



<div className="bg-slate-900 rounded-2xl p-8">


<h3 className="text-2xl font-bold mb-4">

AI Prediction

</h3>


<p className="text-gray-300">

Machine M-102 shows abnormal vibration patterns.
AI predicts possible bearing failure within 5 days.

</p>


<div className="mt-5 bg-red-500/20 p-4 rounded-lg text-red-300">

⚠ Maintenance Recommended

</div>


</div>




<div className="bg-slate-900 rounded-2xl p-8">


<h3 className="text-2xl font-bold mb-4">

AI Explanation

</h3>


<ul className="text-gray-300 space-y-3">

<li>
✓ Vibration increased by 42%
</li>

<li>
✓ Temperature anomaly detected
</li>

<li>
✓ Similar pattern found in previous failures
</li>

</ul>


</div>



</div>


</div>


</section>

)


}


export default TwinMind;