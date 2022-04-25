import React from 'react';

import NavBar from './components/NavBar';
import Section from './components/Section';

import logo from './logo.svg';
import './App.css';

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <div style={{ maxWidth: "800px", display: "flex", alignSelf: "center", justifySelf: "center" }}>
        <NavBar
          links={[{ id: "section-a", text: "Us" },
          { id: "section-b", text: "Ceremony" },
          { id: "section-c", text: "Reception" },
          { id: "section-d", text: "Gifts" },
          { id: "section-e", text: "RSVP" }
          ]}
        />

        <div style={{ marginTop: "7vh" }}>

          <Section text={"About us: " + words} id="section-a" isLeft={true} textBelow={true}>
            <img width={800} height={800} />
          </Section>

          <Section text={"About the ceremony:    " + words} id="section-b" isLeft={false} textBelow={false}>
            <img width={800} height={800} />
          </Section>

          <Section text={"About the reception:    " + words} id="section-c" isLeft={true} textBelow={false}>
            <img width={800} height={800} />
          </Section>

          <Section text={"About the gifts:    " + words} id="section-d" isLeft={false} textBelow={false}>
            <img width={800} height={800} />
          </Section>

          <Section text={"RSVP HERE:     " + words} id="section-e" isLeft={true} textBelow={false}>
            <img width={800} height={800} />
          </Section>

          <Section text={""} id="section-f" isLeft={false} textBelow={false}>
            <div style={{ paddingBottom: "600px" }}></div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
