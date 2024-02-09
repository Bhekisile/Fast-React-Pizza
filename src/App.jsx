import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/MenuLoader";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/Action";
import Order from "./features/order/Order";
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import AppLayout from "./ui/AppLayout";
import OrderLoader from "./features/order/OrderLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
    loader: menuLoader,
    errorElement: <Error />,
  },
  { path: '/cart', element: <Cart /> },
  { path: '/order/new',
    element: <CreateOrder />,
    action: createOrderAction,
  },
  { path: '/order/:orderId',
    element: <Order />,
    loader: OrderLoader,
    errorElement: <Error />,
    action: UpdateOrderAction,
  },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
