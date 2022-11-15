import React from "react";

export default function TeacherDetails({ name }) {
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <div>
        <div className="my-2 flex-col md:flex-row flex gap-4 justify-center items-center mb-8 border-b pb-8">
          <div>
            <img
              src="https://static.just.edu.bd/public/ca_1567062004043_genesys.jpg"
              alt="Shoes"
              className="max-w-sm border p-2 shadow-md"
            />
          </div>
          <div>
            <h2 className="card-title text-2xl">Dr. Ashadun Nobi</h2>
            <h3 className="">Chairman and Professor</h3>
            <p>Joined 01/01/2006 to Present</p>

            <h4 className="font-semibold mt-4">Contact info</h4>
            <a classname="block" href="mailto:mail@.com">
              sirname@mail.com
            </a>
            <p>0123456789</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-4">Biography</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod
            blanditiis repellendus laudantium, consectetur nam quibusdam cumque
            voluptatibus exercitationem dolorem cum aperiam, laborum optio
            cupiditate! Ut et mollitia voluptate alias omnis deserunt voluptatum
            rem sapiente. Iure fugit tenetur provident sit tempore aperiam at
            temporibus modi, maiores delectus obcaecati quasi porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod
            blanditiis repellendus laudantium, consectetur nam quibusdam cumque
            voluptatibus exercitationem dolorem cum aperiam, laborum optio
            cupiditate! Ut et mollitia voluptate alias omnis deserunt voluptatum
            rem sapiente. Iure fugit tenetur provident sit tempore aperiam at
            temporibus modi, maiores delectus obcaecati quasi porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod
            blanditiis repellendus laudantium, consectetur nam quibusdam cumque
            voluptatibus exercitationem dolorem cum aperiam, laborum optio
            cupiditate! Ut et mollitia voluptate alias omnis deserunt voluptatum
            rem sapiente. Iure fugit tenetur provident sit tempore aperiam at
            temporibus modi, maiores delectus obcaecati quasi porro!
          </p>
          <h4 className="font-semibold mt-5">Recharch Papers</h4>
          <ul className="list-decimal px-4">
            <li>
              <a href="#">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                tempore! with
              </a>
            </li>
            <li>
              <a href="#">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                tempore! with
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
