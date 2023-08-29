import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function ImgSlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  console.log(props.arrayImages);
  console.log(props.sliderImage);
  return (
    <>
      {/* <div className={`swiper mySwiper ${props.border} ${props.className}`}>
        <div className={`swiper-wrapper ${props.className}`}>
          <Slider {...props.settings} ref={props.sliderRef}>
            {props.sliderImg.map((value, id) => {
              if (value.isActive) {
                return (
                  <div key={id} className="swiper-slide">
                    <img className="img-fluid" src={value.URL} alt="" />
                  </div>
                );
              } else if (value.isActive === undefined) {
                return (
                  <div key={id} className="swiper-slide">
                    <img className="img-fluid" src={value.URL} alt="" />
                  </div>
                );
              }
              return "";
            })}
          </Slider>
        </div>
      </div> */}

      <div className={`swiper mySwiper`}>
        <div className={`swiper-wrapper`}>
          {props.arrayImages ? (
            <>
              <Slider {...settings}>
                {props.arrayImages.map((value) => {
                  return (
                    <div className="swiper-slide">
                      <img
                        className="img-fluid w-100"
                        src={value.name ? URL.createObjectURL(value) : value}
                        alt=""
                      />
                    </div>
                  );
                })}
              </Slider>
            </>
          ) : (
            <>
              {" "}
              <Slider {...settings}>
                {props.sliderImage.bannerImage1 ? (
                  <div className="swiper-slide">
                    <img
                      className="img-fluid w-100"
                      src={
                        props.sliderImage.bannerImage1
                          ? URL.createObjectURL(props.sliderImage.bannerImage1)
                          : props.sliderImage.bannerImage1
                      }
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
                {props.sliderImage.bannerImage2 ? (
                  <div className="swiper-slide">
                    <img
                      className="img-fluid w-100"
                      src={
                        props.sliderImage.bannerImage2
                          ? URL.createObjectURL(props.sliderImage.bannerImage2)
                          : props.sliderImage.bannerImage2
                      }
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
                {props.sliderImage.bannerImage3 ? (
                  <div className="swiper-slide">
                    <img
                      className="img-fluid w-100"
                      src={
                        props.sliderImage.bannerImage3
                          ? URL.createObjectURL(props.sliderImage.bannerImage3)
                          : props.sliderImage.bannerImage3
                      }
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}{" "}
              </Slider>
            </>
          )}
        </div>
      </div>
    </>
  );
}
