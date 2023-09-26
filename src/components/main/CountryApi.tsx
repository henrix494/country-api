"use client"
import Card from "../UI/Card"
import Image from "next/image"
import { Country } from "@/types"
import { useState,useEffect, Suspense } from "react"
const baseUrl = "https://restcountries.com/v3.1/all"
export default function CountryApi() {
    const [data,setData] = useState<Country[]>([]); 
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
       const getData = async ()  => {
          
            const firstData = await fetch(baseUrl)
            const json = await firstData.json()
            setData(json )
            setIsLoading(false)
            
       }
       
       getData()
      
    },[])
    console.log(data)
  return (
    <div className="mt-10   flex flex-wrap justify-between gap-10 ">
         {isLoading ? <p className=" text-[red] mt-10 text-4xl">Loading</p>:     data.map(item => {
        return (
            <>
           
            <Card>
            <Image src={item.flags.png} alt={item.name.common} className=" h-[200px]" width={300} height={400} />
            <div className=" px-6 py-10 rounded-md  "> 
                <p className=" font-bold"> {item.name.common}</p>
                <p> <span>population: </span>{item.population}</p>
                <p>{item.region}</p>
                <p>{item.capital}</p>
            </div>
            </Card>
             
        
        </>)
      })}
 
      
    </div>
    
  )
}
