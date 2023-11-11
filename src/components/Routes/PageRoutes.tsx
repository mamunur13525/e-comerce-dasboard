import { Route, Routes, useLocation } from "react-router-dom";
import AccountsTransactions from "../../pages/AccountsTransactions/AccountsTransactions.tsx";
import ForgetPassword from "../../pages/Authentication/ForgetPassword/ForgetPassword.tsx";
import Login from "../../pages/Authentication/Login/Login.tsx";
import ResetPassword from "../../pages/Authentication/ResetPassword/ResetPassword.tsx";
import Company from "../../pages/Company/Company.tsx";
import Devices from "../../pages/Devices/Devices.tsx";
import Drivers from "../../pages/Drivers/Drivers.tsx";
import OrderDetails from "../../pages/OrderDetails/OrderDetails.tsx";
import Orders from "../../pages/Orders/Orders.tsx";
import SettingPage from "../../pages/SettingPage/SettingPage.tsx";
import Dashboard from "../../pages/dashbaord/index.tsx";
import DashboardSidebar from "../shared/DashboardSidebar/DashboardSidebar.tsx";
import Products from "../../pages/Products/Products.tsx";

const PageRoutes = () => {
  const location = useLocation();

  const routes = [
    {
      id: 1,
      path: "/dashboard",
      component: <Dashboard />
    },
    {
      id: 2,
      path: "/login",
      component: <Login />
    },
    {
      id: 3,
      path: "/forget-password",
      component: <ForgetPassword />
    },
    {
      id: 4,
      path: "/reset-password",
      component: <ResetPassword />
    },
    {
      id: 5,
      path: "/settings",
      component: <SettingPage />
    },
    {
      id: 6,
      path: "/accounts-transactions",
      component: <AccountsTransactions />
    },
    {
      id: 7,
      path: "/devices",
      component: <Devices />
    },
    {
      id: 8,
      path: "/drivers",
      component: <Drivers />
    },
    {
      id: 9,
      path: "/orders",
      component: <Orders />
    },
    {
      id: 10,
      path: "/company",
      component: <Company />
    },
    {
      id: 11,
      path: "/",
      component: <Login />
    },
    {
      id: 11,
      path: "/products",
      component: <Products />
    }
  ];

  const isSidebarOpen = [
    "/",
    "/login",
    "/forget-password",
    "/reset-password"
  ].includes(location.pathname);

  return (
    <main className="flex flex-col lg:flex-row">
      <div className={`${isSidebarOpen ? "hidden" : ""}`}>
        <DashboardSidebar />
      </div>
      <section className="w-full min-h-screen bg-gray-50">
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
          <Route path="/order/:order_id" element={<OrderDetails />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </section>
    </main>
  );
};

export default PageRoutes;
