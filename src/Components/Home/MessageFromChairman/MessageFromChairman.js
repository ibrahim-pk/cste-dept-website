import React from "react";
import style from "./MessageFromChairman.module.css";
export default function MessageFromChairman() {
  return (
    <div className={`pt-10 lg:pt-32 ${style.msg_chairman_main}`}>
      <div
        className={` px-5 gap-4 flex-col md:flex-row max-w-screen-xl mx-auto w-full flex }`}
      >
        <div className={style.msg_chairman_text}>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">
            Message from Chairman
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            deserunt vitae perspiciatis ratione quisquam, sunt porro eum
            cupiditate ex illo numquam doloribus debitis accusantium ab
            praesentium autem dolorum sit alias facilis illum quia voluptatum
            enim? Quae repellendus, aspernatur placeat nostrum fuga praesentium
            obcaecati nisi tempora totam qui fugiat rem vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            atque quis assumenda soluta reprehenderit, sit molestias nihil
            placeat cumque voluptas, iste earum maxime unde aspernatur accusamus
            impedit. Non alias porro, tempora voluptate fuga earum illo culpa
            quaerat ipsa voluptatem. Deleniti vitae, natus voluptatibus
            molestiae eum tempore sapiente quod ex deserunt.
          </p>
        </div>
        <div className="w-full mx-auto text-center">
          <img
            src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
            alt="Chairman Sir"
            className="shadow-lg p-2 w-full max-w-xs border"
          />
          <h2 className="font-semibold text-xl mt-2">Dr. Ashadun Nobi</h2>
          <p>Chairman & Professor</p>
        </div>
      </div>
    </div>
  );
}
