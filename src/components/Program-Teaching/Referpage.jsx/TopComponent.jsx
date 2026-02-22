import logo from "../../../assets/images/logo.png";
const TopComponent = ({ data }) => {
  return (
    <div className=" p-10 flex flex-col gap-y-10 ">
      <h1 className="text-2xl font-bold mb-5">{data.heading}</h1>
      <span>{data.subheading}</span>

      <div className=" relative flex justify-center items-center">
        <img
          src={data.backgroundimage}
          className=" object-cover w-[80%] h-96"
        ></img>
      </div>
   <div>
     {data.child()}
   </div>
      
    </div>
  );
};

export default TopComponent;
