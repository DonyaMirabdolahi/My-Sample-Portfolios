import styled from "styled-components";
import Resume from "../Images/Resume-removebg-preview.png";
import BtnAbout from "../Btn/BtnAbout/BtnAbout";
function ImageSection() {
  return (
      <ImageSectionStyled>
          <div className="left-content">
              <img src={Resume} alt=""/>
          </div>
          <div className="right-content">
              <h4>I am <span>Donya Mirabdollahi</span></h4>
              <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim 
                  praesentium delectus est id fugiat ab libero adipisci recusandae at maxime veritatis! 
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, nesciunt.
                  
              </p>
              <div className="about-info">
                  <div className="info-title">
                      <p>Full Name</p>
                      <p>Age</p>
                      <p>Nationality </p>
                      <p>Languages </p>
                      <p>Service</p>
                  </div>
                  <div className="info">
                      <p>: Donya Mirabdollahi</p>
                      <p>: 20</p>
                      <p>: Iranian </p>
                      <p>:  Persian, English ,Spanish </p>
                      <p>: Web design</p>
                  </div>
              </div>
              <BtnAbout title={'Download Cv'} />
          </div>
      </ImageSectionStyled>
  )
}


const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width:1000px){
      flex-direction: column;
      .left-content{
          margin-bottom: 2rem;
      }
  }
  .left-content{
      width: 100%;
      img{
          width: 95%;
          object-fit: cover;
      }
  }
  .right-content{
      width: 100%;
      h4{
          font-size: 2rem;
          color: var(--white-color);
          span{
              font-size: 2rem;
          }
      }
      .paragraph{
          padding: 1rem 0;
      }
      .about-info{
          display: flex;
          padding-bottom: 1.4rem;
          .info-title{
              padding-right: 3rem;
              p{
                  font-weight: 600;
              }
          }
          .info-title, .info{
              p{
                  padding: .3rem 0;
              }
          }
      }
  }
`;
export default ImageSection;