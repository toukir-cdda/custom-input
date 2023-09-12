import {
  AiOutlineArrowDown,
  AiOutlineEye,
  AiOutlineClockCircle,
} from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="bg-gray-400 h-screen pl-[250px] pt-[84px] ">
      {/* container */}
      <div className="bg-slate-50 h-full p-4 ">
        {/* card */}
        {/* {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))} */}
        <div className="bg-white rounded-md h-full shadow-md p-6 flex flex-col gap-6">
          {/* header  */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Transaction Activity</h3>
            <span className="text-sm font-normal text-gray-600">
              This page contains all of Transaction Activity
            </span>
          </div>
          <hr />
          {/* transaction table  */}

          <div className="relative overflow-x-scroll rounded-md border-gray-100 border-[1px] ">
            <table className="w-full text-left text-gray-500 ">
              {/* table header  */}
              <thead className=" text-[12px] text-gray-700 capitalize bg-gray-100  ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex gap-1 items-center text-xs font-normal text-gray-500">
                      <span>Offer Date & ID</span>
                      <AiOutlineArrowDown />
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Status
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Property Address
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Offer Amount
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Seller
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Buyer
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="text-xs font-normal text-gray-500">
                      Action
                    </span>
                  </th>
                </tr>
              </thead>
              {/* table body  */}
              <tbody className="divide-y divide-gray-200">
                {/* table row start */}
                {Array(7)
                  .fill(0)
                  .map((_, index) => (
                    <tr className="bg-white  font-medium text-gray-700 text-[12px] ">
                      <td
                        key={index}
                        scope="row"
                        className="px-4 py-3 font-medium whitespace-nowrap "
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            PS-2023-05-269877
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            Jan 6, 2023
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {/* <span className="rounded-xl text-xs bg-orange-200 px-2 py-0.5 text-orange-500">
                          Pending
                        </span> */}
                        {/* <span className="rounded-xl text-xs bg-red-100 px-2 py-0.5 text-red-500">
                          Rejected
                        </span> */}
                        {/* <span className="rounded-xl text-xs bg-green-100 px-2 py-0.5 text-green-600">
                          Accepted
                        </span> */}
                        <div className="flex items-center gap-1 rounded-xl text-xs bg-gray-100 px-2 py-0.5 text-gray-700">
                          <AiOutlineClockCircle />
                          <span>48hr hold</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm font-medium">
                          1901 Thornridge Cir. Shiloh, Hawaii 81063
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm font-medium">$900.00</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            Wade Warren
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            wadewarren@property.app
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            (205) 555-0100
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            Wade Warren
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            wadewarren@property.app
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            (205) 555-0100
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-normal text-gray-500">
                            Lest View Date 09-11-23
                          </span>
                          <button className="flex items-center justify-center py-2 gap-1 rounded-md bg-teal-700 text-white">
                            <AiOutlineEye />
                            <span className="text-xs font-normal">
                              View Details
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
