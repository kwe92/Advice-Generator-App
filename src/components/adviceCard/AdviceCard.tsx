import React from "react";
import images from "../../constants/images/images";
import {
  MainContainer,
  TopSection,
  TopContent,
  Quote,
  DividerImage,
  Dice,
} from "./AdviceCardStyles";

const AdviceCard = (props: {}) => {
  return (
    <MainContainer>
      <TopSection>
        <TopContent>Advice</TopContent>
        <TopContent>#1001</TopContent>
      </TopSection>
      <Quote>
        “Don’t underestimate the power of vision and direction. These are
        irresistible forces, able to transform what might appear to be
        unconquerable obstacles into traversable pathways and expanding
        opportunities.”
      </Quote>

      <DividerImage src={images.dividerDesktop} alt="divider-image" />
      <Dice src={images.dice} alt="dice" />
    </MainContainer>
  );
};

export default AdviceCard;
