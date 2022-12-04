import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CSTEClub() {
  const [programmers, setProgrammer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/programmer/add"
      );
      setProgrammer(data?.coderList.reverse());
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h1 className="text-5xl mb-12 text-center font-bold">CSTE Club</h1>
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
              accusantium officia, eum assumenda qui quod nostrum repudiandae
              quia consectetur doloribus molestiae sit deleniti debitis hic
              ipsam itaque. Inventore, deleniti ad.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam accusantium officia, eum
              assumenda qui quod nostrum repudiandae quia consectetur doloribus
              molestiae sit deleniti debitis hic ipsam itaque. Inventore,
              deleniti ad. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam accusantium officia, eum assumenda qui quod nostrum
              repudiandae quia consectetur doloribus molestiae sit deleniti
              debitis hic ipsam itaque. Inventore, deleniti ad.Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam accusantium
              officia, eum assumenda qui quod nostrum repudiandae quia
              consectetur doloribus molestiae sit deleni
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
      <div>
        <h4 className="text-3xl font-bold text-center my-8">Top Programmer</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programmers.length > 0 ? (
            programmers.map((item, idx) => (
              <div key={idx} className="shadow-xl border">
                <div className="flex p-5 justify-evenly items-center">
                  <figure className="">
                    <div className="avatar">
                      <div className=" cpImg rounded-full">
                        <img src={item?.imgUrl} />
                      </div>
                    </div>
                  </figure>
                  <div className="items-center">
                    <h2 className=" text-xl font-bold">{item?.name}</h2>
                    <p className="font-semibold my-1">{item?.rating}</p>
                    <p className="font-semibold my-1">
                      Handle:
                      <a
                        className=" text-blue-900 font-bold"
                        href={item?.handleLink}
                      >
                        {item?.handle}
                      </a>
                    </p>
                    <p className="font-semibold my-1">Dept:{item?.dept}</p>
                    <div className="mt-2">
                      <a href={item?.fbLink}>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-blue-900 text-2xl mr-3"
                        />
                      </a>
                      <a href={item?.linkedInLink}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-sky-600 text-2xl mr-3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="card p-3 text-2xl font-bold shadow-lg">
              No Programmer List
            </h1>
          )}

          {/*<div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border">
            <div className="flex p-5 items-center py-8 ">
              <figure className="">
                <div className="avatar">
                  <div className="max-w-xs rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="items-center ml-5">
                <h2 className=" text-3xl font-bold">Lorem, ipsum dolor.</h2>
                <p className="text-2xl font-light">General Secretary</p>
                <p className="font-light mt-2">email@mail.com</p>
                <p className="font-light">+880121844444</p>
                <div className="mt-2">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-900 text-2xl mr-3"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-sky-600 text-2xl mr-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
