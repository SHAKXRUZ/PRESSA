import { Route } from "react-router-dom";
import Admin from "../admin/Admin";
import Page from "./page/Page";
const Routes = ({ data, setData }) => {

  return (
    <>
      <Page data={data} setData={setData} />
      <Route path="/admin">
        <Admin />
      </Route>
    </>
  );
};

export default Routes;
