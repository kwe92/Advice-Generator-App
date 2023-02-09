import React from "react";
import AppContainer from "./AppStyles";
import AdviceCard from "./components/adviceCard/AdviceCard";
import Theme from "./constants/styling/theme/Theme";

const App = (props: {}) => {
  return (
    <AppContainer>
      <AdviceCard />
    </AppContainer>
  );
};

export default App;
