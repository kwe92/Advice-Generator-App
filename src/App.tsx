import React from "react";
import AppContainer from "./AppStyles";
import AdviceCard from "./components/adviceCard/AdviceCard";
import useFetch from "./constants/custom_hooks/useFetch";
import Theme from "./constants/styling/theme/Theme";

const App = (props: {}) => {
  const [quote, setQuote] = useFetch();
  return (
    <AppContainer>
      <AdviceCard />
    </AppContainer>
  );
};

export default App;
