"use client"
import {useState} from "react"
import Search from "./Search"
import CountryApi from "./CountryApi"
export default function Main() {
  const [filter,setFilter] = useState<string | null>('')
  const getFilterFromC = (data:string) => {
    setFilter(data)
   
  }
  return (
    <div className="px-20 pt-10 max-lg:px-0">
        <Search getFilterFromC={getFilterFromC}/>
        <CountryApi filter={filter}/>
    </div>
  )
}
