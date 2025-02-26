"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../Redux/actions/quoteActions";

const QuotesList = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes); 
  const loading = useSelector((state) => state.quotes.loading); 
  const error = useSelector((state) => state.quotes.error); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_QUOTES_REQUEST" });
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        dispatch(fetchQuotes(data.quotes)); 
      } catch (error) {
        dispatch({ type: "FETCH_QUOTES_FAILURE", payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <p>"{quote.quote}" - {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesList;
