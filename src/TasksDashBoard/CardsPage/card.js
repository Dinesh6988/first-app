import React from "react";
import "./Card.scss";
import { Button } from "antd";
import { StarOutlined,HeartOutlined,CheckOutlined } from "@ant-design/icons";
function card() {
  return (
    <React.Fragment>
      <div className="heading1">
        <div className="content">
          <h1>Recommended Senior Cares</h1>
        </div>
        <div className="button">
          <Button className="button1">Day Month</Button>
        </div>
      </div>
      <div className="cards">
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/652fa4cb53fb1d221026941c/tony-yakovlenko-lDxxeAJrWpE-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="discount">
            <h4>20% Discount</h4>
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="check">
          <CheckOutlined />
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Genesis Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className="count">
                  <span>1reviews</span>
                </div>
              </div>
              <div className="cost">
                <h3>
                  $ 100<span>/night onwards</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
         <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/652fd46b53fb1d221026944f/r-architecture-wDDfbanbhl8-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="check">
          <CheckOutlined />
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Flora Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet Rated</span>
                </div>
              </div>
              <div className="cost">
                <h3>
                  $ 120<span>/night onwards</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/653118ec023873302f16ccc5/patrick-perkins-3wylDrjxH-E-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="check">
          <CheckOutlined />
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Prestige Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet Rated</span>
                </div>
              </div>
              <div className="cost">
                <h3>
                  $ 190<span>/night onwards</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/653a66e3c3af75947b7c100b/SenoirCare6.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Commercial</h4>
          </div>
          <div className="check">
          <CheckOutlined />
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Helpingco</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className="count">
                  <span>7reviews</span>
                </div>
              </div>
              <div className="cost">
                <h3>
                  $ 230<span>/night onwards</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/mikail-mcverry-GSL3IuuwJv8-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="check">
          <CheckOutlined />
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Happylife Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet rated</span>
                </div>
              </div>
              <div className="cost">
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/r-architecture-rOk4VSMS3Ck-unsplash(2).jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="card_details">
            <div className="title">
              <h2>fantacy Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet rated</span>
                </div>
              </div>
              <div className="cost">
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/dayso-3mUm2RbrYno-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Aroma Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet rated</span>
                </div>
              </div>
              <div className="cost">
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Oxy Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet rated</span>
                </div>
              </div>
              <div className="cost">
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_image">
            <img src="https://ub-dev-image-uploader.s3-ap-south-1.amazonaws.com/francesca-tosolini-XcVm8mn7NUM-unsplash.jpeg" alt="no-img" />
          </div>
          <div className="heart">
          <HeartOutlined />
          </div>
          <div className="property">
                 <h4>Senior Care Centre</h4>
          </div>
          <div className="card_details">
            <div className="title">
              <h2>Aura Senior Care</h2>
            </div>
            <div className="address">
              <h4>Rancho Cucamonga,CA,USA</h4>
            </div>
            <div className="rating">
              <div className="rating_c">
                <div className="star">
                </div>
                <div className="count">
                  <span>Not Yet rated</span>
                </div>
              </div>
              <div className="cost">
              </div>
            </div>
          </div>
        </div> 
      </div>
    </React.Fragment>
  );
}
export default card;
