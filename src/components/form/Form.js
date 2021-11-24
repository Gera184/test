import React, { useState, useEffect } from "react";
import Checkbox from "../checkbox/CheckBox";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form(props) {
  const [age, setAge] = useState(30);
  const [resFromDE, setResFromDE] = useState("sparkasse");
  const [country, setCountry] = useState("germany");
  const [gender, setGender] = useState("male");
  const [mounthMax, setMounthMax] = useState(2000);
  const [dailyMax, setDailyMax] = useState(2000);
  const [checkedItems, setCheckedItems] = useState({});
  const dispatch = useDispatch();

  const SubmitHundler = (e) => {
    e.preventDefault();
    dispatch(
      props.setUserDeatils({
        age: age,
        resFromDE: resFromDE,
        country: country,
        gender: gender,
        mounthMax: mounthMax,
        dailyMax: dailyMax,
        checkedItems: checkedItems,
      })
    );
    setAge(30);
    setResFromDE("sparkasse");
    setCountry("germany");
    setGender("male");
    setMounthMax(2000);
    setDailyMax(2000);
    setCheckedItems({});
  };

  return (
    <div class="container-fluid px-1 py-5 mx-auto body">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Vlookup</h3>
          <p class="blue-text">
            Just answer a few questions
            <br /> so that we can personalize the right Exchange for you.
          </p>
          <div class="card">
            <h5 class="text-center mb-4">Powering world-class companies</h5>
            <form
              class="form-card"
              onsubmit="event.preventDefault()"
              onSubmit={SubmitHundler}
            >
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Restriction from DE bank<span class="text-danger"> *</span>
                  </label>{" "}
                  <select
                    value={resFromDE}
                    onChange={(e) => {
                      setResFromDE(e.target.value);
                    }}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="sparkasse">Sparkasse</option>
                    <option value="ing">ING</option>
                    <option value="dkb">DKB</option>
                    <option value="raifeisenbank">Raifeisenbank</option>
                    <option value="waiserbank">Waiserbank</option>
                    <option value="none">None of the above</option>
                  </select>{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Country<span class="text-danger"> *</span>
                  </label>{" "}
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="germany">Germany</option>
                    <option value="austria">Austria</option>
                  </select>{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Monthly deposit amount<span class="text-danger"> *</span>
                  </label>{" "}
                  <select
                    value={mounthMax}
                    onChange={(e) => {
                      setMounthMax(e.target.value);
                    }}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="2000">2,000</option>
                    <option value="20000">20,000</option>
                    <option value="50000">50,000</option>
                    <option value="100000">100,000</option>
                    <option value="500000">500,000</option>
                  </select>{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    First deposit amount <span class="text-danger"> *</span>
                  </label>{" "}
                  <select
                    value={dailyMax}
                    onChange={(e) => {
                      setDailyMax(e.target.value);
                    }}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="2000">2,000</option>
                    <option value="10000">10,000</option>
                    <option value="20000">20,000</option>
                    <option value="30000">30,000</option>
                    <option value="50000">50,000</option>
                  </select>{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Gender<span class="text-danger"> *</span>
                  </label>{" "}
                  <select
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                {" "}
                <label class="form-control-label px-3">
                  Age: {age}
                  <span class="text-danger"> *</span>
                </label>{" "}
                <input
                  type="range"
                  min="30"
                  max="100"
                  step="1"
                  value={age}
                  onChange={({ target: { value: age } }) => {
                    setAge(age);
                  }}
                />
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <Checkbox
                    setCheckedItems={setCheckedItems}
                    checkedItems={checkedItems}
                  />
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="form-group col-sm-6">
                  {" "}
                  <button type="submit" class="btn-block btn-primary">
                    Send
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
