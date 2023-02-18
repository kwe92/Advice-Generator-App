import styled from "styled-components";
import { Row, Column } from "../../constants/styling/layout/Flex";

const MainContainer = styled(Column)`
    position: relative;
    width 36rem;
    height: 22rem;

    background: ${({ theme }: { theme: ThemeInterface }) =>
      theme.darkGreyishBlueColor};
    align-items: center;
    justify-content: space-evenly;

    border-radius: 1rem;

    @media screen and (max-width: 450px){
      margin: 0 1rem;
    }

`;

const TopContent = styled.p`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.neonGreenColor};
`;

const Quote = styled.p`
  color: ${({ theme }: { theme: ThemeInterface }) => theme.lightCyanColor};
  font-size: ${({ theme }: { theme: ThemeInterface }) => theme.fontSize};
  font-weight: 800;
  padding: 0 3.375rem;
  text-align: center;
`;

const DividerImage = styled.img`
  width: 80%;
  padding: 2.25rem 0 3.75rem 0;
`;

const Dice = styled.img`
  background: ${({ theme }: { theme: ThemeInterface }) => theme.neonGreenColor};
  width: 1.5rem;
  height: 1.5rem;
`;

const DiceContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 3.75rem;
  height: 3.75rem;
  left: 50;
  margin-top: 22.75rem;
  border-radius: 50%;
  background: ${({ theme }: { theme: ThemeInterface }) => theme.neonGreenColor};

  &: hover {
    box-shadow: 0 0 2rem
      ${({ theme }: { theme: ThemeInterface }) => theme.neonGreenColor};
  }
`;

const TopSection = styled(Row)`
  padding: 2.25rem 0 1.75rem 0;
  letter-spacing: 0.25rem;
  font-weight: 800;
`;

const QuotesSection = styled.div``;

export {
  MainContainer,
  TopContent,
  Quote,
  DividerImage,
  TopSection,
  QuotesSection,
  Dice,
  DiceContainer,
};
