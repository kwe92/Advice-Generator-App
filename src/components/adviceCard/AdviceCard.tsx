import React, { useState } from "react";
import useFetch from "../../constants/custom_hooks/useFetch";
import images from "../../constants/images/images";
import {
  MainContainer,
  TopSection,
  TopContent,
  Quote,
  DividerImage,
  Dice,
  DiceContainer,
} from "./AdviceCardStyles";

const AdviceCard = (props: {}) => {
  const [refresh, setRefresh] = useState([""]);
  const { quote, handleFetch } = useFetch(refresh);

  return (
    <MainContainer>
      <TopSection>
        <TopContent>Advice</TopContent>
        <TopContent>{`#${quote.id}`}</TopContent>
      </TopSection>
      <Quote>{`"${quote.advice}"`}</Quote>

      <DividerImage src={images.dividerDesktop} alt="divider-image" />
      <DiceContainer
        onClick={() => {
          console.log("I HAVE BEEN TOUCHED");
          setRefresh([]);
        }}
      >
        <Dice src={images.dice} alt="dice" />
      </DiceContainer>
    </MainContainer>
  );
};

export default AdviceCard;
