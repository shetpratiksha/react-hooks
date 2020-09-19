import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterArray from './component/HookCounterArray';
import HookuseEffectCounter from './component/HookuseEffectCounter';
import HookeMouseeventuseEffectOnce from './component/HookeMouseeventuseEffectOnce';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import DataFetchingSingleData from './component/DataFetchingSingleData';
import ReducerHookCounter from './component/ReducerHookCounter';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';

export const CountContext = React.createContext();
const initalState = 0

const reducer = (state, action) =>{
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return initalState
      default:
        return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initalState)
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterArray /> */}
      {/* <HookuseEffectCounter /> */}
      {/* <HookeMouseeventuseEffectOnce /> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingSingleData/> */}
      {/* <ReducerHookCounter/> */}
      {/* Count: {count}
      <ComponentA count={count} dispatch={dispatch}/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
  
  );
}

export default App;
