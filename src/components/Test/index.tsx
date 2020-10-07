import React, { useState, useRef } from "react";

//interface to create object
interface Person {
  name: string;
  email: string;
}

interface Props {
  text: string;
  selected: boolean;
  x?: number;
  fn?: (bob: string) => number; // void if no return
  obj: Person;
}

interface TextNode {
  text: string;
}

const Test: React.FC<Props> = ({ selected, text, x }) => {
  // useState
  const [count, setCount] = useState<number | null | undefined>(0);
  const [testObj, setTestObj] = useState<{ text: string } /* or TextNode */>({
    text: "hello world",
  });

  // useRef
  const inputRef = useRef<HTMLDivElement>(null); //extract type by hover <element ref={} >

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    //hover is your best friend when using typescript
    <div>
      <div ref={inputRef}>
        <h1>{text}</h1>
        <input onChange={handleChange} />
      </div>
    </div>
  );
};

export default Test;
