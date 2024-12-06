import React, {useState} from 'react';
import {Tabs} from "antd";
import TypeCorrection from "./Pages/TypeCorrection";
import NotANumber from "./Pages/NotANumber";
import Equality from "./Pages/Equality";
import AddingArrAndObj from "./Pages/AddingArraysAndObjects";
import ComparingObjects from "./Pages/CompareObjects";
import ValueAssign from "./Pages/ValueAssign";
import NullUndefined from "./Pages/NullUndefined";
import Asi from "./Pages/Asi";
import FunctionLength from "./Pages/FunctionLength";
import Floats from "./Pages/Floats";

function App() {

  const items = [
    {
      key: '1',
      label: 'Type Coercion',
      children: <TypeCorrection />,
    },
    {
      key: '2',
      label: 'NaN',
      children: <NotANumber />,
    },
    {
      key: '3',
      label: '== vs. === ',
      children: <Equality />,
    },
    {
      key: '4',
      label: 'Adding objects',
      children: <AddingArrAndObj/>,
    },
    {
      key: '5',
      label: 'Comparing Objects',
      children: <ComparingObjects/>,
    },
    {
      key: '6',
      label: 'Value assign',
      children: <ValueAssign/>,
    },
    {
      key: '7',
      label: "The null vs. undefined",
      children: <NullUndefined />,
    },
    {
      key: '8',
      label: 'The ASI',
      children: <Asi />,
    },
    {
      key: '9',
      label: "Function has length",
      children: <FunctionLength/>
    },
    {
      key: '13',
      label: "Floats",
      children: <Floats />
    },

  ];
  return (

      <div className="App">
        <Tabs
            defaultActiveKey="1"
            tabPosition={'top'}
            style={{
              height: 220,
            }}
            items={items}
        />
      </div>
)
  ;
}

export default App;
