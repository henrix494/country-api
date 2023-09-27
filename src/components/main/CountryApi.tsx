import Card from "../UI/Card";
import Image from "next/image";
import { Country } from "@/types";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Loading from "@/loading";
const baseUrl = "https://restcountries.com/v3.1/all";

export default function CountryApi(props: any) {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const fetchData = async () => {
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
  console.log(data);

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
    if (!props.filter && !props.serach) {
      return true;
    }

    if (props.serach.length > 0) {
      try {
        const regex = new RegExp(props.serach, "i"); // 'i' flag for case-insensitive search
        return regex.test(item.name.common);
      } catch (error) {
        console.error("Invalid regex pattern:", error);
        return false; // Return false if the regex pattern is invalid
      }
    } else if (props.filter) {
      return item.region.includes(props.filter);
    }
  });

  return (
    <div className="mt-10 flex flex-wrap justify-between gap-10 max-lg:justify-center">
      {isLoading ? (
        <div className="flex  w-[100%] gap-10 flex-wrap justify-center">
          <Loading />
        </div>
      ) : !props.serach && !props.filter ? (
        paginatedData.map((item, index) => (
          <Link href={`country/${item.name.common}`} key={index}>
            <Card>
              <Image
                src={item.flags.png}
                alt={item.name.common}
                className="h-[200px]"
                width={300}
                height={400}
              />
              <div className="px-6 py-10 rounded-md ">
                <p className="font-bold">{item.name.common}</p>
                <p>
                  <span>Population: </span>
                  {item.population.toLocaleString()}
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
          </Link>
        ))
      ) : (
        filteredData.map((item, index) => (
          <Link href={`country/${item.name.common}`} key={index}>
            <Card>
              <Image
                src={item.flags.png}
                alt={item.name.common}
                className="h-[200px]"
                width={300}
                height={400}
              />
              <div className="px-6 py-10 rounded-md">
                <p className="font-bold">{item.name.common}</p>
                <p>
                  <span>Population: </span>
                  {item.population.toLocaleString()}
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
          </Link>
        ))
      )}

      {paginatedData.length < data.length && <div ref={loaderDivRef} />}
    </div>
  );
}
