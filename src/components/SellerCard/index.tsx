import RatingStar from "../RatingStar";

export default function SellerCard() {
    return (
        <div className="bg-[#192843] mt-4 sm:flex items-center  sm:px-9 py-6 mx-2 md:mx-9 rounded-md">

        
        <div className="ml-4 flex-1 flex-col sm:flex-row flex items-center justify-between">
            <div className="flex flex-row items-center">
            <img className="mr-4 w-16 h-16" src="https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/1e226881-91c9-441e-4436-b93a76afac00/avatar" alt="Logo" />
            <div className="mx-1">           <span className=" rounded-sm bg-[#5f40e514] px-2 text-[#5F40E5]">Pro</span>
                <p className="text-gray-500 text-sm">Providing customer services since October 2021</p></div>
     
            </div>

            <div className="flex md:flex-col justify-between items-center sm:border-l sm:border-l-gray-600 px-8 py-2">
            <p className="text-white text-sm mx-2">Product Quality</p>
            <div className="flex items-center justify-center"><span className="text-lg text-white mr-2">5</span> <RatingStar/><RatingStar/><RatingStar/><RatingStar/><RatingStar/> <span className="text-white text-xs">- 53 reviews</span> </div>
            </div>
        </div>
        </div>
    )
}