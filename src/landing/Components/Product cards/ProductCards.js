import React, { useState } from "react";
import "./ProductCards.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const [cards, setCards] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      newRequest.get("/campaign/all").then((res) => {
        const fetchedData = res.data;
        setCards(fetchedData); // Update the state with the fetched data
        return fetchedData; // Return the data for useQuery
      }),
  });

  console.log(data);

  return (
    <>
      <section className="Product-card-section">
        <div className="card_heading">
          <h2>Listing</h2>
        </div>

        <div className="Product-details">
          {isPending ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            cards.map((item) => {
              return (
                <div key={item.id} className="card_content">
                  {/* Render your product card using item data */}
                  <img
                    src={item.milimg}
                    className="Card-img"
                    alt={item.title}
                  />
                  <div className="paragraph-content">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <span className="cost" style={{ fontSize: "13px" }}>
                      Shipping Cost: ${item.shippingCost}
                    </span>
                    <br />
                    <span style={{ fontSize: "13px" }}>
                      Stock:
                      <span
                        className={
                          item.stock === "Available" ? "Blu-txt" : "red-txt"
                        }
                      >
                        {item.stock}
                      </span>
                    </span>
                    <div className="donate-btn">
                      <Link to={`/pay/${item._id}`}>
                        <button className="buy">Donate</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCards;
