import { types } from "mobx-state-tree";

const RandomNumber = (min: number, max: number) => {
  const randNum = Math.round(Math.random() * (max - min) + min);
  return randNum;
};

const AdviceModel = types.model({
  id: types.optional(types.identifier, "1"),
  advice: types.optional(types.string, ""),
});

const AdviceStore = types.model({
  advice: types.map(AdviceModel),
});

console.log("Random Number: ", RandomNumber(2, 10));
