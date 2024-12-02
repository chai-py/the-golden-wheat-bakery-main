import { v4 as uuidv4 } from "uuid";
import { HEADER_DETAILS } from "@/config/static-data";

export default function NavListItem() {
  const listItems = HEADER_DETAILS.navMenu.map((item) => (
    <ul key={uuidv4()}>
      <a href={item.navUrl}>{item.navText}</a>
    </ul>
  ));
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex items-center space-x-4 list-none">{listItems}</div>
    </div>
  );
}
