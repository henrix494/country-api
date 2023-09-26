import Card from "../UI/Card";
import Image from "next/image";
import { Country } from "@/types";
import { useState, useEffect, useRef } from "react";

const baseUrl = "https://restcountries.com/v3.1/all";

export default function CountryApi(props:any) {
  const [data, setData] = useState<Country[]>([]);
  const [filterData,setFilterData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseUrl);
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loaderDivRef = useRef<HTMLDivElement | null>(null); // Ref for the div element

  const handleScroll = () => {
    const { current } = loaderDivRef;
    if (current) {
      const rect = current.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        loadMoreData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paginatedData = data.slice(0, currentPage * itemsPerPage);

  // Filter the data based on props.filter
  const filteredData = data.filter((item) => {
    if (!props.filter) {
      return true; // If no filter, return all items
    }
    return item.region.includes(props.filter);
  });


  return (
    <div className="mt-10 flex flex-wrap justify-between gap-10 max-lg:justify-center">
      {!props.filter ? paginatedData.map((item, index) => (
        <Card key={index}>
          <Image src={item.flags.png} alt={item.name.common} className="h-[200px]" width={300} height={400} />
          <div className="px-6 py-10 rounded-md">
            <p className="font-bold">{item.name.common}</p>
            <p>
              <span>Population: </span>
              {item.population}
            </p>
            <p>
              <span>Region: </span>
              {item.region}
            </p>
            <p>
              <span>Capital: </span>
              {item.capital}
            </p>
          </div>
        </Card>
      )):filteredData.map((item, index) => (
        <Card key={index}>
          <Image src={item.flags.png} alt={item.name.common} className="h-[200px]" width={300} height={400} />
          <div className="px-6 py-10 rounded-md">
            <p className="font-bold">{item.name.common}</p>
            <p>
              <span>Population: </span>
              {item.population}
            </p>
            <p>
              <span>Region: </span>
              {item.region}
            </p>
            <p>
              <span>Capital: </span>
              {item.capital}
            </p>
          </div>
        </Card>
      ))}
     
      {isLoading && <p className="text-[red] mt-10 text-4xl">Loading</p>}
      {paginatedData.length < data.length && (
        <div ref={loaderDivRef} />
      )}
    </div>
  );
}
