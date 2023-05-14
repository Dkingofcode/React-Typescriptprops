import React, { ReactElement, ReactNode } from 'react';
import './App.css';


// Conventional props
function Heading({ title }: {title: string }){
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({ children }: { children: ReactNode; }) : ReactElement {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
   return <div><h1>{heading}</h1>{children}</div>;
}
Container.defaultProps = defaultContainerProps;

// Functional props
function TextWithNumber ({
  children
}: {
  children: (num: number) => ReactNode
}) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
     <Heading title="Hello"></Heading>
     <HeadingWithContent>
       <strong>Hi!</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber>{(num: number) => <div>Today's number num is {num}</div>}</TextWithNumber>
    </div>
  );
}

export default App;
