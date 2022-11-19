import React from "react";
import style from "./MessageFromChairman.module.css";
export default function MessageFromChairmanDetails() {
  return (
    <div
      className={`pt-10 lg:pt-32 ${style.msg_chairman_main} max-w-screen-xl  mx-auto my-8 md:my-0  px-4`}
    >
      <div className="card w-full  bg-base-100 shadow-xl p-4 border">
        <div className="card-body ">
          <div className="block md:flex  flex-1 gap-8">
            <div className="w-full max-w-xs">
              <img
                src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
                alt="Chairman Sir"
                className="shadow-lg w-full img-fluid mt-[-80px] border p-2"
              />
              <h2 className="font-semibold text-xl lg:text-2xl mt-4">
                Dr. Ashadun Nobi
              </h2>
              <h3>Professor & Chairman</h3>
            </div>
            <div className="flex-1 w-full">
              <h2 className="card-title my-4 md:my-0">
                Messaege From Chairman
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                cum voluptate mollitia porro officia odio doloremque ducimus
                doloribus eaque? Distinctio non quisquam porro accusantium
                exercitationem, voluptatum rerum, praesentium ipsa qui
                perspiciatis cumque blanditiis tempora obcaecati repudiandae
                alias necessitatibus in ipsam ex?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis labore fugit excepturi. Praesentium porro voluptate
                temporibus soluta vitae totam voluptas, doloremque aperiam
                dolore dolores tenetur laudantium exercitationem nisi placeat
                ducimus. Sed nesciunt nam, reiciendis illum voluptates hic
                necessitatibus quos sequi harum repellat omnis libero odit
                iusto? Aliquam ex repudiandae odio sequi. Vero enim, animi sunt
                magni deserunt ipsam temporibus soluta quos nostrum eveniet
                amet, architecto veritatis ipsa aut corporis! Dicta non,
                cupiditate explicabo numquam impedit rerum nam, vel animi ad
                incidunt earum facilis. Quasi quis, pariatur atque sequi optio
                illum voluptatem eligendi. Ullam quod deleniti saepe aliquam
                accusantium expedita officia sed. Molestias quae repellendus
                maiores corporis cupiditate, est possimus tempora, dignissimos
                iusto modi blanditiis aperiam, dicta quos. Voluptate, eius
                consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
