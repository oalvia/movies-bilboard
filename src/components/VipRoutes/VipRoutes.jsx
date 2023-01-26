import { Navigate } from "react-router-dom";

const VipRoutes = ({ user, componentToRender }) => {
  if (user) return componentToRender;
  if (!user) return <Navigate to="/" />;
};
export default VipRoutes;
