import Membership from "../../molecules/membership";
import "./index.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const PriceList = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const d = document.querySelectorAll(".row-price-list");

    console.log(d[0].clientHeight);
  });

  return (
    <div id="price-list" className={"scroll-content price-list "}>
      <div className={"container price-list-container"}
      >
        <div className='price-list-title-div'>
          <h1>CJENIK ČLANARINE</h1>
        </div>

        <div className={"row row-cols-auto row-price-list gx-5 "}>
          <div className='col col-price-list'>
            <Membership name={"polumjesecna"} description={["neogranicen pristup teretani"]} price={75} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"mjesecna"} description={["neogranicen pristup teretani"]} price={150} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"dvomjesecna"} description={["neogranicen pristup teretani"]} price={270} />
          </div>

          <div className='col col-price-list'>
            <Membership name={"polugodisnja"} description={["neogranicen pristup teretani"]} price={800} />
          </div>

          <div className='col col-price-list'
            style={{ display: showMore ? "flex" : "none" }}
          >

            <Membership name={"godisnja"} description={["neogranicen pristup teretani"]} price={1400} />
          </div>

          <div className='col col-price-list'
            style={{ display: showMore ? "flex" : "none" }}
          >
            <Membership name={"dnevna"} description={["neogranicen pristup teretani"]} price={25} />
          </div>

          {
            showMore &&
              <div className='col col-price-list'>
                <Membership name={"Najam trenera"} description={["30 min (50kn)", "60min (75kn)", "90 min (100kn)"]} />
              </div>
          }

          {
            showMore &&
              <div className='col col-price-list'>
                <Membership name={"grupni treninzi"} description={["neogranicen pristup teretani"]} price={270} />
              </div>
          }

          {
            showMore &&
            <div className='col col-price-list'>
              <Membership name={"Kiropraktika"} description={["neogranicen pristup teretani"]} price={250} />
            </div>
          }

        </div>

        <div className="container show-more-btn-div">
          <Button variant="outlined"
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}>{showMore ? "Prikaži manje" : "Prikaži više" }</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
