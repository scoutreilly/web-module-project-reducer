import React from "react";
import { useReducer } from "react";

import "./App.css";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  changeOperator,
  clearTotal,
  applyMemory,
  addMemory,
  clearMemory,
} from "./actions";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNum = (number) => {
    dispatch(applyNumber(number));
  };

  const handleSymbol = (symbol) => {
    dispatch(changeOperator(symbol));
  };

  const handleClear = () => {
    dispatch(clearTotal());
  };

  const handleApplyMemory = () => {
    dispatch(applyMemory(state.total));
  };

  const handleAddMemory = () => {
    dispatch(addMemory(state.memory));
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleApplyMemory} />
              <CalcButton value={"MR"} onClick={handleAddMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  handleNum(1);
                }}
              />
              <CalcButton
                value={2}
                onClick={() => {
                  handleNum(2);
                }}
              />
              <CalcButton
                value={3}
                onClick={() => {
                  handleNum(3);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => {
                  handleNum(4);
                }}
              />
              <CalcButton
                value={5}
                onClick={() => {
                  handleNum(5);
                }}
              />
              <CalcButton
                value={6}
                onClick={() => {
                  handleNum(6);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => {
                  handleNum(7);
                }}
              />
              <CalcButton
                value={8}
                onClick={() => {
                  handleNum(8);
                }}
              />
              <CalcButton
                value={9}
                onClick={() => {
                  handleNum(9);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  handleSymbol("+");
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  handleSymbol("*");
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  handleSymbol("-");
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
