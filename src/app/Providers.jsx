"use client"; 

import { Provider } from "react-redux";
import { LoaderProvider } from "./context/LoaderContext";
import store from "./Redux/store/store";

export default function Providers({ children } ) {
  return (
    <LoaderProvider>
      <Provider store={store}>{children}</Provider>
    </LoaderProvider>
  );
}
