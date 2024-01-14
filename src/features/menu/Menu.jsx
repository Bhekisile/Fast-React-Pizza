import { useLoaderData } from "react-router-dom";
import { loader } from "./MenuLoader";
import MenuItem from "./MenuItem";
// import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}
 loader();

export default Menu;
