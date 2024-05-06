import styled from "styled-components";
import { MainLayout } from "../Styles/Layout";
import Title from "../Title/Title";
import ImageSection from "../ImageSection/ImageSection";
import Services from "../Services/Services";
import Review from "../Review/Review";
const About=() =>{
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <Services />
                <Review />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default About;