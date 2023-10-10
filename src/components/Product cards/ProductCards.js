import React, { useEffect } from "react";
import "./ProductCards.css";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const ProductCards = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => newRequest("/campaign/all"),
  });
  console.log(data);
  return (
    <>
      <section className="Product-card-section">
        <div className="card_heading">
          <h2>Listing</h2>
        </div>

        <div className="Product-details">
          <div className="card_content">
            <img src="images/bag.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Nike Classic bag</h1>
              <p>Mens Bagpack.</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $20
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="Blu-txt"> Availabe</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
              </div>
            </div>
          </div>

          <div className="card_content">
            <img src="images/mobile.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Andriod Mobile</h1>
              <p>Latest Mobile</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $24
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="Blu-txt"> Availabe</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
              </div>
            </div>
          </div>
          <div className="card_content">
            <img src="images/shoes.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Nike Zoom KD 12</h1>
              <p>Men Running shoes.</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $60
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="red-txt"> Sold-Out</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="Product-details">
          <div className="card_content">
            <img src="images/bag.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Nike Classic bag</h1>
              <p>Mens Bagpack.</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $20
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="Blu-txt"> Availabe</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
                <button className="buy-1">Add Campaing</button>
              </div>
            </div>
          </div>

          <div className="card_content">
            <img src="images/shoes.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Nike Classic bag</h1>
              <p>Mens Bagpack.</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $30
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="Blu-txt"> Availabe</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
                <button className="buy-1">Add Campaing</button>
              </div>
            </div>
          </div>

          <div className="card_content">
            <img src="images/mobile.jpg" className="Card-img" />
            <div className="paragraph-content">
              <h1>Nike Classic bag</h1>
              <p>Mens Bagpack.</p>
              <span className="cost" style={{ fontSize: "13px" }}>
                Shipping Cost: $50
              </span>
              <br />
              <span style={{ fontSize: "13px" }}>
                Stock:<span className="red-txt"> Sold-Out</span>
              </span>
              <div className="donate-btn">
                <button className="buy">Donate</button>
                <button className="buy-1">Add Compaing</button>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ProductCards;
