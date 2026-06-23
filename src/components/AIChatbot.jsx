import { useState } from "react";


function AIChatbot(){


const [open,setOpen]=useState(false);

const [message,setMessage]=useState("");

const [chat,setChat]=useState([]);



const sendMessage=()=>{


if(!message) return;


setChat([

...chat,

{
user:message,

bot:
"Thanks for asking! Disha has experience in Data Analytics, AI, Machine Learning and projects like TwinMind AI, Netflix Analysis and AI Text Moderation System."

}

]);


setMessage("");

};



return(


<>

<button

onClick={()=>setOpen(!open)}

className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl"

>

🤖

</button>



{

open &&

<div className="fixed bottom-20 right-6 w-80 bg-slate-900 text-white rounded-xl p-5 shadow-2xl">


<h3 className="font-bold text-xl mb-4">

AI Recruiter Assistant

</h3>



<div className="h-60 overflow-y-auto space-y-3">


{

chat.map((c,index)=>(


<div key={index}>


<p className="text-blue-400">

You: {c.user}

</p>


<p className="text-gray-300">

AI: {c.bot}

</p>


</div>


))

}


</div>




<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask about my skills..."

className="w-full mt-4 p-2 rounded text-black"

/>



<button

onClick={sendMessage}

className="mt-3 bg-blue-600 px-4 py-2 rounded"

>

Send

</button>



</div>


}


</>


)

}


export default AIChatbot;