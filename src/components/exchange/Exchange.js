import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Exchange.css";

const Exchange = (props) => {
  return (
    <div className="container main">
      <div className="row">
        {props.bankName.map((bank, index) => (
          <div key={index} className="col-md-4">
            <div class="d-flex justify-content-center profile-card-2 ">
              <div>
                <div class="text-center mt-2">
                  <Link to={`/${index}`} state={{ bank: bank.banks }}>
                    <img
                      className="img rounded mx-auto d-block"
                      src={bank.banks.image}
                      style={{ height: "200px", width: "100%" }}
                    />
                  </Link>
                  <div className="p-3">
                    <h1
                      style={{
                        backgroundColor: "transparent",
                        color: "whitesmoke",
                        textShadow: "0px 2px 3px black",
                      }}
                    >
                      {/* {bank.banks.bankName} */}
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
