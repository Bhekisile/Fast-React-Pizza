import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/MenuLoader";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import Order from "./features/order/Order";
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
    OrderLoader,
    errorElement: <Error />,
  },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
