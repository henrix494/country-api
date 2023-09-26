"use client"
import { useState,useEffect } from "react"
export default function Nav() {
const [isDarkMode,setDarkMode] = useState(false) 
const toggleDarkMode = () => {
  setDarkMode(prev => !prev);
  if (!isDarkMode) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme", "");
  }
  }
  useEffect(() => {
 if(localStorage.getItem("theme")){
  document.documentElement.classList.add('dark');
  setDarkMode(true)
 }else{
  document.documentElement.classList.remove('dark');
  setDarkMode(false)
 }
  },[])

  return (
    <nav className="h-[70px] drop-shadow-md ">
        <div className="flex justify-between px-32 max-lg:px-2 items-center h-full dark:bg-dme bg-whitee  ">
            <div >
                <h1 className=" dark:text-whitee text-[1.5rem] max-lg:text-[0.8rem] font-semibold">Where in the world?</h1>
            </div>
            <div  onClick={toggleDarkMode} className="flex items-center gap-3 cursor-pointer">
              {isDarkMode ? <svg className=" text-whitee" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>:<svg className=" text-dmBG" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"></path></svg>               
} 
                {isDarkMode ? <h4 className=" dark:text-whitee text-[0.9rem] font-this">Light Mode</h4>: <h4 className=" dark:text-whitee text-[0.9rem] font-this">Dark Mode</h4>}
                
            </div>
        </div>
    </nav>
  )
}

