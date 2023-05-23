import { Route } from "react-router-dom";
import Home from "./home/Home";
import Single from "./single/Single";
import About from "./about/About";
import Elon from "./elon/Elon";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Page = ({ data, setData }) => {
  return (
    <>
      <Route exact path="/">
        <Header setData={setData} />
        <Home data={data} setData={setData} />
        <Footer />
      </Route>
      <Route path="/single">
        <Header />
        <Single />
        <Footer />
      </Route>
      <Route path="/about">
        <Header />
        <About />
        <Footer />
      </Route>
      <Route path="/elon">
        <Header />
        <Elon />
        <Footer />
      </Route>
    </>
  );
};

export default Page;
