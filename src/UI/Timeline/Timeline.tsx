import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import "./Timeline.scss";

const Timeline = () => {
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    const swiper = swiperRef.current.swiper;
    gsap.to(swiper, { duration: 2, slideIndex: 1 });
  }, []);

  return (
    <Swiper ref={swiperRef} direction="vertical" slidesPerView="auto">
      <SwiperSlide>
        <div className="timeline-item">
          <h2>2015</h2>
          <p>
            13 сентября – частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="timeline-item">
          <h2>2016</h2>
          <p>
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
            галактик, получившую обозначение GN-z11
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="timeline-item">
          <h2>2017</h2>
          <p>
            Компания Tesla официально представила первый в мире электрический
            грузовик Tesla Semi
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Timeline;
