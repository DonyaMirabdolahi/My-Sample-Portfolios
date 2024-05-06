import styled from "styled-components";
import { InnerLayout } from "../Styles/Layout";
import Title from "../Title/Title";
import ServiceCard from "../ServiceCard/ServiceCard";
import WordPress from "../Images/WordPress.jpg";
import React from "../Images/React.jpg";
import UiUx from "../Images/UIUX.jpg";
const ServicesSection=()=>{
  return (
      <InnerLayout>
          <ServicesSectionStyled>
              <Title title={'Services'} span={'services'} />
              <div className="services">
                  <ServiceCard 
                      image={WordPress} 
                      title={'Web Design'} 
                      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                  />
                  <div className="mid-card">
                      <ServiceCard 
                          image={React} 
                          title={'React Websites'} 
                          paragraph={'Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Autem tenetur lipsum dolor ratione dolor ratione dolor ratione quod.'}
                      />
                  </div>
                
                  <ServiceCard 
                      image={UiUx} 
                      title={'Ui/UX designing'} 
                      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                  />
              </div>
          </ServicesSectionStyled>
      </InnerLayout>
  )
}

const ServicesSectionStyled = styled.section`
  .services{
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      @media screen and (max-width:1000px){
          flex-direction: column;
      }
      @media screen and (max-width:950px){
          grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width:650px){
          grid-template-columns: repeat(1, 1fr);
      }
     
  }
`;

export default ServicesSection;