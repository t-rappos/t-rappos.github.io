import React from 'react';
import { Desktop, Mobile, NotMobile, Tablet } from './components/Responsive';
import NavBar from './components/NavBar';
import Section from './components/Section';
import './App.css';

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const navbar = (<NavBar
  links={[{ id: "section-a", text: "Us" },
  { id: "section-b", text: "Ceremony" },
  { id: "section-c", text: "Reception" },
  { id: "section-d", text: "Gifts" },
  { id: "section-e", text: "RSVP" }
  ]}
/>);

const content = (<>
  <Section text={"About us: " + words} id="section-a" isLeft={true} textBelow={true}>
    <img src="/blank.png" alt="image" />
  </Section>

  <Section text={"About the ceremony:    " + words} id="section-b" isLeft={false} textBelow={false}>
    <img src="/blank.png" alt="image" />
  </Section>

  <Section text={"About the reception:    " + words} id="section-c" isLeft={true} textBelow={false}>
    <img src="/blank.png" alt="image" />
  </Section>

  <Section text={"About the gifts:    " + words} id="section-d" isLeft={false} textBelow={false}>
    <img src="/blank.png" alt="image" />
  </Section>


  <Section text={"RSVP HERE:     " + words} id="section-e" isLeft={true} textBelow={false}>
    
      <br/>
      To RSVP please click the button below to  fill out the Google Form. &nbsp; &nbsp;
      <br/>
      <br/>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCk8j6b3V31RYWIWF26q0qB3v8UIGGG5kWl__VZUhT2caP-Q/viewform?usp=sf_link" target="_blank">
        <button className='myButton'>RSVP Here</button>
      </a>
   
  </Section>

  <Section text={""} id="section-f" isLeft={false} textBelow={false}>
    <div style={{ paddingBottom: "600px" }}></div>
  </Section>
</>);

function App() {
  return (
    <>
      <Mobile>
        <div className="App">
          {navbar}
          <div>Mobile</div>
          {content}
        </div>
      </Mobile>
      <NotMobile>
        <div className="App" style={{ width: "100%" }}>
         
          <div style={{ maxWidth: "800px", display: "flex", alignSelf: "center", justifySelf: "center" }}>
            <div>Not Mobile</div>
            {navbar}
            <div style={{ marginTop: "7vh" }}>
              {content}
            </div>
          </div>
        </div>
      </NotMobile>
    </>
  );
}

export default App;
