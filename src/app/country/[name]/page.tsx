"use client";
import { useEffect, useState } from "react";
import { Country } from "@/types";
interface pageProps {
  params: { name: string };
}
export default function Page({ params }: { params: { name: string } }) {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
      );
      const json = await data.json();
      setData(json);
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="mt-20 max-lg:p-10 ">
      {data.map((item, index) => {
        const curnnces = Object?.values(item.currencies)[0];
        const money = Object?.values(curnnces);
        console.log(money);
        return (
          <div
            key={index}
            className=" flex  w-screen justify-around dark:text-whitee max-lg:flex-col max-lg:w-auto"
          >
            <div className=" ml-10 max-lg:ml-0  ">
              <img
                className="w-[700px] h-[500px] max-lg:h-auto max-lg:w-[80vw] "
                key={index}
                src={item.flags.svg}
              />
            </div>
            <div className="   w-[50vw] p-14 max-lg:p-0 max-lg:w-full  max-lg:mt-10  f">
              <div>
                <h2 className=" font-bold text-2xl ">{item.name.common}</h2>
              </div>
              <div className="  mt-10 max-lg:mt-8  flex  gap-28 max-xl:flex-col max-xl:gap-10 ">
                <div className=" flex flex-col gap-2">
                  <p className="dark:text-whitee font-bold ">
                    Native Name :{" "}
                    <span className=" font-normal">{item.name.official}</span>
                  </p>
                  <p className="font-bold">
                    Population :{" "}
                    <span className=" font-normal">
                      {item.population.toLocaleString()}
                    </span>
                  </p>
                  <p className=" font-bold">
                    Region : <span className=" font-normal">{item.region}</span>
                  </p>
                  <p className=" font-bold">
                    Sub Region :{" "}
                    <span className=" font-normal">{item.subregion}</span>
                  </p>
                  <p className=" font-bold">
                    Capital <span className=" font-normal">{item.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className=" font-bold ">
                    Top Level Domain :{" "}
                    <span className=" font-normal">{item.tld}</span>
                  </p>
                  <p className=" font-bold">
                    Currencies :{" "}
                    <span className=" font-normal">{money[0]}</span>
                  </p>
                  <p className=" font-bold">
                    Symbol : <span className=" font-normal">{money[1]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
