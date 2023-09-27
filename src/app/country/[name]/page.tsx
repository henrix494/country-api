"use client";
import { useEffect, useState } from "react";
import { Country } from "@/types";
import { useRouter } from "next/navigation";

import Loading from "../loading";
interface pageProps {
  params: { name: string };
}

export default function Page({ params }: { params: { name: string } }) {
  const router = useRouter();

  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
      );
      const json = await data.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-20 max-lg:p-10 relative   ">
      <div
        className="flex items-center  cursor-pointer  absolute top-[-20%] left-[4.8%] dark:text-whitee dark:bg-dme px-16 py-2 drop-shadow-lg rounded-lg border-2 border-[#00000060]"
        onClick={() => router.back()}
      >
        <svg
          className="mr-2"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
        </svg>
        <button>Back</button>
      </div>
      {isLoading ? (
        <div className="flex w-full  h-screen items-center ">
          <Loading />
        </div>
      ) : (
        data.map((item, index) => {
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
                      Region :{" "}
                      <span className=" font-normal">{item.region}</span>
                    </p>
                    <p className=" font-bold">
                      Sub Region :{" "}
                      <span className=" font-normal">{item.subregion}</span>
                    </p>
                    <p className=" font-bold">
                      Capital{" "}
                      <span className=" font-normal">{item.capital}</span>
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
        })
      )}
    </div>
  );
}
