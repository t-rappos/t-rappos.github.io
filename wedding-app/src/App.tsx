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
      <div style={{textAlign: "left"}}>
        <h2>Our Story</h2>
        <q style={{}}>Love is not something you go out and look for. Love finds you, and when it does, ready or not, it’ll be the best thing to ever happens to you.</q>
        <br/>
        <br/>
        <p>Tom and Vicky danced into each other’s lives at the Spice Market nightclub on Friday 2nd March to the tender sounds of early 2000’s RnB. They wow-ed each other with what they both considered to be their best dance moves (to the consternation of fellow dancers who had to dodge their over-enthusiastic arm waving), and romance was born.</p>
        <p>When the music ran out, they adjourned to a nearby ramen restaurant. Here they continued to bond over their common interests – including a shared love for all things noodle. Vicky’s grand romantic gesture (ordering extra noodles for Tom) was well received and the two decided they should go on a date.</p>
        <p>The dinner (Malaysian noodles this time) and movie date was a success – unless you count Vicky sleeping through half the movie because she was too shy to tell Tom that she was too old for a 9.30pm movie on a weeknight. All the more popcorn for Tom!</p>
        <p>The pair continued to date and slowly fell in love. Each finding affection, unwavering support and a best friend in the other.</p>
        <p>On Thursday 18th August 2022, Vicky and Tom look forward to sharing their love with you at their wedding.</p>
      </div>
    </>
  </Section>

  <Section id="section-b">
    <div style={{textAlign: "left"}}>
      <img src="/Conservatory-1.jpg" alt="image" />
      <h2>Ceremony</h2>
      <ul>
        <li>Thursday 18th August 2022</li>
        <li>From 5.30pm</li>
        <li><a href="https://whatson.melbourne.vic.gov.au/things-to-do/the-conservatory" target="_blank">The Conservatory, Fitzroy Gardens.</a></li>
        <li>298 Wellington Parade, East Melbourne VIC 3002</li>
      </ul>
      <img src="/map1.png" alt="map"/>
      <ul>
        <li>A. Conservatory, Fitzroy Gardens (Ceremony venue).</li>
        <li>B. The Emerald Peacock (Reception venue).</li>
        <li>C. Flinders Street Station.</li>
        <li>D. Parliament Station.</li>
        <li>E. Tram stop - Lansdowne St/Wellington Pde 9</li>
        <li>F. Tram stop - Spring Street - Stop 8</li>
        <li>G. Public toilet</li>
        <li>H. Public Toilet</li>
        <li>I. The Spice Market</li>
      </ul>

      <h3>Parking</h3>
      <p>Nearby street parking is limited and we encourage you to use public transport if possible.</p>
      <p>There are several multi-storey car parks located within walking distance if required.</p>

      <h3>Public Transport</h3>
      <p>The nearest train stations are :</p>
      <ul>
        <li>- Parliament Station (then approximate 10 minute walk to the ceremony venue).</li>
        <li>- Flinders Street Station (then approximate 15 minute walk or 10 minute tram ride).</li>
        <li>- There are also trams along Collins Street to Spring street (then approximate 5 minute walk).</li>
      </ul>
      <p>
        Google Maps or PTV Journey Planner (
        ) are both helpful websites to plan your travel to the wedding.
      </p>

      <h3>Attire</h3>
      <p>Dress code: Cocktail.</p>
      <p>Due to the unique and intimate nature of the Conservatory, the wedding ceremony will be a standing ceremony. You may wish to consider this (and the walk to/from the venue) when selecting your footwear.</p>
      <p>While both the ceremony and reception venues are indoors, we recommend you bring a warm coat for travel to and between the venues. </p>
          
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
