import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1440px] h-[800px] bg-white">
  <div className="w-[1120px] flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-6 h-[25.721893310546875px]"></div>
      <span className="font-semibold text-[16px] leading-[9.375%] text-[#1572d3]">RENTCARS</span>
    </div>
    <div className="flex justify-center items-center gap-10">
      <span className="font-medium text-[16px] leading-[9.375%] text-[#484848]">Become a renter</span>
      <span className="font-medium text-[16px] leading-[9.375%] text-[#484848]">Rental deals</span>
      <span className="font-medium text-[16px] leading-[9.375%] text-[#484848]">How it work</span>
      <span className="font-medium text-[16px] leading-[9.375%] text-[#484848]">Why choose us</span>
    </div>
    <div className="flex items-center gap-6">
      <span className="font-medium text-[16px] leading-[9.375%] text-[#484848]">Sign in</span>
      <div className="flex justify-center items-center gap-2 bg-[#1572d3] px-8 py-4 rounded-lg">
        <span className="font-medium text-[16px] leading-[9.375%] text-white">Sign up</span>
      </div>
    </div>
  </div>
  <div className="w-[803px] h-[866px] opacity-[0.13]"></div>
  <div className="w-[1120px] flex items-center gap-[50px] bg-white pl-8 pr-3 pt-3 pb-3 rounded-xl">
    <div className="flex items-center gap-4 grow">
      <div className="w-8 h-8"></div>
      <div className="h-[37px] w-[278px] flex flex-col gap-3">
        <span className="font-medium text-[16px] leading-[9.375%] text-[#3e3e3e]">Location</span>
        <span className="font-normal text-[14px] leading-[10.714285714285714%] text-[#b6b6b6]">Search your location</span>
      </div>
    </div>
    <div className="flex items-center gap-4 grow pl-6 border-solid border-[#acacac]">
      <div className="w-8 h-8"></div>
      <div className="h-[37px] w-[183px] flex flex-col gap-3">
        <span className="font-medium text-[16px] leading-[9.375%] text-[#3e3e3e]">Pickup date</span>
        <span className="font-normal text-[14px] leading-[10.714285714285714%] text-[#b6b6b6]">Tue 15 Feb, 09:00</span>
      </div>
    </div>
    <div className="flex items-center gap-4 grow h-[37px] pl-6 border-solid border-[#acacac]">
      <div className="w-8 h-8"></div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-[16px] leading-[9.375%] text-[#3e3e3e]">Return date</span>
        <span className="font-normal text-[14px] leading-[10.714285714285714%] text-[#b6b6b6]">Thu 16 Feb, 11:00</span>
      </div>
    </div>
    <div className="w-[159px] h-12 flex justify-center items-center gap-2 bg-[#1572d3] p-2 rounded-lg">
      <span className="font-medium text-[16px] leading-[9.375%] text-white">Search</span>
    </div>
  </div>
</div>
)}
