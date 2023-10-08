import React from "react";
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import { Link,Navigate } from 'react-router-dom';
import Signup from "../pages/signup";

const Header = ()=>{
    var  body = "sign-up"
    var url = "";
    

    const[path , setpath]= useState()
    const [page,setpage] = useState(window.location.pathname);
    const pathchange = ()=>{
        setpage(window.location.pathname);
    }
   
    var attr1 = "flex  max-md:hidden mr-10";
    var attr2 = "";

    
    if(page === "/sign-up"){
        body = "sign-in";
        url = "/sign-in";
    }
    if(page === "/sign-in"){
        body = "sign-up";
        url = "/sign-up";
    }
        

    const [headerstate,headersetstate] = useState((0));
    const todown = ()=>{
        if(headerstate === 0)
            headersetstate(1);
        if(headerstate === 1)
            headersetstate(0);
    }
    if(headerstate === 1){
        attr1 = "absolute mt-10 bg-orange-300 text-center w-full "
        attr2 = "my-3"
    }
    return(

        
        <div className="bg-orange-300 py-5 px-0 flex justify-between">
            <h3 className="text-xl font-bold text-slate-900 ml-10 ">SimpleWebsite</h3>
            <FaList onClick={todown} className="md:hidden cursor-pointer align-middle mt-2 mr-10" />
            <ul className={` ${attr1} `}>
                <li className={`mx-4 text-xm font-bold text-slate-700 align-middle hover:underline cursor-pointer ${attr2}`}>about</li>
                <li onClick={pathchange} className={`mx-4 text-xm font-bold text-slate-700 align-middle hover:underline cursor-pointer ${attr2}`}><Link to= {url}>{body}</Link></li>       
                <li className={`mx-4 text-xm font-bold text-slate-700 align-middle hover:underline cursor-pointer ${attr2}`}>home</li>
            </ul>
        </div>
    )
}


export default Header