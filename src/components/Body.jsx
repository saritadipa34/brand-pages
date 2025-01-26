import Button from "./Button";

const Body =()=>{
    return(
        <div className="px-24 flex justify-between">
            <div className="h-40">
            <h1 className="text-8xl font-bold ">YOUR FEET DESERVE </h1> <span><h1 className="text-8xl font-bold">THE BEST</h1></span>
            <div className="w-[70%]">
            <p className="text-small my-3"> YOUR FEET DESRVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <Button name={"Shop-Now"} className="bg-red-600 mr-5 p-1 text-white" />
            <Button name={"Category"} className="border-1 border-black p-1"/>
            </div>
            <div className="w-[80%]">
                <img className=" py-20" src="https://m.media-amazon.com/images/I/61y9sKEbAAL._AC_UY1000_.jpg" alt="shoes" />
            </div>
        </div>
    )
}
export default Body;