import React from 'react';
import { Desktop, Mobile, NotMobile, Tablet } from './components/Responsive';
import NavBar from './components/NavBar';
import Section from './components/Section';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
      <Carousel  showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}  >
          <div>
              <img src="/pic01.jpg" />
          </div>
          <div>
              <img src="/pic02.jpg" />
          </div>
          <div>
              <img src="/pic03.jpg" />
          </div>
          <div>
              <img src="/pic04.jpg" />
          </div>
          <div>
              <img src="/pic05.jpg" />
          </div>
          <div>
              <img src="/pic06.jpg" />
          </div>
          <div>
              <img src="/pic07.jpg" />
          </div>
          <div>
              <img src="/pic08.jpg" />
          </div>
          <div>
              <img src="/pic09.jpg" />
          </div>
          <div>
              <img src="/pic10.jpg" />
          </div>
          <div>
              <img src="/pic11.jpg" />
          </div>
          <div>
              <img src="/pic12.jpg" />
          </div>
      </Carousel>
      <div style={{textAlign: "left"}}>
        <h2>Our Story</h2>
        <q style={{}}>Love is not something you go out and look for. Love finds you, and when it does, ready or not, it’ll be the best thing to ever happens to you.</q>
        <br/>
        <br/>
        <p>Tom and Vicky danced into each other’s lives at the Spice Market nightclub on Friday 2nd March 2018 to the tender sounds of early 2000’s RnB. They wow-ed each other with what they both considered to be their best dance moves (to the consternation of fellow dancers who had to dodge their over-enthusiastic arm waving), and romance was born.</p>
        <p>When the music ran out, they adjourned to a nearby ramen restaurant. Here they continued to bond over their common interests – including a shared love for all things noodle. Vicky’s grand romantic gesture (ordering extra noodles for Tom) was well received and the two decided they should go on a date.</p>
        <p>The dinner (Malaysian noodles this time) and movie date was a success – unless you count Vicky falling asleep because she was too shy to tell Tom that a 9.30pm movie was far past her bedtime. All the more popcorn for Tom!</p>
        <p>Slowly but surely Tom and Vicky grew closer and fell in love. Each finding affection, unwavering support and a best friend in the other.</p>
        <p>On Thursday 18th August 2022, Vicky and Tom look forward to sharing their love with you at their wedding.</p>
      </div>
    </>
  </Section>

  <Section id="section-b">
    <div style={{textAlign: "left"}}>
      <h2>Ceremony</h2>
      <img src="/Conservatory-1.jpg" alt="image" />
      <br/>
      <br/>
      <ul>
        <li>Thursday 18th August 2022</li>
        <li>From 5.30pm</li>
        <li><a href="https://whatson.melbourne.vic.gov.au/things-to-do/the-conservatory" target="_blank">The Conservatory, Fitzroy Gardens.</a></li>
        <li>298 Wellington Parade, East Melbourne VIC 3002</li>
      </ul>
      <br/>
      <p>{words}</p>
      <img src="/map1.png" alt="map" id="map"/>
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
      <p>Nearby street parking may be limited.</p>
      <p>There are several multi-storey car parks located within walking distance if required.</p>

      <h3>Public Transport</h3>
      <p>We encourage you to use public transport if possible.</p>
      <p>The nearest train stations are Parliament Station and Flinders Street Station. </p>
      <p>There are also trams along Collins Street and Flinders Street that stop a short walk from the ceremony venue.</p>
      <p>
        Google Maps or <a href="https://www.ptv.vic.gov.au/journey" >PTV Journey Planner </a> are both helpful websites to plan your travel to the wedding.
      </p>

      <h3>Attire</h3>
      <p>Dress code: Cocktail.</p>
      <p>Due to the unique and intimate nature of the Conservatory, the wedding ceremony will be a standing ceremony. You may wish to consider this (and the walk to/from the venue) when selecting your footwear.</p>
      <p>While both the ceremony and reception venues are indoors, we recommend you bring a warm coat for travel to and between the venues. </p>
          
    </div>
  </Section>

  <Section id="section-c" >
    <div style={{textAlign: "left"}}>      
      <h2>Reception</h2>
      <img src="/Peacock+Lounge+1.jfif" alt="reception" />
      <ul>
        <br/>
        <li>From 7pm hosted at <a href="https://www.theemeraldpeacock.com/">The Peacock Lounge, The Emerald Peacock</a></li>
        <li>233 Lonsdale St, Melbourne VIC 3000</li>
      </ul>
      <br/>
      <p>We look forward to celebrating with you at our cocktail style wedding reception. Featuring ample comfortable lounge seating, there will be plenty of opportunities for you to rest your feet before taking to the dance floor.</p>

      <h3>Transport between Ceremony and Reception venue</h3>
      <p>There are a variety of options available to travel between the wedding ceremony and reception venue. These options can be viewed on Google Maps.</p>

      <p>Walking:</p>
      <ul>
        <li>• Via Collins St and Russell St – approximately 15-20 minutes</li>
        <li>• Via Spring St and Lonsdale St – approximately 20 minutes</li>
      </ul>

      <p>Tram:</p>
      <ul>
        <li>• Walk to Collins St (8 minutes), Tram to Swanston St (4 minutes), walk 7 minutes.</li>
        <li>• Walk to Bourke St (10 minutes), tram to Swanston St (3 minutes), walk 3 minutes.</li>
      </ul>

      <p>Car:</p>
      <ul>
        <li>• 5 to 10 minutes (depending on traffic)</li>
        <li>• Uber fare: $12 to $25 (depending on demand)</li>
      </ul>

      <h3>Car Parking:</h3>
      <ul>
        <li>• <a href="https://www.theemeraldpeacock.com/parking-1">Pre-booking offer at 59 Lonsdale Street Car Park Parking</a></li>
        <li>• <a href="https://www.wilsonparking.com.au/parking-locations/victoria/melbourne-cbd/qv-180-lonsdale-street/">Wilson Parking at 180 Lonsdale St QV</a></li>
      </ul>

      <h3>Food & Beverages</h3>

      <p>We invite you to enjoy the many canapes and small bites offered by roving waitstaff. If you have any particular dietary requirements please note this when you RSVP.</p>
      <p>A hosted bar will be provided to our guests. We encourage our guests to make use of public transport, Taxi/Uber services or designated drivers to make sure everyone has a fun and safe night.</p>
    </div>

  </Section>

  <Section id="section-d" >
    <div style={{textAlign: "left"}}>
      <h2>Gifts</h2>
      <img src="/gift.webp" alt="gifts" />
      <br/>
      <br/>
      <p>Your presence at our wedding is the greatest gift of all.</p>
      <p>However, should you wish to honour us with a gift, a wishing well will be available at the reception for your contribution and best wishes.</p>
      <br/>
    </div>
  </Section>

  <Section id="section-1" >
    <div style={{textAlign: "left"}}>
      <h2>Maid of Honor: Natalie</h2>
      <img src="/natvicky.jpg" alt="image" />
      <br/>
      <br/>
      <p>When Natalie and Vicky first met over 12 years ago, it was friendship at first sight. 
        They have created so many fun memories during this time – many of which include afternoons spent at Arbory Bar enjoying an Aperol Spritz and truffle cheese fries together. 
        Vicky and Tom love Nat for her beautiful heart, kindness and cheeky sense of humour. They feel honoured to have Natalie stand with them on their special day.</p>
      <h2>Best Man: Andrew</h2>
      <img src="/blank.png" alt="image" />
      <br/>
      <br/>
      <p>
      {words}
      </p>
    </div>

  </Section>
  
  <Section id="section-2">
    <div style={{textAlign: "left"}}>
      <h2>FAQs</h2>
      <ul>
        <li><strong>I’m not from Melbourne, where should I stay?</strong></li>
        <li>As both wedding venues are located within the CBD, most hotels in the Melbourne CBD area will be within walking distance. Websites such as <a href="www.booking.com">booking.com</a> have a range of options available.</li>
        <br/>
        <li><strong>What time should I arrive at the ceremony?</strong></li>
        <li>We recommend that you arrive 5 to 10 minutes prior to the ceremony start time (5.30pm). This will allow you to get settled and greet other guests prior to the ceremony.</li>
        <br/>
        <li><strong>What will the weather be like?</strong></li>
        <li>The temperature in Melbourne during August is usually between 7 to 15 degrees Celsius. We suggest a warm coat for moving between the venues. Due to the unpredictable nature of Melbourne weather, a small umbrella may also be useful.</li>
        <br/>
        <li><strong>Can I bring my children?</strong></li>
        <li>While we love your children, unfortunately we are not able to accommodate children at our wedding.</li>
        <br/>
        <li><strong>I’m concerned I may not be comfortable standing for the wedding ceremony. What should I do?</strong></li>
        <li>While our ceremony will be a short one, we want all our guests to be comfortable. Please contact us directly to discuss your concerns.</li>
        <br/>
        <li><strong>Are there bathrooms at the ceremony venue?</strong></li>
        <li>Unfortunately there are no bathrooms inside the Fitzroy Gardens Conservatory. The nearest public toilet is located in the gardens on Lansdowne Street. <a href="#map">See G on the Map</a> </li>
        <br/>
        <li><strong>Can I take photos or record videos during the wedding?</strong></li>
        <li>
          The greatest gift you can give us today is to be truly present, so we respectfully request that you turn off your devices and enjoy our ceremony with us. You are more than welcome to take photos during the reception.
          If you would like to share your photos on social media please use our hashtag #tomandvicky18082022
        </li>
        <br/>
        <li><strong>Do you have a wedding registry?</strong></li>
        <li>Your presence at our wedding is the greatest gift of all. However, should you wish to honour us with a gift, a wishing well will be available at the reception for your contribution and best wishes.</li>
        <br/>
        <li><strong>What time will the reception end?</strong></li>
        <li>We anticipate the formal events (such as cutting the cake) to be completed by 9.30pm. However, the reception venue is licensed until 1am, so we invite you to join us on the dancefloor after the formalities are complete.</li>
        <br/>
        <li><strong>We would like to continue the party, where can we go?</strong></li>
        <li>There are many places in Melbourne that are open late if you would like to continue the fun. We recommend Section 8 (https://section8.com.au/) due to the close proximity to the Emerald Peacock.</li>
        <br/>
        <li><strong>How will you communicate any updated information or changes before the wedding?</strong></li>
        <li>Please ensure you leave your contact number and email when you RSVP. While we don’t anticipate any changes, this will allow us to easily contact you if required.</li>
      </ul>

    </div>
  </Section>

  <Section id="section-e" >
      <h2>RSVP</h2>
      <br/>
      <p>Please RSVP by <strong>Sunday 26th June 2022</strong>. </p>
      <p>If you have any queries or concerns that are not addressed via the RSVP form, please contact us directly.</p>
      <br/>
      <br/>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCk8j6b3V31RYWIWF26q0qB3v8UIGGG5kWl__VZUhT2caP-Q/viewform?usp=sf_link" target="_blank">
        <button className='myButton'>RSVP Here</button>
      </a>
      <br/>
      <br/>
      <br/> 
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
