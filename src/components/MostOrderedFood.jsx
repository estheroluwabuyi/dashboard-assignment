import SectionTitle from "./SectionTitle";

const foods = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", img: "/img/food-1.png" },
  { name: "Chicken Noodles", price: "IDR 75.000", img: "/img/food-2.png" },
  { name: "Smoothie Fruits", price: "IDR 45.000", img: "/img/food-3.png" },
  { name: "Hot Chicken Wings", price: "IDR 45.000", img: "/img/food-4.png" },
];

function MostOrderedFood() {
  return (
    <div className="w-[312px] h-[310px]">
      <SectionTitle text="Most Ordered Food" />
      <p className="text-[13px] pt-3 leading-[21px] tracking-wide text-black/50">
        Adipiscing elit, sed do eiusmod tempor
      </p>
      <div className="mt-10">
        {foods.map((food, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-50 pb-5  "
          >
            <div className="flex items-center gap-5 h-[44px]">
              <img
                src={food.img}
                alt={food.name}
                className="rounded-full w-[28px] h-[28px]"
              />
              <p className="tracking-wide leading-[20px]  text-[#273240]">
                {food.name}
              </p>
            </div>
            <p className=" text-[#273240]/70 tracking-wide leading-[20px] ">
              {food.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostOrderedFood;
