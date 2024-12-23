import React, { createContext, useContext, useState } from "react";

const GrandParentContext = createContext({});

const ProviderContext = () => {
  const [innerChildHobby, setInnerChildHobby] = useState("");
  return (
    <div>
      <GrandParentContext.Provider
        value={{ innerChildHobby, setInnerChildHobby }}
      >
        <GrandParent />
      </GrandParentContext.Provider>
    </div>
  );
};

function GrandParent() {
  return (
    <>
      <h1>I am GrandParent</h1>
      <Parent />
    </>
  );
}

function Parent() {
  return (
    <>
      <h1>I am Parent</h1>
      <Child />
      <Sibling />
    </>
  );
}

function Child() {
  return (
    <>
      <h1>I am Child</h1>
      <InnerChild />
    </>
  );
}
function Sibling() {
  return (
    <>
      <h1>I am Sibling</h1>
    </>
  );
}

function InnerChild() {
  const { innerChildHobby, setInnerChildHobby } =
    useContext(GrandParentContext);
  return (
    <>
      <h1 onClick={() => setInnerChildHobby("Reading")}>
        I am Inner Child <p>{innerChildHobby}</p>
      </h1>
    </>
  );
}
export default ProviderContext;
