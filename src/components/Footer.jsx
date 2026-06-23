function Footer(){

return(

<footer className="bg-slate-950 text-gray-400 py-8 text-center border-t border-slate-800">


<p>

© {new Date().getFullYear()} Disha Poojary.
Built with React, Tailwind CSS & AI 🚀

</p>


<div className="mt-3 space-x-5">


<a

href="https://github.com/Dishadinesh85"

target="_blank"

className="text-blue-400"

>

GitHub

</a>


<a

href="https://www.linkedin.com/in/disha-poojary-077a1b293"

target="_blank"

className="text-blue-400"

>

LinkedIn

</a>


</div>


</footer>

)

}


export default Footer;