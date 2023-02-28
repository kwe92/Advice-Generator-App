import axios from "axios";
import { flow, types } from "mobx-state-tree";

const RandomNumber = (min: number, max: number) => {
  const randNum = Math.round(Math.random() * (max - min) + min);
  return randNum;
};

const AdviceModel = types
  .model({
    id: types.identifier,
    advice: types.string,
  })
  .actions((self) => ({
    addAdvice(advice: Advice) {
      self.id = advice.id;
      self.advice = advice.advice;
    },
  }));

const AdviceStore = types
  .model({
    advice: types.array(AdviceModel),
    state: types.optional(
      types.enumeration(["pending", "done", "error"]),
      "pending"
    ),
  })
  .actions((self) => ({
    addAdvice(advice: Advice) {
      self.advice.pop();
      self.advice.push(advice);
    },
    fetchAdvice: flow(function* () {
      self.state = "pending";
      console.log("State: ", self.state);
      const endpoint = "https://api.adviceslip.com/advice";
      try {
        const response = yield axios.get(endpoint);
        const slip = response.data.slip;
        const adviceObj = { id: String(slip.id), advice: slip.advice };

        console.log("Advice: ", adviceObj);

        self.advice.pop();
        self.advice.push(adviceObj);
        self.state = "done";

        console.log("State: ", self.state);
      } catch (error) {
        console.error("Failed to fetch advice!", error);
        self.state = "error";
      }
    }),
  }));

const store = AdviceStore.create({});

export default AdviceStore;
