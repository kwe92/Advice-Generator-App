import React, { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (refresh: string[]) => {
  const endpoint = "https://api.adviceslip.com/advice";
  const [quote, setQuote] = useState({
    id: 0,
    advice: "",
  });

  const handleFetch = (reponse: AdviceInterface) => {
    console.log("endpoint data from useFetch", reponse.data.slip);
    const quoteObject = reponse.data.slip;
    setQuote(quoteObject);
  };

  useEffect(() => {
    axios.get(endpoint).then((reponse) => {
      handleFetch(reponse);
    });
  }, [refresh]);
  return { quote: quote, handleFetch: handleFetch };
};

export default useFetch;
