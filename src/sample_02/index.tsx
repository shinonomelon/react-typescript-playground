// ReactNode, ReactElement, JSX.Elementの使い方を理解する

import { ReactNode, ReactElement, useState } from "react";

type Child1Props = {
  content: ReactNode;
};

const Child1 = ({ content }: Child1Props): JSX.Element => (
  <div>
    <h2>Child Component</h2>
    {content}
  </div>
);

type Child2Props = {
  header: ReactNode;
  content: ReactElement;
  footer: JSX.Element;
};

const Child2 = ({ header, content, footer }: Child2Props): JSX.Element => (
  <div>
    <header>{header}</header>
    <main>{content}</main>
    <footer>{footer}</footer>
  </div>
);

type ParentProps = {
  // children: JSX.Element[] | JSX.Element;  //  not an error, but not recommended
  // children: JSX.Element[];  //  not an error, but not recommended
  // children: JSX.Element;  // NG
  // children: ReactElement;  // NG
  // children: ReactElement | ReactElement[];  //  not an error, but not recommended
  children: ReactNode; // OK
};

const Parent = ({ children }: ParentProps): JSX.Element => {
  return (
    <div>
      <h1>Parent Component</h1>
      {children}
    </div>
  );
};

export const Sample02 = (): JSX.Element => {
  const [isSomeValue, setIsSomeValue] = useState(false);

  return (
    <Parent>
      <button onClick={() => setIsSomeValue(!isSomeValue)}>Click me</button>
      <Child1
        content={
          <>
            <p>This is a paragraph inside the Child component.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </>
        }
      />
      <Child2
        header={!!isSomeValue && <h3>Child 2 Header</h3>}
        content={<div>This is the content of Child 2.</div>}
        footer={<footer>Child 2 Footer</footer>}
      />
    </Parent>
  );
};
