import React from "react";
import AppContainer from "./AppStyles";
import AdviceCard from "./components/adviceCard/AdviceCard";
import useFetch from "./constants/custom_hooks/useFetch";
import Theme from "./constants/styling/theme/Theme";

const App = (props: {}) => {
  // const { quote, handleFetch } = useFetch();
  return (
    <>
      <AppContainer>
        <AdviceCard />
      </AppContainer>
      <p
        style={{
          textAlign: "center",
          paddingBottom: "2rem",
          color: "white",
          fontSize: "0.75rem",
        }}
      >
        Developed By: Kweayon Clark
      </p>
    </>
  );
};

export default App;
