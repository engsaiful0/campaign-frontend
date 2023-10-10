import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCheck,
  faHelicopter,
} from "@fortawesome/free-solid-svg-icons";
import "./SubscriptionCard.css";
import { Link } from "react-router-dom";

const SubscriptionCard = () => {
  return (
    <>
      <section className="Pricing">
        {/* <div className='Card-Content'>
            <div className='Header'>
            <h1>Free</h1>
            <FontAwesomeIcon icon={faCar} className='car-icon'/>
            </div>
            <div className='card-price'>
                <p><sup>$</sup>0<sub>/m</sub></p>
            </div>
            <div className='CARD-Details'>
            <p><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Unlimited BroadCasts</p>
            <p><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Unlimited Sequence</p>
            <p><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Advanced marketing</p>
            <p><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Api & Developer Tools</p>
            <p className='blur'><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Integration</p>
            <p className='blur'><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Payements</p>
            <p className='blur'><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Unlimited Tags</p>
            <p className='blur'><span><FontAwesomeIcon icon={faCheck} className='check-icon'/></span>Custom Fields</p>
            </div>
            <button className='subs-button'>Start free trial</button>
            </div> */}

        {/* <div className="Card-Content">
          <div className="Header">
            <h1>Pro</h1>
            <FontAwesomeIcon icon={faHelicopter} className="car-icon" />
          </div>
          <div className="card-price">
            <p>
              <sup>$</sup>99<sub>/m</sub>
            </p>
          </div>
          <div className="CARD-Details">
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited BroadCasts
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited Sequence
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Advanced marketing
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Api & Developer Tools
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Integration
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Payements
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited Tags
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Custom Fields
            </p>
          </div>
          <button className="purchase-button">Purchase Now</button>
        </div> */}
        <div className="Card-Content">
          <div className="Header">
            <h1>One Month Subscription</h1>
            <FontAwesomeIcon icon={faHelicopter} className="car-icon" />
          </div>
          <div className="card-price">
            <p>
              <sup>$</sup>99<sub>/m</sub>
            </p>
          </div>
          <div className="CARD-Details">
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited BroadCasts
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited Sequence
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Advanced marketing
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Api & Developer Tools
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Integration
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Payements
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Unlimited Tags
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              </span>
              Custom Fields
            </p>
          </div>
          <Link to="/pay">
            <button className="purchase-button">Purchase Now</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SubscriptionCard;
