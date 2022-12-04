import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./MessageFromChairman.module.css";
import axios from "axios";
export default function MessageFromChairman() {
  const [sms, setSms] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { data } = await axios.get(
        "http://localhost:5000/api/chairman/sms"
      );
      setSms(data?.sms.reverse());
      setLoader(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loader ? (
        <div>Loading...</div>
      ) : (
        <div
          className={`pt-10 lg:pt-32 ${style.msg_chairman_main} max-w-screen-xl  mx-auto my-8 md:my-0  px-4`}
        >
          <div className="card w-full  bg-base-100 shadow-xl p-4 border">
            <div className="card-body ">
              <div className="block md:flex  flex-1 gap-8">
                <div className="w-full max-w-xs">
                  <img
                    src={sms[0]?.imgUrl}
                    alt="Chairman Sir"
                    className="shadow-lg w-full img-fluid mt-[-80px] border p-2"
                  />
                  <h2 className="font-semibold text-xl lg:text-2xl mt-4">
                    {sms[0]?.name}
                  </h2>
                  <h3>{sms[0]?.role}</h3>
                </div>
                <div className="flex-1 w-full">
                  <h2 className="card-title my-4 md:my-0">
                    Messaege From Chairman
                  </h2>
                  <p className="mt-4">{sms[0]?.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
