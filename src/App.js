import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
// import katie from "./Components/katie-zaferes.png";
import Data from "./Data";
import "./App.css";

function App() {
  const dataElements = Data.map((data) => {
    return (
      <Card
      key={data.id}
      data={data}
      />
    );
  });

  return (
    <div>
      <Nav />
      <Hero />
      <section className="list">
          {dataElements}
      </section>
    </div>
  );
}

export default App;
