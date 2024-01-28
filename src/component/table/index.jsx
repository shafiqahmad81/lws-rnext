import Profile from "../../assets/avatar.png";
import TableHeader from "../table-header";
export default function Table() {
  return (
    <>
      <table className="w-full">
        <TableHeader />
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class One
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>

          {/* class two */}
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Two
            </td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">1</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">2</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">3</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={Profile}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">John Smith</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">A+</td>
            <td className="p-5 text-sm md:text-xl text-center">98%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
