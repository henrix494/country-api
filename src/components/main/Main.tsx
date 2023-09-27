"use client";
import { useState } from "react";
import Search from "./Search";
import CountryApi from "./CountryApi";
export default function Main() {
  const [filter, setFilter] = useState<string | null>("");
  const [serach, setSerach] = useState<string | null>("");
  const getFilterFromC = (data: string) => {
    setFilter(data);
  };
  const getSearchFromC = (data: string) => {
    setSerach(data);
  };
  return (
    <div className="px-20 pt-10 max-lg:px-0">
      <Search getFilterFromC={getFilterFromC} getSearchFromC={getSearchFromC} />
      <CountryApi filter={filter} serach={serach} />
    </div>
  );
}
