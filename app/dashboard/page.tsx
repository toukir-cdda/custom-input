import { cards } from "./data";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="bg-gray-400 h-screen pl-[250px] pt-[84px] ">
      {/* container */}
      <div className="bg-slate-50 h-full p-4 flex gap-4">
        {/* card */}
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}
