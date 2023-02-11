import React, { useState, useEffect } from "react";
import axios from "axios";
const useFetch = () => {
  const endpoint = "https://api.adviceslip.com/advice";
  const [quote, setQuote] = useState({});

  const handleFetch = (reponse: QuoteInterface) => {
    console.log("endpoint data from useFetch", reponse.data.slip);
    const quoteObject = reponse.data.slip;
    setQuote(quoteObject);
  };

  useEffect(() => {
    axios.get(endpoint).then((reponse) => {
      handleFetch(reponse);
    });
  }, []);
  return [quote, setQuote];
};

export default useFetch;
