import React from "react";
import "./styles.scss";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  accessibility: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 670,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  ]
};

export default function Flyer({ handleClose, data }) {
  const {t} = useTranslation(['portfolio'])

  return (
    <div className="flyer">
      <div className="flyer__carousel">
        <Slider {...settings}>
          {data?.images.length > 0 &&
            data.images.map((slide, index) => (
              <div key={'slide' + index}>
                <img src={slide} alt={t('pepperpal.project')} />
              </div>
            ))}
        </Slider>
      </div>
      <section className="flyer__text">
        <div className="project">{t(data.project)}</div>
        <div className="position">{t(data.position)}</div>
        <div className="technologies">{data?.technologies}</div>
        <div className="description">
        {t(data.longDescription)}
        </div>
      </section>

      
    </div>
  );
}
