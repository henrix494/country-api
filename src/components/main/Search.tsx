"use client"
import Select from 'react-select'
const options = [
   
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 50,
    minHeight: 35,
    
  })
};
export default function Search() {
  return (
    <div className='flex items-stretch justify-between  '>
        <div>
            <input type="text" className="  text-lmTEXT placeholder:text-lmTEXT w-[200%] rounded-md border-none h-[50px] dark:bg-dme dark:text-whitee dark:placeholder:text-whitee drop-shadow-md px-10" placeholder='Search for a country' />
        </div>
        <div className=' self-stretch h-[120%]' >
            <Select placeholder={"Filter by Region" } className=' min-w-[200px] text-center dark:bg-dme'  styles={customStyles}  options={options} />
        </div>
    </div>
  )
}
