"use client";
import { useState } from "react";
import Select from "react-select";
const options = [
  { value: false, label: "All" },
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },

  { value: "Oceania", label: "Oceania" },
];

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 50,
    minHeight: 35,
  }),
};
export default function Search(props: any) {
  const [region, setRegion] = useState<string | null>("");
  return (
    <div className="flex items-stretch justify-between max-lg:flex-col max-lg:gap-10  ">
      <div>
        <input
          type="text"
          className="  text-lmTEXT placeholder:text-lmTEXT w-[200%] max-lg:w-full rounded-md border-none h-[50px] dark:bg-dme dark:text-whitee dark:placeholder:text-whitee drop-shadow-md px-10"
          placeholder="Search for a country"
        />
      </div>
      <div className=" self-stretch h-[120%]">
        <Select
          onChange={(choice) =>
            props.getFilterFromC(choice ? choice.value : null)
          }
          placeholder={"Filter by Region"}
          className=" min-w-[200px] text-center dark:bg-dme"
          styles={customStyles}
          options={options}
        />
      </div>
    </div>
  );
}
