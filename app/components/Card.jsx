import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <div className="bg-white flex flex-col gap-1 w-[370px] h-[850px] rounded-md p-4 border">
      {/* heading */}
      <div>
        <h3 className="text-[20px] font-semibold ">
          Coaching Marketplace Partners
        </h3>
        <span className="text-[14px] font-normal text-gray-500">
          Coaching Marketplace Partner Summery
        </span>
      </div>
      {/* lists */}
      <div>
        <ul className="border-gray-100 border-[1px] rounded-md h-[264px] relative divide-y divide-gray-100">
          <li className="flex items-center gap-3 px-2 py-2  border-gray-100">
            <div className="relative">
              <Image
                src="/Avatar.png"
                width={32}
                height={32}
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <li className="flex items-center gap-3 px-2 py-2  border-gray-100">
            <div className="relative">
              <img
                src="Avatar.png"
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <li className="flex items-center gap-3 px-2 py-2  border-gray-100">
            <div className="relative">
              <img
                src="Avatar.png"
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <li className="flex items-center gap-3 px-2 py-2  border-gray-100">
            <div className="relative">
              <img
                src="Avatar.png"
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <li className="flex items-center gap-3 px-2 py-2  border-gray-100">
            <div className="relative">
              <img
                src="Avatar.png"
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <li className="flex items-center gap-3 px-2 py-2 ">
            <div className="relative">
              <img
                src="Avatar.png"
                alt=""
                className="h-7 w-7 rounded-full object-cover "
              />
              <span className="absolute rounded-full h-2 w-2 bottom-1 right-1 ring-1 ring-white bg-red-600"></span>
            </div>

            <span className="text-slate-700">Leslie Alexander</span>
          </li>
          <div className="bg-gradient-to-b from-transparent via-transparent to-white  text-center py-2 rounded-md absolute bottom-0 w-full">
            <button className="rounded bg-green-50 text-green-500 py-1 px-2 text-[12px] font-medium opacity-100 m-auto flex justify-center items-center gap-2">
              <span>See All</span>
              <IoIosArrowDown />
            </button>
          </div>
        </ul>
      </div>
      {/*platform sales table */}

      <div className="relative overflow-x-auto rounded-md border-gray-100 border-[1px] ">
        <table className="w-full  text-left text-gray-500 ">
          <thead className="text-[12px] text-gray-700 capitalize bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3">
                Role
              </th>
              <th scope="col" className="px-4 py-3">
                Month
              </th>
              <th scope="col" className="px-4 py-3">
                Year
              </th>
            </tr>
          </thead>
          {/* table body  */}
          <tbody className="divide-y divide-gray-200">
            {/* table row start */}
            <tr className="bg-white  font-medium text-gray-700 text-[12px] ">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Partner
              </th>
              <td className="px-4 py-3">12</td>
              <td className="px-4 py-3">201</td>
            </tr>
            {/* table row end */}
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Members
              </th>
              <td className="px-4 py-3">240,000</td>
              <td className="px-4 py-3">200,000</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Complete Profile
              </th>
              <td className="px-4 py-3">10%</td>
              <td className="px-4 py-3">85%</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Web Traffic
              </th>
              <td className="px-4 py-3">581,000</td>
              <td className="px-4 py-3">2,000,000</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Listings Posted
              </th>
              <td className="px-4 py-3">467</td>
              <td className="px-4 py-3">5,890</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Offer Made
              </th>
              <td className="px-4 py-3">1,289</td>
              <td className="px-4 py-3">6,489</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Transactions
              </th>
              <td className="px-4 py-3">340</td>
              <td className="px-4 py-3">879</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Offer Conversion
              </th>
              <td className="px-4 py-3">27%</td>
              <td className="px-4 py-3">8%</td>
            </tr>
            <tr className="bg-white  font-medium text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3 font-medium wrap ">
                Loans Originated
              </th>
              <td className="px-4 py-3">37</td>
              <td className="px-4 py-3">267</td>
            </tr>
            {/* total */}
            <tr className="bg-white  font-semibold text-gray-700 text-[12px]">
              <th scope="row" className="px-4 py-3  wrap ">
                Total Revenue
              </th>
              <td className="px-4 py-3">$453,0000</td>
              <td className="px-4 py-3">$1,453,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
