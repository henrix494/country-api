"use client"
import Nav from "@/components/nav/Nav"
import Main from "@/components/main/Main"
export default function Home() {
 const scrollToFunc= () =>{
  scrollTo(0,0)
 } 
  return (
    <main className=" relative mt-20" >
      
      <Main/>
      <div onClick={scrollToFunc} className=" fixed right-5 bottom-10 dark:text-whitee max-lg:right-2 max-lg:bottom-2 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg></div>
    </main>
  )
}
