import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import NullUndefined from "./NullUndefined";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import IncludesSomeEvery from "./IncludesSomeEvery";
import ReduceFunction from "./ReduceFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreader from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import OptionalChaining from "./OptionalChaining";
import Classes from "./Classes";
import Styles from "./Styles";
import ClientComponentDemo from "./ClientComponentDemo";
import ServerComponentDemo from "./ServerComponentDemo";
import Link from "next/link";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";
import "./lab3.css";

export default function Lab3() {
  console.log("Hello World!");
  return <div id="wd-lab3">
    <h1>Lab 3</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <NullUndefined />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <IncludesSomeEvery />
      <ReduceFunction />
      <JsonStringify />
      <House />
      <Spreader />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <OptionalChaining />
      <section><h2>TypeScript Types</h2><Link href="/labs/lab3/types">TypeScript examples</Link><hr /></section>
      <Classes />
      <Styles />
      <ClientComponentDemo />
      <ServerComponentDemo />
      <section><h2>More Client and Server APIs</h2>
        <ul><li><Link href="/labs/lab3/client-apis">Client-only APIs</Link></li>
        <li><Link href="/labs/lab3/server-apis">Server-only APIs</Link></li></ul><hr />
      </section>
      <Add a={3} b={4} />
      <Add a={10} b={20} />
      <Add a={7} b={8} />
      <section><h2>Children</h2>
        <h4>Square of 4</h4><Square>4</Square><hr />
        <p>Square of 9 = <Square>9</Square></p>
        <p>Square of 5 = <Square>5</Square></p>
        <p><Highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Highlight></p>
        <p><Highlight>Components can reuse the same structure with different data.</Highlight></p>
        <p><Highlight>Children can be any JSX</Highlight></p>
      </section>
      <PathParameters />
      <TodoList />
  </div>;
}
