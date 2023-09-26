"use client"
import { useEffect,useState } from "react";
import { Country } from "@/types";
interface pageProps {
  params: { name: string };
}
export default function Page({ params }: { params: { name: string } }) {
  const [data,setData] = useState<Country[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      const json = await data.json()
      setData(json)
    }
    fetchData()
  },[])
  console.log(data)
  return (  
     <div className="mt-20"> 
{data.map(((item,index) => {
  return (<img key={index} src={item.flags.png} />)
}))}
    </div>
    )
  
   
}
