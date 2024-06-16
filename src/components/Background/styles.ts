import styled from "@emotion/styled"
import { Sections1Bg, Sections2Bg, Section3Bg } from "../../assets";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1600px 690px 450px;
`;

export const Section = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  position: relative;
  z-index: 1;
`;

export const Background1 = styled.div`
    background-image: url("${Sections1Bg}");
    background-repeat: no-repeat;
    width: 655px;
    height: 990px;
    position: absolute;
    left: 0;
    z-index: -1;
`;

export const ContentWrapper = styled.div`
    margin-top: 150px;
`;

export const Background2 = styled.div`
    background-image: url("${Sections2Bg}");
    background-repeat: no-repeat;
    width: 655px;
    height: 990px;
    position: absolute;
    right: 0;
`;

export const Background3 = styled.div`
    background-image: url("${Section3Bg}");
    background-repeat: no-repeat;
    height: 450px;
    position: relative;
    z-index: -2;
`;

export const FooterIcons = styled.img`
    width: 40px;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    align-content: center;
    padding-right: 100px;
    gap: 20px;
    position: absolute;
    bottom: -65%;
    z-index: 1000;
`;