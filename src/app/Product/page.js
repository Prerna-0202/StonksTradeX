"use client";
import useRequest from "../../hooks/useRequest";
import LineChart from "../../Components/LineChart";

const page = () => {
  const { data, isLoading } = useRequest("OVERVIEW", {
    symbol: 'IBM',
  });
  if (isLoading) {
    return (
      <div className="text-center mt-8">
        <div className="animate-ping absolute inline-block h-12 w-12 rounded-full bg-blue-500 opacity-75"></div>
        <div className="relative inline-block h-12 w-12 rounded-full border-t-4 border-r-4 border-b-4 border-blue-500"></div>
        <div className="mt-4 text-lg text-blue-500 font-semibold">
          Loading...
        </div>
      </div>
    );
  }
  if (!data) {
    return "No data found";
  }
  const companyData = data;
  return (
    <>
      <div className="p-1 gap-4">

        {/* Name and Symbol */}
        <div className="h-1/6 flex justify-between">
          <div>
            <div className="flex-1 font-extrabold text-xl lg:text-3xl">
              {companyData.Name}
            </div>
            <div className="flex-1 font-semibold lg:font-bold">
              {companyData.Exchange},{companyData.AssetType}
            </div>
            <div className="flex-1 font-semibold lg:font-bold">
              {companyData.Currency}
            </div>
          </div>
          <div>
            <div className="flex-1 font-medium lg:font-bold lg:text-xl">
              $ {companyData.BookValue}
            </div>
            <div className="flex-1 text-green-600 font-medium lg:font-bold lg:text-xl">
              {" "}
              +{companyData.EPS}%
            </div>
          </div>
        </div>

        {/* Line Graph */}
        <LineChart />

        {/* About  */}
        <div className="h-1/2 border border-gray-800 py-2">
          <h1 className="font-bold text-xl px-2 lg:text-2xl">
            About {companyData.Name}{" "}
          </h1>
          <hr className="" />
          <p className="text-sm px-2  lg:text-xl justify-center font-bold rounded-md bg-[#a7952b]">
            {companyData.Description}
          </p>
          <div className="flex lg:gap-5 py-4 lg:px-4 md:px-2 md:gap-3 sm:gap-2">
            <div className="text-sm font-semibold border rounded-full p-1 bg-yellow-600  lg:text-xl lg:p-4">
              Industry: {companyData.Industry}{" "}
            </div>
            <div className="text-sm font-semibold border rounded-full p-1 bg-yellow-600 lg:text-xl lg:p-4">
              Sector: {companyData.Sector}
            </div>
          </div>
          <div className="flex flex-col px-2 lg:flex-row lg:gap-10 ">
            <div className="lg:text-xl">
              <span className="font-bold ">Market Capitalization:</span>{" "}
              {companyData.MarketCapitalization}{" "}
            </div>
            <div className="lg:text-xl">
              <span className="font-bold">P/E Ratio:</span>{" "}
              {companyData.PERatio}{" "}
            </div>
            <div className="lg:text-xl">
              <span className="font-bold">Beta: </span> {companyData.PERatio}{" "}
            </div>
            <div className="lg:text-xl">
              <span className="font-bold">Dividend Yield:</span>{" "}
              {companyData.DividendYield}{" "}
            </div>
            <div className="lg:text-xl">
              <span className="font-bold">Profit Margin: </span>
              {companyData.ProfitMargin}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
