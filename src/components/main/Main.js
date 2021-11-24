import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import { useSelector, useDispatch } from "react-redux";
import { setUserDeatils } from "../../redux/actions/userAction";
import Exchange from "../exchange/Exchange";
import banks from "../exchange/bankMoke";

const Main = () => {
  const [bankName, setBankName] = useState([]);
  const [loading, setLodaing] = useState(false);
  const user = useSelector((state) => state.user.payload);

  useEffect(() => {
    const name = [];
    if (user) {
      for (let index = 0; index < banks.length; index++) {
        if (
          user.dailyMax < banks[index].dailyMax &&
          user.mounthMax < banks[index].mounthMax &&
          user.age < banks[index].maxAge
        ) {
          if (
            user.checkedItems.ub ||
            user.checkedItems.camera ||
            user.checkedItems.id ||
            user.checkedItems.passport
          ) {
            name.push({
              banks: banks[index],
            });
          } else {
            name.push({
              banks: banks[index],
            });
          }
        }
      }

      if (user.resFromDE !== "none") {
        setBankName(name.filter((item) => item.banks.bankName !== "bitstamp"));
      } else {
        setBankName(name);
      }
      setLodaing(true);
    }
  }, [user]);

  return (
    <>
      <Form setUserDeatils={setUserDeatils} />
      {loading && <Exchange bankName={bankName} />}
    </>
  );
};
export default Main;
