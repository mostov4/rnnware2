import PropTypes from "prop-types";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Swiper from "react-id-swiper";
import ProductGridTwo from "./ProductGridTwo";

const TabProductTwelveUtensils = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
  sectionTitle
}) => {
  const [swiper, updateSwiper] = useState(null);
  const [swiper2, updateSwiper2] = useState(null);
  const [swiper3, updateSwiper3] = useState(null);

  const settings = {
    loop: false,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const goNext2 = () => {
    if (swiper2 !== null) {
      swiper2.slideNext();
    }
  };
  const goPrev2 = () => {
    if (swiper2 !== null) {
      swiper2.slidePrev();
    }
  };

  const goNext3 = () => {
    if (swiper3 !== null) {
      swiper3.slideNext();
    }
  };
  const goPrev3 = () => {
    if (swiper3 !== null) {
      swiper3.slidePrev();
    }
  };
  return (
    <div
      className={`product-area product-area--style2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${
        bgColorClass ? bgColorClass : ""
      }`}
    >
      <div className="container">
        <div className="product-tab-slider-wrapper position-relative">
          <Tab.Container defaultActiveKey="newArrival">
              <h3>Recomended products</h3>
            <Tab.Content>
              <Tab.Pane eventKey="newArrival">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper}>
                    <ProductGridTwo
                      category={category}
                      type="bestSeller"
                      limit={6}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper product-slider-active">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bestSeller">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper2}>
                    <ProductGridTwo
                      category={category}
                      type="bestSeller"
                      limit={8}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev2}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext2}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="saleItems">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper3}>
                    <ProductGridTwo
                      category={category}
                      type="saleItems"
                      limit={8}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev3}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext3}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};


TabProductTwelveUtensils.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwelveUtensils;
