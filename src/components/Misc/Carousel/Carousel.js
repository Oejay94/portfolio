import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={13}
        infinite='true'
        totalSlides={5}
        isPlaying="true"
        interval={2000}
      >
        <Slider>
        <Slide index={0}>
            <Image
              src={require("../../images/DSC_0132.jpeg")}
              style={{ display: "block", margin: "0 auto", width: "30%" }}
            />
            </Slide>
        <Slide index={1}>
            <Image
              src={require("../../images/FrontEndCert.jpeg")}
              style={{ display: "block", margin: "0 auto", width: "30%" }}
            />
            </Slide>
            <Slide index={2}>
            <Image
              src={require("../../images/FullStackCertification.png")}
              style={{ display: "block", margin: "0 auto", width: "30%" }}
            />
            </Slide>
            <Slide index={3}>
              <Image
                src={require("../../images/FEGraduationDaniel.jpeg")}
                style={{ display: "block", margin: "0 auto", width: "20%" }}
              />
            </Slide>
            <Slide index={4}>
              <Image
                src={require("../../images/FEGraduationChoc.jpeg")}
                style={{ display: "block", margin: "0 auto", width: "20%" }}
              />
            </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
