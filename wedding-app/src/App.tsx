import React from 'react';
import { Desktop, Mobile, NotMobile, Tablet } from './components/Responsive';
import NavBar from './components/NavBar';
import Section from './components/Section';
import './App.css';
import { Gradient } from "./gradient"

setTimeout(()=>{
const gradient = new Gradient();
gradient.initGradient("#gradient-canvas");

}, 500);

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const aboutUs = (
<div style={{textAlign: "left"}}>
<h2>Our Story</h2>
<blockquote style={{textAlign: "right"}}>Love is not something you go out and look for. Love finds you, and when it does, ready or not, it’ll be the best thing to ever happens to you.</blockquote>
<p>Tom and Vicky danced into each other’s lives at the Spice Market nightclub on Friday 2nd March to the tender sounds of early 2000’s RnB. They wow-ed each other with what they both considered to be their best dance moves (to the consternation of fellow dancers who had to dodge their over-enthusiastic arm waving), and romance was born.</p>
<p>When the music ran out, they adjourned to a nearby ramen restaurant. Here they continued to bond over their common interests – including a shared love for all things noodle. Vicky’s grand romantic gesture (ordering extra noodles for Tom) was well received and the two decided they should go on a date.</p>
<p>The dinner (Malaysian noodles this time) and movie date was a success – unless you count Vicky sleeping through half the movie because she was too shy to tell Tom that she was too old for a 9.30pm movie on a weeknight. All the more popcorn for Tom!</p>
<p>The pair continued to date and slowly fell in love. Each finding affection, unwavering support and a best friend in the other.</p>
<p>On Thursday 18th August 2022, Vicky and Tom look forward to sharing their love with you at their wedding.</p>
</div>
);

const navbar = (<NavBar
  links={[{ id: "section-a", text: "Us" },
  { id: "section-b", text: "Ceremony" },
  { id: "section-c", text: "Reception" },
  { id: "section-d", text: "Gifts" },
  { id: "section-1", text: "Bridal Party" },
  { id: "section-2", text: "FAQ" },
  { id: "section-e", text: "RSVP" }
  ]}
/>);

const daysToGo = Math.floor(( new Date("08/18/2022").getTime() - Date.now())/(1000 * 3600 * 24));

const content = (<>  
  <>
    <h1>Vicky & Thomas</h1>
    <h2>August 18, 2022. Melbourne</h2>
    <h2>{ daysToGo } Days to go </h2>
    <br/>
  </>

  <Section id="section-a">
    <>
      <img src="/blank.png" alt="image" />
      {aboutUs}
    </>
  </Section>

  <Section id="section-b">
    <div style={{textAlign: "right"}}>
      <img src="/blank.png" alt="image" />
      <p>{"About the ceremony:    " + words}</p>
      <img src="/map1.png" alt="map"/>
    </div>
  </Section>

  <Section id="section-c" >

    <div>
      <img src="/blank.png" alt="image" />
      <p>{"About the reception:    " + words}</p>
    </div>

  </Section>

  <Section id="section-d" >
    <div style={{textAlign: "right"}}>
      <p>{"About the gifts:    " + words}</p>
    </div>
  </Section>

  <Section id="section-1" >


    <div>
      <img src="/blank.png" alt="image" />
      <p>{"Bridal Party:    " + words}</p>
    </div>

  </Section>
  
  <Section id="section-2">
    <div style={{textAlign: "right"}}>
      <p>{"FAQs:    " + words}</p>
    </div>
  </Section>

  <Section id="section-e" >
    
      <br/>
      <p>{"RSVP HERE:     " + words}</p>
      <p>To RSVP please click the button below to  fill out the Google Form. &nbsp; &nbsp;</p>
      <br/>
      <br/>
      <br/>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCk8j6b3V31RYWIWF26q0qB3v8UIGGG5kWl__VZUhT2caP-Q/viewform?usp=sf_link" target="_blank">
        <button className='myButton'>RSVP Here</button>
      </a>
   
  </Section>

  <div style={{ paddingBottom: "600px" }}>

  </div>
  
</>);

const background = (<canvas id="gradient-canvas"></canvas>);

function App() {
  return (
    <>
      <Mobile>
        <div className="App">
          {background}
          {navbar}
          <br/>
          <br/>
          <br/>
          {content}
        </div>
      </Mobile>
      <NotMobile>
        <div className="App" style={{ width: "100%" }}>
          {background}
          <div style={{ maxWidth: "800px", display: "flex", alignSelf: "center", justifySelf: "center" }}>
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
