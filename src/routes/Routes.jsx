import { Route } from "react-router-dom";
import Admin from "../admin/Admin";
import Page from "./page/Page";
const Routes = () => {
  return (
    <>
      <Page />
      <Route path="/admin">
        <Admin />
      </Route>
    </>
  );
};

export default Routes;
