import Routes from "./routes/Routes";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <>
      <Routes data={data} setData={setData} />
    </>
  );
}

export default App;
