import styled from "styled-components";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Hero = () => {
  return (
    <HeroMain>
      <p>Runner's Workout</p>
      <ImageWrapper>
        <ImgContainer>
          <img src={img1} alt="img1" />
          <span className="top-left">STRENGTH</span>
        </ImgContainer>
        <ImgContainer>
          <img src={img2} alt="img2" />
          <span>MOBILITY</span>
        </ImgContainer>
        <ImgContainer>
          <img src={img3} alt="img3" />
          <span>DRILLS</span>
        </ImgContainer>
      </ImageWrapper>
    </HeroMain>
  );
};

export default Hero;

const HeroMain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;
 p{
  font-size: 30px;
 }
  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    -webkit-animation: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    :hover {
      height: 300px;
      width: 450px;
    }
  }
`;

const ImageWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 5%;
`;

const ImgContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  span {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;
