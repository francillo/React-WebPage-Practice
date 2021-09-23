import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index:-1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 60% 0%, 50% 100%, 100% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 50% 0%, 36% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 36% 0%, 36% 100%, 0 100%);
  background-color: #f88497;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntoShape/>
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
      <Container>
        <Service/>
        <ServiceShape/>
      </Container>
    </>
  )
};

export default App;