import React, { useState } from "react";
import "./Exchange.css";

const Exchange = (props) => {
  console.log(props.bankName);
  return (
    <div className="container main">
      <div className="row">
        {props.bankName.map((bank) => (
          <div className="col-md-4">
            <div class="d-flex justify-content-center profile-card-2 ">
              <div>
                <div class="text-center mt-2">
                  <img
                    className="img-thumbnail rounded mx-auto d-block"
                    src={bank.banks.image}
                    style={{ height: "300px", width: "350px" }}
                  />
                  <div className="p-3">
                    <h1
                      style={{
                        backgroundColor: "transparent",
                        color: "whitesmoke",
                        textShadow: "0px 2px 3px black",
                      }}
                    >
                      {bank.banks.bankName}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchange;