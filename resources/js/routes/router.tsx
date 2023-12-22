
import Home from "@/pages/home/Home";
import Dashboard from "@/pages/dashboard/Dashboard";
import Products from "@/pages/catalog/product/Products"
const perfix="/app";
const generateRoute=(name:string,page:any,title:string,permission?: string)=>{
    return {path:perfix+name,exact:true,page:
        {
                        component: page,
                        title: title,
        }
        ,meta:{permission:permission}};
}

const routes= [
//   {
//     path: "app",
//     // element: isLoggedIn ? <HomeComponent /> : <Navigate to="/login" />,
//     children: [
//         // to="dashboard"
//       { index: true, element: <Home  /> },
//       { path: "dashboard", element: <Home /> },
//       { path: "other", element: <Home /> }
//     ]
//   },
// { path: "/", element: <Home /> },
generateRoute('/home',Home,'Home'),
generateRoute('/dashboard',Dashboard,'Dashboard'),
generateRoute('/products',Products,'Products'),
generateRoute('/create-product',Products,'Products'),
//   { path: "*", element: <Home /> }
];

export {routes};


// import React from "react";


// const HOME = '/app/home';
// const DASHBOARD = '/app/dashboard';


// const routes = [
//     {
//         path: HOME,
//         exact: true,
//         page: {
//             component: Home,
//             title: 'Home'
//         }
//     },
//     {
//         path: DASHBOARD,
//         exact: true,
//         icon:'bi bi-people-fill',
//         page: {
//             component: Dashboard,
//             title: 'Tutorial'
//         }
//     },
   
// ];

// export {routes};
