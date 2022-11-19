import React from "react";
import { Link } from "react-router-dom";

export default function CSTEClubHome() {
  return (
    <div className="m-full mx-auto my-8 px-4 max-w-screen-xl ">
      <div className="flex flex-col md:flex-row bg-base-100 shadow-xl border items-center">
        <figure className="p-2">
          <img
            src="https://placeimg.com/400/400/arch"
            alt="Album"
            className="img-fluid w-full border p-2"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-2xl">CSTE Club!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            accusantium officia, eum assumenda qui quod nostrum repudiandae quia
            consectetur doloribus molestiae sit deleniti debitis hic ipsam
            itaque. Inventore, deleniti ad.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam accusantium officia, eum
            assumenda qui quod nostrum repudiandae quia consectetur doloribus
            molestiae sit deleniti debitis hic ipsam itaque. Inventore, deleniti
            ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam accusantium officia, eum assumenda qui quod nostrum
            repudiandae quia consectetur doloribus molestiae sit deleniti
            debitis hic ipsam itaque. Inventore, deleniti ad.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam accusantium officia,
            eum assumenda qui quod nostrum repudiandae quia consectetur
            doloribus molestiae sit deleni
          </p>
          <div className="card-actions justify-end">
            <Link
              to="/csteclub"
              className="btn btn-outline btn-sm hover:bg-blue-900"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
