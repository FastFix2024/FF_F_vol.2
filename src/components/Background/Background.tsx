import { Landing } from "../../sections/Landing/Landing";
import SectionProfile from "../../sections/SectionProflile/SectionProfile";
// import MapWrapper from "../MapWrapper/MapWrapper";
import { GitHub, Mail } from "../../assets";
import {
  Background1,
  Background2,
  Background3,
  Container,
  ContentWrapper,
  Footer,
  FooterIcons,
  Section
} from "./styles"

const Background = () => {
  return (
    <Container>
      <Section bgColor="white">
        <Background1 />
        <Landing />
        <ContentWrapper>
          {/*<MapWrapper />*/}
        </ContentWrapper>
      </Section>
      <Section style={{ zIndex: "0" }} bgColor="#3d799b" id="section-profile">
        <Background2 />
        <SectionProfile />
        <Footer>
          <FooterIcons src={GitHub} />
          <FooterIcons src={Mail} />
        </Footer>
      </Section>
      <Section style={{ zIndex: "-1" }} bgColor="white">
        <Background3 />
      </Section>
    </Container>
  );
};

export default Background;