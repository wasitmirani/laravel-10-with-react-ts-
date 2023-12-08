import { RouteObject } from "react-router-dom";
import Home from "@/pages/home/Home";
import Dashboard from "@/pages/dashboard/Dashboard";


const generateRoute=(name:string,el:any)=>{
    return {path:name,element:el};
}

const routes: RouteObject[] = [
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
generateRoute('/',<Home/>),
{ path: "/dashboard", element: <Dashboard /> }
//   { path: "register", element: <Home /> },
//   { path: "*", element: <Home /> }
];

export default routes;