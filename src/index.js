import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reducer, { initialState } from "./reducer";
import App from "./App";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
