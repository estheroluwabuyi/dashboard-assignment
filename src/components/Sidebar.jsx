import { menu, others } from "../data/sidebar-data";

function Sidebar() {
  return (
    <aside className="w-60 min-h-240 bg-gray-light">
      {/* Logo */}
      <div className="py-5 pl-10 pr-5 leading-normal flex items-center gap-3 ">
        <div className="w-6 h-6 rounded-full bg-purple text-white flex items-center justify-center text-[11px]">
          G
        </div>
        <h1 className="text-purple text-[11px] tracking-wide font-bold">
          GOODFOOD
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="">
        <div>
          <h2 className="text-[11px] tracking-[1px] leading-normal text-[#082431]/50 pl-10 py-3 pt-8">
            MENU
          </h2>

          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="px-5 flex flex-col justify-center cursor-pointer group"
              >
                <div
                  className={`font-medium flex items-center gap-3 w-50 pl-5 py-3 transition-all duration-200
          ${
            item.active
              ? "text-purple bg-[#707FDD]/10 rounded-[5px]"
              : "text-[#273240] hover:text-purple hover:bg-[#707FDD]/10 hover:rounded-[5px]"
          }`}
                >
                  <Icon
                    size={18}
                    className={`${
                      item.active
                        ? "text-purple"
                        : "text-[#A6ABC8] group-hover:text-purple"
                    }`}
                  />
                  <span className="leading-3">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="text-[11px] tracking-[1px] leading-normal text-[#082431]/50 pl-10 py-3 pt-8">
            OTHERS
          </h2>
          {others.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="px-5 flex flex-col justify-center cursor-pointer group"
              >
                <div
                  className={`font-medium flex items-center gap-3 w-50 pl-5 py-3 transition-all duration-200
          ${
            item.active
              ? "text-purple bg-[#707FDD]/10 rounded-[5px]"
              : "text-[#273240] hover:text-purple hover:bg-[#707FDD]/10 hover:rounded-[5px]"
          }`}
                >
                  <Icon
                    size={18}
                    className={`${
                      item.active
                        ? "text-purple"
                        : "text-[#A6ABC8] group-hover:text-purple"
                    }`}
                  />
                  <span className="leading-3">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
{
  /* {menu.map((item, index) => (
          <div key={index}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
        {others.map((item, index) => (
          <div key={index}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))} */
}
