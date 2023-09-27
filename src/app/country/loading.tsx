import "./loading.css";
export default function Loading() {
  return (
    <div className="flex justify-around w-screen    ">
      <div className="item w-full  ">
        <div className="animated-background rect1"></div>
      </div>{" "}
      <div className="item2 w-[500px] ">
        <div className="animated-background round-box"></div>
        <div className="animated-background rect1"></div>
        <div className="animated-background rect2"></div>
        <div className="animated-background rect3"></div>
        <div className="animated-background rect4"></div>
        <div className="animated-background rect5"></div>
      </div>{" "}
    </div>
  );
}
