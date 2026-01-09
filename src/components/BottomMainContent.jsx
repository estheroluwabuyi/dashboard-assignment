import MostOrderedFood from "./MostOrderedFood";
import OrderLineChart from "./OrderLineChart";
import YourRating from "./YourRating";

function BottomMainContent() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-[100px] flex">
        <YourRating />
        <MostOrderedFood />

        <OrderLineChart />
      </div>
    </div>
  );
}

export default BottomMainContent;
