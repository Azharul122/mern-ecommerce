import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";


interface User {
  userName: string,
  email: string,
  password: string,
  role: string
}
interface props {
  isAuthenticated: boolean,
  user: User,
  children: ReactNode
}

function CheckAuth({ isAuthenticated, user, children }: props) {
  const location = useLocation();

  // console.log(location.pathname, isAuthenticated);
  const locationPath = location.pathname

  if (locationPath === "/") {

    if (user?.role === "admin") {
      return <Navigate to="dashboard/admin" />
    } else {
      return <Navigate to="/" />;
    }

  }

  if (locationPath === "/cart") {
    return <Navigate to="/login" />;
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
