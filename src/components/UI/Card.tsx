
export default function Card(props:any) {
  return (
    <div className=" bg-whitee shadow-lg max-w-[300px] cursor-pointer hover:scale-110 transition-all">{props.children}</div>
  )
}
