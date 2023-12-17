/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import NotPermitted from "./NotPermitted";
const RoleBaseRoute = (props) => {
  //có vào trang admin ko
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const profile = useSelector((state) => state.account.profile);
  const role = profile?.role?.title;
  if (isAdminRoute && role !== "Khách hàng") {
    return <>{props.children}</>;
  } else {
    return <NotPermitted></NotPermitted>;
  }
};
const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated === true && (
        <>
          <RoleBaseRoute>{props.children}</RoleBaseRoute>
        </>
      )}
      {/* {!isAuthenticated === true && (
        <>
          <Navigate to="/login" />
        </>
      )} */}
    </>
  );
};
export default ProtectedRoute;
