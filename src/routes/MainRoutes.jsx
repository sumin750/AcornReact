import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Main from 'layout/Dashboard';
import { element } from 'prop-types';
import Login from 'pages/authentication/login';
import MainCard from 'components/MainCard';

// =====


// 테스트용 
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const DashboardReservation = Loadable(lazy(() => import('pages/acorn-pages/dashboard/DashboardReservation')));

const Customer = Loadable(lazy(() => import('pages/acorn-pages/customer/Customer')));
const Member = Loadable(lazy(() => import('pages/acorn-pages/member/Member')));
const Service = Loadable(lazy(() => import('pages/acorn-pages/service/Service')));
const Reservation = Loadable(lazy(() => import('pages/acorn-pages/reservation/Reservation')));
const ProductB = Loadable(lazy(() => import('pages/acorn-pages/product/PRODUCT_B')));
const Product = Loadable(lazy(() => import('pages/acorn-pages/product/PRODUCTS')));
const Notice = Loadable(lazy(() => import('pages/acorn-pages/notice/Notice')));
// ====================


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/main/*",
      element: <Main />,
      children: [
        {
          path: "",
          element: <DashboardDefault />
        },
        {
          path: "dashboard",
          element: <DashboardDefault />
        },
        {
          path: 'customer/*',
          element: <Customer />
        },
        {
          path: 'member',
          element: <Member />
        },
        {
          path: 'service',
          element: <Service />
        },
        {
          children: [
            {
              path: "reservation",
              element: <Reservation/>
            },
            {
              path: "reservation/reservation",
              element: <Reservation/>
            },
          ]
        },
        {
          children: [
            {
              path: "productB",
              element: <ProductB/>
            },
            {
              path: "product",
              element: <Product/>
            },
          ]
        },
        {
          path: 'notice/*',
          element: <Notice />
        },
      ]
    }
  ]
};

export default MainRoutes;
