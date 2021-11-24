import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import NumberFormat from "react-number-format";

const BankPage = () => {
  const bank = useLocation();
  console.log(bank);
  return (
    <div className="container pt-5 text-center">
      <div className="row">
        <div className="col">
          <img
            className="img rounded mx-auto d-block"
            src={bank.state.bank.image}
            style={{ height: "300px", width: "500px" }}
          />
        </div>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Requirements</h1>
          <p class="lead">
            <div className="row pt-3">
              <div className="col-md-2">
                Bank statement:{" "}
                {bank.state.bank.bankStatement ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
              <div className="col-md-2">
                Camera:{" "}
                {bank.state.bank.camera ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
              <div className="col-md-2">
                Driver license:{" "}
                {bank.state.bank.driverLicense ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
              <div className="col-md-2">
                ID:{" "}
                {bank.state.bank.id ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
              <div className="col-md-2">
                Passport:{" "}
                {bank.state.bank.passport ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
              <div className="col-md-2">
                UB:{" "}
                {bank.state.bank.ub ? (
                  <>
                    <i style={{ color: "green" }} class="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i style={{ color: "red" }} class="fas fa-times"></i>
                  </>
                )}
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-4">
                <strong>Daily max limit deposit: </strong>
                <NumberFormat
                  value={bank.state.bank.dailyMax}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
              </div>
              <div className="col-4">
                <strong>Monthly max limit deposit: </strong>
                <NumberFormat
                  value={bank.state.bank.mounthMax}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
              </div>
              <div className="col-4">
                <strong>Maximum age limit: </strong>
                <NumberFormat
                  value={bank.state.bank.maxAge}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col">
                <a href="/" type="button" class="btn btn-secondary">
                  Back
                </a>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col">
          <small style={{ color: "gray" }}>
            you can choose between ID and Passport
          </small>
        </div>
      </div>
    </div>
  );
};

export default BankPage;
