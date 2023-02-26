import React, { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (refresh: string[]) => {
  const endpoint = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(initAdvice);

  const handleFetch = (reponse: AdviceInterface) => {
    console.log("endpoint data from useFetch", reponse.data.slip);
    const adviceObject = reponse.data.slip;
    setAdvice(adviceObject);
  };

  useEffect(() => {
    axios.get(endpoint).then((reponse) => {
      handleFetch(reponse);
    });
  }, [refresh]);
  return { advice: advice, handleFetch: handleFetch };
};

const initAdvice = {
  id: "",
  advice: "",
};

export default useFetch;
