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

      <div className="mt-10 flex flex-col gap-4">
        {foods.map((food, i) => (
          <div
            key={i}
            className="flex items-center justify-between pb-5 border-b border-[#F8F9FB] last:border-0"
          >

       
            <div className="flex items-center gap-3">
              <div className="w-[28px] h-[28px] rounded-full overflow-hidden shadow-sm border border-[#DBE5EB]/80">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

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
