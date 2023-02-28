import { observer } from "mobx-react-lite";
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

import AdviceStore from "../../models/advice/AdviceModel";

const store = AdviceStore.create({});
const initAdvice = {
  id: "",
  advice: "",
};
store.addAdvice(initAdvice);
store.fetchAdvice();

const AdviceCard = observer((props: {}) => {
  return (
    <MainContainer>
      <TopSection>
        <TopContent>Advice</TopContent>
        {/* <TopContent>{`#${advice.id}`}</TopContent> */}
        <TopContent>{`#${store.advice.values().next().value.id}`}</TopContent>
      </TopSection>
      {/* <Quote>{`"${advice.advice}"`}</Quote> */}
      <Quote>{`"${store.advice.values().next().value.advice}"`}</Quote>

      <DividerImage src={images.dividerDesktop} alt="divider-image" />
      <DiceContainer
        onClick={() => {
          console.log("I HAVE BEEN TOUCHED");
          // setRefresh([]);
          store.fetchAdvice();
        }}
      >
        <Dice src={images.dice} alt="dice" />
      </DiceContainer>
    </MainContainer>
  );
});

export default AdviceCard;
