import { BsFillCartDashFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaCommentDots } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import {
  TbInfoSquareFilled,
  TbSettingsFilled,
  TbUserFilled,
} from "react-icons/tb";

const menu = [
  {
    title: "Dashboard",
    icon: MdInsertChart,
    active: true,
  },
  {
    title: "Food Order",
    icon: BsFillCartDashFill,
  },
  {
    title: "Manage Menu",
    icon: CgNotes,
  },
  {
    title: "Customer Review",
    icon: FaCommentDots,
  },
];

const others = [
  {
    title: "Settings",
    icon: TbSettingsFilled,
  },
  {
    title: "Payment",
    icon: RiWallet3Fill,
  },
  {
    title: "Accounts",
    icon: TbUserFilled,
  },
  {
    title: "Help",
    icon: TbInfoSquareFilled,
  },
];

export { menu, others };
