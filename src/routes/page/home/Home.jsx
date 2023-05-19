import HeroBanner from "./heroBanner/HeroBanner";
import Search from "./search/Search";
import HomeElonlar from "./homeElonlar/HomeElonlar";
import Advertising from "./advertising/Advertising";
const Home = ({ data, setData }) => {
  return (
    <>
      <HeroBanner />
      <Search setData={setData}/>
      <HomeElonlar data={data} />
      <Advertising />
    </>
  );
};

export default Home;
