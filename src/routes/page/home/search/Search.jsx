import "./Search.css";
import { useState } from "react";
import data from "../../../../data.json";
const Search = () => {
  const [sanaValue, setSanaValue] = useState("2003-06-25");
  const [bulimValue, setBulimValue] = useState("Web dasturlash");
  const [radioValue, setRadioValue] = useState("online");
  const [surnameValue, setSurnameValue] = useState("shakhruz1");

  function bulimFunction(e) {
    setBulimValue(e.target.value);
  }
  function sanaFunction(e) {
    setSanaValue(e.target.value);
  }
  const radioFunction = (e) => {
    setRadioValue(e.target.value);
  };
  const surnameFunction = (e) => {
    setSurnameValue(e.target.value);
  };
  console.log(sanaValue);
  console.log(bulimValue);
  console.log(radioValue);
  console.log(surnameValue);

  return (
    <div className="search">
      <div className="search_container">
        <form className="search_form">
          <div className="search_form_input_div border_class">
            <input
              className="search_date_input"
              defaultValue={sanaValue}
              onChange={sanaFunction}
              type="date"
              name="date"
              required
            />
          </div>

          <div className="search_form_input_div border_class">
            <select className="search_bulim_input" onChange={bulimFunction}>
              <option value="Web dasturlash">Web dasturlash</option>
              <option value="Mobile dasturlash">Mobile dasturlash</option>
              <option value="UI/UX dizayn">UI/UX dizayn</option>
              <option value="Grafik dizayn">Grafik dizayn</option>
              <option value="Menejment">Menejment</option>
              <option value="Kredit va audit">Kredit va audit</option>
              <option value="Matematika">Matematika</option>
              <option value="Fizika">Fizika</option>
            </select>
          </div>

          <div className="search_form_input_div border_class">
            <input
              className="search_radio_input"
              type="radio"
              name="tanga"
              value="online"
              id="online"
              defaultChecked
              onChange={radioFunction}
            />
            <label className="search_radio_input" htmlFor="online">
              Online
            </label>
            <input
              className="search_radio_input"
              type="radio"
              name="tanga"
              value="offline"
              id="offline"
              onChange={radioFunction}
            />
            <label className="search_radio_input" htmlFor="offline">
              Offline
            </label>
          </div>

          <div className="search_form_input_div">
            <select className="search_bulim_input" onChange={surnameFunction}>
              {data.map((d, idx) => (
                <option key={idx} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <button className="search_form_btn" type="submit">
            Izlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;