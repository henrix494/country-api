"use client";
import { useEffect, useState } from "react";
import { Country } from "@/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
        `https://restcountries.com/v3.1/name/${params.name}`
      );
      const json = await data.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onClickBorder = async (name: string) => {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
    const json = await data.json();
    setData(json);
    setIsLoading(false);
  };

  return (
    <div className="mt-20 max-lg:p-10 relative   ">
      {!isLoading && (
        <div
          className=" hover:opacity-80 transition-all flex max-lg:top-0 max-lg:left-8 items-center  cursor-pointer  absolute top-[-20%] left-[4.8%] dark:text-whitee dark:bg-dme px-16 py-2 drop-shadow-lg rounded-lg border-2 border-[#00000060]"
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
      )}

      {isLoading ? (
        <div className="flex w-full max-lg:flex-col  h-screen items-center  ">
          <Loading />
        </div>
      ) : (
        data?.map((item, index) => {
          const money = item.currencies?.[Object.keys(item.currencies)?.[0]];

          return (
            <div
              key={index}
              className=" flex  w-screen justify-around dark:text-whitee max-lg:flex-col max-lg:w-auto max-lg:mt-10"
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
                      Capital :{" "}
                      <span className=" font-normal">{item.capital}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className=" font-bold ">
                      Top Level Domain :{" "}
                      <span className=" font-normal pl-1">{item.tld}</span>
                    </p>
                    <p className=" font-bold">
                      Currencies :{" "}
                      <span className=" font-normal pl-1">
                        {money ? money.name : "no info"}
                      </span>
                    </p>
                    <p className=" font-bold">
                      Symbol :{" "}
                      <span className=" font-normal pl-1">
                        {money ? money.symbol : "no info"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex gap-5 flex-wrap items-center">
                  <h2>Border Countries:</h2>
                  {item.borders?.map((item: any, index: any) => {
                    return (
                      <p
                        key={index}
                        className=" hover:opacity-80 transition-all flex flex-wrap  items-center  cursor-pointer   dark:text-whitee dark:bg-dme px-16 py-2 drop-shadow-lg rounded-lg border-2 border-[#00000060]"
                        onClick={() => onClickBorder(item)}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
