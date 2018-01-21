//************************************************************
// Storage for the home page form and image elements.
//************************************************************
var homeForm;
var homeImg;

//************************************************************
// Storage for the counts needed throughout the functions.
// Could create a closure but I hope this is okay to pass.
// I am so ready for this to be done.
//************************************************************
const countKeeper = {
  maxQuestions : 10,
  currentQuestion : 0,
  correctAnswers : 0,
  currentDBIndex : 1
  };

//************************************************************
// My database object containing all my data and images for
// all 50 states.  Yes, it is awesome.
//************************************************************
const DB = [
  {state: 'Alabama', capital: 'Montgomery', 
       choice1: 'Birmingham', 
       choice2: 'Montgomery',
       choice3: 'Huntsville',
       choice4: 'Mobile', answered: false,
      usCutout: 'https://state.1keydata.com/alabama.jpg',
   stateCutout: 'https://state.1keydata.com/alabama-state-map.jpg',
          flag: 'https://state.1keydata.com/alabama-state-flag.gif' },
  {state: 'Alaska', capital: 'Juneau',
       choice1: 'Juneau', 
       choice2: 'Anchorage', 
       choice3: 'Fairbanks',
       choice4: 'Sitka', answered: false,
      usCutout: 'https://state.1keydata.com/alaska.jpg',
   stateCutout: 'https://state.1keydata.com/alaska-state-map.jpg',
          flag: 'https://state.1keydata.com/alaska-state-flag.gif' },
  {state: 'Arizona', capital: 'Phoenix',
       choice1: 'Tucson', 
       choice2: 'Flagstaff',
       choice3: 'Phoenix', 
       choice4: 'Scottsdale', answered: false,
      usCutout: 'https://state.1keydata.com/arizona.jpg',
   stateCutout: 'https://state.1keydata.com/arizona-state-map.jpg',
          flag: 'https://state.1keydata.com/arizona-state-flag.jpg' },
  {state: 'Arkansas', capital: 'Little Rock',
       choice1: 'Fort Smith', 
       choice2: 'Fayetteville',
       choice3: 'Little Rock', 
       choice4: 'Springdale', answered: false,
      usCutout: 'https://state.1keydata.com/arkansas.jpg',
   stateCutout: 'https://state.1keydata.com/arkansas-state-map.jpg',
          flag: 'https://state.1keydata.com/arkansas-state-flag.jpg' },
  {state: 'California', capital: 'Sacramento',
       choice1: 'Sacramento', 
       choice2: 'Los Angeles', 
       choice3: 'San Francisco',
       choice4: 'San Diego', answered: false,
      usCutout: 'https://state.1keydata.com/california.jpg',
   stateCutout: 'https://state.1keydata.com/california-state-map.jpg',
          flag: 'https://state.1keydata.com/california-state-flag.gif' },
  {state: 'Colorado', capital: 'Denver',
       choice1: 'Colorado Springs', 
       choice2: 'Aurora',
       choice3: 'Fort Collins', 
       choice4: 'Denver', answered: false,
      usCutout: 'https://state.1keydata.com/colorado.jpg',
   stateCutout: 'https://state.1keydata.com/colorado-state-map.jpg',
          flag: 'https://state.1keydata.com/colorado-state-flag.gif' },
  {state: 'Connecticut', capital: 'Hartford',
       choice1: 'Hartford', 
       choice2: 'Bridgeport', 
       choice3: 'New Haven',
       choice4: 'Stamford', answered: false ,
      usCutout: 'https://state.1keydata.com/connecticut.jpg',
   stateCutout: 'https://state.1keydata.com/connecticut-state-map.jpg',
          flag: 'https://state.1keydata.com/connecticut-state-flag.jpg' },
  {state: 'Delaware', capital: 'Dover',
       choice1: 'Wilmington', 
       choice2: 'Newark',
       choice3: 'Dover',
       choice4: 'Bear', answered: false,
      usCutout: 'https://state.1keydata.com/delaware.jpg',
   stateCutout: 'https://state.1keydata.com/delaware-state-map.jpg',
          flag: 'https://state.1keydata.com/delaware-state-flag.gif' },
  {state: 'Florida', capital: 'Talahassee',
       choice1: 'Jacksonville', 
       choice2: 'Miami',
       choice3: 'Talahassee',
       choice4: 'Tampa', answered: false,
      usCutout: 'https://state.1keydata.com/florida.jpg',
   stateCutout: 'https://state.1keydata.com/florida-state-map.jpg',
          flag: 'https://state.1keydata.com/florida-state-flag.jpg' },
  {state: 'Georgia', capital: 'Atlanta',
       choice1: 'Augusta', 
       choice2: 'Atlanta', 
       choice3: 'Columbus',
       choice4: 'Savannah', answered: false,
      usCutout: 'https://state.1keydata.com/georgia.jpg',
   stateCutout: 'https://state.1keydata.com/georgia-state-map.jpg',
          flag: 'https://state.1keydata.com/georgia-state-flag.jpg' },
  {state: 'Hawaii', capital: 'Honolulu',
       choice1: 'Pearl City', 
       choice2: 'Hilo',
       choice3: 'Honolulu', 
       choice4: 'Kailua', answered: false,
      usCutout: 'https://state.1keydata.com/hawaii.jpg',
   stateCutout: 'https://state.1keydata.com/hawaii-state-map.jpg',
          flag: 'https://state.1keydata.com/hawaii-state-flag.gif' },
  {state: 'Idaho', capital: 'Boise',
       choice1: 'Boise', 
       choice2: 'Nampa', 
       choice3: 'Idaho Falls',
       choice4: 'Meridian', answered: false,
      usCutout: 'https://state.1keydata.com/idaho.jpg',
   stateCutout: 'https://state.1keydata.com/idaho-state-map.jpg',
          flag: 'https://state.1keydata.com/idaho-state-flag.jpg' },
  {state: 'Illinois', capital: 'Springfield',
       choice1: 'Chicago', 
       choice2: 'Aurora',
       choice3: 'Rockford', 
       choice4: 'Springfield', answered: false,
      usCutout: 'https://state.1keydata.com/illinois.jpg',
   stateCutout: 'https://state.1keydata.com/illinois-state-map.jpg',
          flag: 'https://state.1keydata.com/illinois-state-flag.jpg' },
  {state: 'Indiana', capital: 'Indianapolis',
       choice1: 'Fort Wayne', 
       choice2: 'Evansville',
       choice3: 'Indianapolis', 
       choice4: 'Hammond', answered: false,
      usCutout: 'https://state.1keydata.com/indiana.jpg',
   stateCutout: 'https://state.1keydata.com/indiana-state-map.jpg',
          flag: 'https://state.1keydata.com/indiana-state-flag.gif' },
  {state: 'Iowa', capital: 'Des Moines',
       choice1: 'Cedar Rapids', 
       choice2: 'Des Moines', 
       choice3: 'Davenport',
       choice4: 'Sioux City', answered: false,
      usCutout: 'https://state.1keydata.com/iowa.jpg',
   stateCutout: 'https://state.1keydata.com/iowa-state-map.jpg',
          flag: 'https://state.1keydata.com/iowa-state-flag.jpg' },
  {state: 'Kansas', capital: 'Topeka',
       choice1: 'Wichita', 
       choice2: 'Overland Park',
       choice3: 'Topeka', 
       choice4: 'Kansas City', answered: false,
      usCutout: 'https://state.1keydata.com/kansas.jpg',
   stateCutout: 'https://state.1keydata.com/kansas-state-map.jpg',
          flag: 'https://state.1keydata.com/kansas-state-flag.jpg' },
  {state: 'Kentucky', capital: 'Frankfort',
       choice1: 'Frankfort', 
       choice2: 'Louisville', 
       choice3: 'Lexington',
       choice4: 'Covington', answered: false,
      usCutout: 'https://state.1keydata.com/kentucky.jpg',
   stateCutout: 'https://state.1keydata.com/kentucky-state-map.jpg',
          flag: 'https://state.1keydata.com/kentucky-state-flag.jpg' },
  {state: 'Louisiana', capital: 'Baton Rouge',
       choice1: 'New Orleans', 
       choice2: 'Shreveport',
       choice3: 'Baton Rouge', 
       choice4: 'Lafayette', answered: false,
      usCutout: 'https://state.1keydata.com/louisiana.jpg',
   stateCutout: 'https://state.1keydata.com/louisiana-state-map.jpg',
          flag: 'https://state.1keydata.com/louisiana-state-flag.jpg' },
  {state: 'Maine', capital: 'Augusta',
       choice1: 'Portland', 
       choice2: 'Bangor',
       choice3: 'Auburn', 
       choice4: 'Augusta', answered: false,
      usCutout: 'https://state.1keydata.com/maine.jpg',
   stateCutout: 'https://state.1keydata.com/maine-state-map.jpg',
          flag: 'https://state.1keydata.com/maine-state-flag.jpg' },
  {state: 'Maryland', capital: 'Annapolis',
       choice1: 'Baltimore', 
       choice2: 'Annapolis', 
       choice3: 'Rockville',
       choice4: 'Gaithersburg', answered: false,
      usCutout: 'https://state.1keydata.com/maryland.jpg',
   stateCutout: 'https://state.1keydata.com/maryland-state-map.jpg',
          flag: 'https://state.1keydata.com/maryland-state-flag.jpg' },
  {state: 'Massachusetts', capital: 'Boston',
       choice1: 'Worcester', 
       choice2: 'Springfield',
       choice3: 'Cambridge', 
       choice4: 'Boston', answered: false,
      usCutout: 'https://state.1keydata.com/massachusetts.jpg',
   stateCutout: 'https://state.1keydata.com/massachusetts-state-map.jpg',
          flag: 'https://state.1keydata.com/massachusetts-state-flag.jpg' },
  {state: 'Michigan', capital: 'Lansing',
       choice1: 'Lansing', 
       choice2: 'Detroit', 
       choice3: 'Grand Rapids',
       choice4: 'Warren', answered: false,
      usCutout: 'https://state.1keydata.com/michigan.jpg',
   stateCutout: 'https://state.1keydata.com/michigan-state-map.jpg',
          flag: 'https://state.1keydata.com/michigan-state-flag.jpg' },
  {state: 'Minnesota', capital: 'St. Paul',
       choice1: 'Minneapolis', 
       choice2: 'St. Paul', 
       choice3: 'Rochester',
       choice4: 'Duluth', answered: false,
      usCutout: 'https://state.1keydata.com/minnesota.jpg',
   stateCutout: 'https://state.1keydata.com/minnesota-state-map.jpg',
          flag: 'https://state.1keydata.com/minnesota-state-flag.jpg' },
  {state: 'Mississippi', capital: 'Jackson',
       choice1: 'Jackson', 
       choice2: 'Gulfport', 
       choice3: 'Biloxi',
       choice4: 'Hattiesburg', answered: false,
      usCutout: 'https://state.1keydata.com/mississippi.jpg',
   stateCutout: 'https://state.1keydata.com/mississippi-state-map.jpg',
          flag: 'https://state.1keydata.com/mississippi-state-flag.jpg' },
  {state: 'Missouri', capital: 'Jefferson City',
       choice1: 'Kansas City', 
       choice2: 'St. Louis',
       choice3: 'Jefferson City', 
       choice4: 'Springfield', answered: false,
      usCutout: 'https://state.1keydata.com/missouri.jpg',
   stateCutout: 'https://state.1keydata.com/missouri-state-map.jpg',
          flag: 'https://state.1keydata.com/missouri-state-flag.jpg' },
  {state: 'Montana', capital: 'Helena',
       choice1: 'Billings', 
       choice2: 'Missoula',
       choice3: 'Great Falls', 
       choice4: 'Helena', answered: false,
      usCutout: 'https://state.1keydata.com/montana.jpg',
   stateCutout: 'https://state.1keydata.com/montana-state-map.jpg',
          flag: 'https://state.1keydata.com/montana-state-flag.jpg' },
  {state: 'Nebraska', capital: 'Lincoln',
       choice1: 'Lincoln', 
       choice2: 'Omaha', 
       choice3: 'Bellevue',
       choice4: 'Grand Island', answered: false,
      usCutout: 'https://state.1keydata.com/nebraska.jpg',
   stateCutout: 'https://state.1keydata.com/nebraska-state-map.jpg',
          flag: 'https://state.1keydata.com/nebraska-state-flag.jpg' },
  {state: 'Nevada', capital: 'Carson City',
       choice1: 'Las Vegas', 
       choice2: 'Reno',
       choice3: 'Carson City', 
       choice4: 'Henderson', answered: false,
      usCutout: 'https://state.1keydata.com/nevada.jpg',
   stateCutout: 'https://state.1keydata.com/nevada-state-map.jpg',
          flag: 'https://state.1keydata.com/nevada-state-flag.jpg' },
  {state: 'New Hampshire', capital: 'Concord',
       choice1: 'Manchester', 
       choice2: 'Nashua',
       choice3: 'Concord', 
       choice4: 'Dover', answered: false,
      usCutout: 'https://state.1keydata.com/new-hampshire.jpg',
   stateCutout: 'https://state.1keydata.com/new-hampshire-state-map.jpg',
          flag: 'https://state.1keydata.com/new-hampshire-state-flag.jpg' },
  {state: 'New Jersey', capital: 'Trenton',
       choice1: 'Newark', 
       choice2: 'Jersey City',
       choice3: 'Edison', 
       choice4: 'Trenton', answered: false,
      usCutout: 'https://state.1keydata.com/new-jersey.jpg',
   stateCutout: 'https://state.1keydata.com/new-jersey-state-map.jpg',
          flag: 'https://state.1keydata.com/new-jersey-state-flag.jpg' },
  {state: 'New Mexico', capital: 'Santa Fe',
       choice1: 'Albuquerque', 
       choice2: 'Santa Fe', 
       choice3: 'Las Cruces',
       choice4: 'Roswell', answered: false,
      usCutout: 'https://state.1keydata.com/new-mexico.jpg',
   stateCutout: 'https://state.1keydata.com/new-mexico-state-map.jpg',
          flag: 'https://state.1keydata.com/new-mexico-state-flag.jpg' },
  {state: 'New York', capital: 'Albany',
       choice1: 'Albany', 
       choice2: 'New York', 
       choice3: 'Buffalo',
       choice4: 'Rochester', answered: false,
      usCutout: 'https://state.1keydata.com/new-york.jpg',
   stateCutout: 'https://state.1keydata.com/new-york-state-map.jpg',
          flag: 'https://state.1keydata.com/new-york-state-flag.jpg' },
  {state: 'North Carolina', capital: 'Raleigh',
       choice1: 'Charlotte', 
       choice2: 'Greensboro',
       choice3: 'Winston-Salem', 
       choice4: 'Raleigh', answered: false,
      usCutout: 'https://state.1keydata.com/north-carolina.jpg',
   stateCutout: 'https://state.1keydata.com/north-carolina-state-map.jpg',
          flag: 'https://state.1keydata.com/north-carolina-state-flag.jpg' },
  {state: 'North Dakota', capital: 'Bismark',
       choice1: 'Fargo', 
       choice2: 'Augusta', 
       choice3: 'Grand Forks',
       choice4: 'Minot', answered: false,
      usCutout: 'https://state.1keydata.com/north-dakota.jpg',
   stateCutout: 'https://state.1keydata.com/north-dakota-state-map.jpg',
          flag: 'https://state.1keydata.com/north-dakota-state-flag.jpg' },
  {state: 'Ohio', capital: 'Columbus',
       choice1: 'Cleveland', 
       choice2: 'Cincinnati',
       choice3: 'Bismark', 
       choice4: 'Toledo', answered: false,
      usCutout: 'https://state.1keydata.com/ohio.jpg',
   stateCutout: 'https://state.1keydata.com/ohio-state-map.jpg',
          flag: 'https://state.1keydata.com/ohio-state-flag.jpg' },
  {state: 'Oklahoma', capital: 'Oklahoma City',
       choice1: 'Tulsa', 
       choice2: 'Oklahoma City', 
       choice3: 'Norman',
       choice4: 'Lawton', answered: false,
      usCutout: 'https://state.1keydata.com/oklahoma.jpg',
   stateCutout: 'https://state.1keydata.com/oklahoma-state-map.jpg',
          flag: 'https://state.1keydata.com/oklahoma-state-flag.jpg' },
  {state: 'Oregon', capital: 'Salem',
       choice1: 'Portland', 
       choice2: 'Eugene',
       choice3: 'Gresham', 
       choice4: 'Salem', answered: false,
      usCutout: 'https://state.1keydata.com/oregon.jpg',
   stateCutout: 'https://state.1keydata.com/oregon-state-map.jpg',
          flag: 'https://state.1keydata.com/oregon-state-flag.jpg' },
  {state: 'Pennsylvania', capital: 'Harrisburg',
       choice1: 'Harrisburg', 
       choice2: 'Philadelphia', 
       choice3: 'Pittsburgh',
       choice4: 'Erie', answered: false,
      usCutout: 'https://state.1keydata.com/pennsylvania.jpg',
   stateCutout: 'https://state.1keydata.com/pennsylvania-state-map.jpg',
          flag: 'https://state.1keydata.com/pennsylvania-state-flag.gif' },
  {state: 'Rhode Island', capital: 'Providence',
       choice1: 'Providence', 
       choice2: 'Warwick', 
       choice3: 'Cranston',
       choice4: 'Pawtucket', answered: false,
      usCutout: 'https://state.1keydata.com/rhode-island.jpg',
   stateCutout: 'https://state.1keydata.com/rhode-island-state-map.jpg',
          flag: 'https://state.1keydata.com/rhode-island-state-flag.jpg' },
  {state: 'South Carolina', capital: 'Columbia',
       choice1: 'Charleston', 
       choice2: 'Mount Pleasant',
       choice3: 'Rock Hill', 
       choice4: 'Columbia', answered: false,
      usCutout: 'https://state.1keydata.com/south-carolina.jpg',
   stateCutout: 'https://state.1keydata.com/south-carolina-state-map.jpg',
          flag: 'https://state.1keydata.com/south-carolina-state-flag.jpg' },
  {state: 'South Dakota', capital: 'Pierre',
       choice1: 'Sioux Falls', 
       choice2: 'Pierre', 
       choice3: 'Rapid City',
       choice4: 'Aberdeen', answered: false,
      usCutout: 'https://state.1keydata.com/south-dakota.jpg',
   stateCutout: 'https://state.1keydata.com/south-dakota-state-map.jpg',
          flag: 'https://state.1keydata.com/south-dakota-state-flag.jpg' },
  {state: 'Tennessee', capital: 'Nashville',
       choice1: 'Memphis', 
       choice2: 'Knoxville',
       choice3: 'Nashville', 
       choice4: 'Chattanooga', answered: false,
      usCutout: 'https://state.1keydata.com/tennessee.jpg',
   stateCutout: 'https://state.1keydata.com/tennessee-state-map.jpg',
          flag: 'https://state.1keydata.com/tennessee-state-flag.gif' },
  {state: 'Texas', capital: 'Austin',
       choice1: 'Austin', 
       choice2: 'Houston', 
       choice3: 'San Antonio',
       choice4: 'Dallas', answered: false,
      usCutout: 'https://state.1keydata.com/texas.jpg',
   stateCutout: 'https://state.1keydata.com/texas-state-map.jpg',
          flag: 'https://state.1keydata.com/texas-state-flag.jpg' },
  {state: 'Utah', capital: 'Salt Lake City',
       choice1: 'Provo', 
       choice2: 'Salt Lake City', 
       choice3: 'Orem',
       choice4: 'West Valley City', answered: false,
      usCutout: 'https://state.1keydata.com/utah.jpg',
   stateCutout: 'https://state.1keydata.com/utah-state-map.jpg',
          flag: 'https://state.1keydata.com/utah-state-flag.jpg' },
  {state: 'Vermont', capital: 'Montpelier',
       choice1: 'Burlington', 
       choice2: 'Essex',
       choice3: 'Montpelier', 
       choice4: 'Colchester', answered: false,
      usCutout: 'https://state.1keydata.com/vermont.jpg',
   stateCutout: 'https://state.1keydata.com/vermont-state-map.jpg',
          flag: 'https://state.1keydata.com/vermont-state-flag.jpg' },
  {state: 'Virginia', capital: 'Richmond',
       choice1: 'Richmond', 
       choice2: 'Virginia Beach', 
       choice3: 'Norfolk',
       choice4: 'Arlington', answered: false,
      usCutout: 'https://state.1keydata.com/virginia.jpg',
   stateCutout: 'https://state.1keydata.com/virginia-state-map.jpg',
          flag: 'https://state.1keydata.com/virginia-state-flag.jpg' },
  {state: 'Washington', capital: 'Olympia',
       choice1: 'Seattle', 
       choice2: 'Spokane',
       choice3: 'Olympia', 
       choice4: 'Tacoma', answered: false,
      usCutout: 'https://state.1keydata.com/washington.jpg',
   stateCutout: 'https://state.1keydata.com/washington-state-map.jpg',
          flag: 'https://state.1keydata.com/washington-state-flag.jpg' },
  {state: 'West Virginia', capital: 'Charleston',
       choice1: 'Huntington', 
       choice2: 'Parkersburg',
       choice3: 'Wheeling',
       choice4: 'Charleston', answered: false,
      usCutout: 'https://state.1keydata.com/west-virginia.jpg',
   stateCutout: 'https://state.1keydata.com/west-virginia-state-map.jpg',
          flag: 'https://state.1keydata.com/west-virginia-state-flag.jpg' },
  {state: 'Wisconsin', capital: 'Madison',
       choice1: 'Milwaukee', 
       choice2: 'Green Bay',
       choice3: 'Madison', 
       choice4: 'Kenosha', answered: false,
      usCutout: 'https://state.1keydata.com/wisconsin.jpg',
   stateCutout: 'https://state.1keydata.com/wisconsin-state-map.jpg',
          flag: 'https://state.1keydata.com/wisconsin-state-flag.jpg' },
  {state: 'Wyoming', capital: 'Cheyenne',
       choice1: 'Casper', 
       choice2: 'Cheyenne', 
       choice3: 'Laramie',
       choice4: 'Rock Springs', answered: false,
      usCutout: 'https://state.1keydata.com/wyoming.jpg',
   stateCutout: 'https://state.1keydata.com/wyoming-state-map.jpg',
          flag: 'https://state.1keydata.com/wyoming-state-flag.gif' },
];


//************************************************************
// This builds the summary page and displays it.  It also  
// creates the callback for the HOME button.
//************************************************************
function createSummaryPage(){
  var total = countKeeper.maxQuestions;
  var corrNum = countKeeper.correctAnswers;

  console.log(`createSummaryPage has been called.`);
 
  // Create the percentage value
  const percentage = Math.floor((corrNum/total) * 100);
  
  // Create the summary page document string of elements
  const summaryElements = `
      <div class='row'>
        <div class='col-12'>
          <form id='game-end' class='game-home'>
            <h2>Thank You For Playing!</h2>
            <h3>Your Score: ${corrNum} out of ${total}</h3>
            <h3>${percentage}%</h3>
            <button id='js-play' class='js-enable-button' form='game-end' name='play' autofocus>HOME</button>
          </form>
        </div>
      </div>`;
      
  // Add the summary page elements to the main html section.
  $(summaryElements).appendTo("main");
  
  // Add the callback for the HOME button.
  $('#game-end').on('click', '#js-play', event => {
    
    event.preventDefault();
    // remove the summary page elements
    $('form').remove();
    
    // reset the global variables
    countKeeper.maxQuestions = 10;
    countKeeper.currentQuestion = 0;
    countKeeper.correctAnswers = 0;
    countKeeper.currentDBIndex = 1;

    // add back in the home page elements.
    // Should not have to add the callback again.
    $(homeImg).appendTo('main');
    $(homeForm).appendTo('main');
  } );
}

//************************************************************
// Remove the images and the form from the main element.
// This will remove the question page.
//************************************************************
function removeQuestionPage(){
  $('.state-loc').remove();
  $('#game-play').remove();
}

//************************************************************
// Update the question page with the new question info and the new 
// question count and number of correct and incorrect answers.
//************************************************************
function updateQuestionPage(){
  var count = countKeeper.currentQuestion;
  var total = countKeeper.maxQuestions;
  var index = countKeeper.currentDBIndex;
 
  var value1, value2, value3, value4;

  console.log(`updateQuestionPage has been called.`);
  
  // Update the flag and US Map image with the current state, and update the caption accordingly.
  $('.js-flag').replaceWith(`<img class='js-flag' src=${DB[index].flag} height= 50px alt='${DB[index].state} flag'>`);
  $('.js-caption').replaceWith(`<figcaption class='js-caption'> ${DB[index].state} State Flag</figcaption>`);
  $('.js-us').replaceWith(`<img class='js-us' src=${DB[index].usCutout} height= 250px alt='U.S. Map with ${DB[index].state} highlighted'>`);
  
  // Update the current question number read-only text at the top of the page.
  $('.js-loc').replaceWith(`<p class='js-loc'>(Question ${count} of ${total})</p>`);
  
  // Update the question itself.
  $('.js-quest').replaceWith(`<legend class='js-quest'>What is the capital of ${DB[index].state}?</legend>`);
  
  // Update the multiple choice answers. First, set the value attribute.
  value1 = DB[index].choice1 == DB[index].capital ? 'correct' : 'incorrect';
  value2 = DB[index].choice2 == DB[index].capital ? 'correct' : 'incorrect';
  value3 = DB[index].choice3 == DB[index].capital ? 'correct' : 'incorrect';
  value4 = DB[index].choice4 == DB[index].capital ? 'correct' : 'incorrect';
    
  // Remove all spans and breaks.
  $('br').remove();
  $('span').remove();

  // Replaces the first thru fourth radio buttons.
  $('.js-1').replaceWith(`<label class='js-1'><input type='radio' name='questions' value=${value1} >${DB[index].choice1}</label> <span></span><br>`); 
  $('.js-2').replaceWith(`<label class='js-2'><input type='radio' name='questions' value=${value2} >${DB[index].choice2}</label> <span></span><br>`); 
  $('.js-3').replaceWith(`<label class='js-3'><input type='radio' name='questions' value=${value3} >${DB[index].choice3}</label> <span></span><br>`); 
  $('.js-4').replaceWith(`<label class='js-4'><input type='radio' name='questions' value=${value4} >${DB[index].choice4}</label> <span></span><br>`); 

}

//************************************************************
// Picks the next question and then calls 
// updateQuestionPage to modify the page with the data.
//************************************************************
function nextQuestion(){
  var count = countKeeper.currentQuestion;
  var total = countKeeper.maxQuestions;
  
  console.log(`nextQuestion has been called.`);
  console.log(`The question number is: ${count}`);
  
  // Pick a state-capital randomly.
  var question = [Math.floor(Math.random() * 50)];
  
  // find a question that has not been asked already.
  var limitSearch = 0;
  while ( DB[question].answered && limitSearch <100){
     question = [Math.floor(Math.random() * 50)]; 
     limitSearch++;
  } 

  // if it takes too long to randomly search, search
  // sequentially - this is not rocket science.
  var itemFound = false;
  for (let i=0; i<DB.length && !itemFound; i++)
  {
    if (DB[i].answered === false){
      itemFound = true;
      question = i;
    }
  }
  
  // update the DB index.
  countKeeper.currentDBIndex = question;
  
  console.log(`The next question is for the state capital of: ${DB[question].state}`);
  
  // Save off that this question has been selected.
  DB[question].answered = true;
  
  // Update the elements on the question page.
  updateQuestionPage();
}

//************************************************************
// Handle the NEXT button selection. Create the summary page
// if all questions have been answered, otherwise update the
// question page for the next question, disable the NEXT
// button and enable the toggle buttons adding a callback.
//************************************************************
var nextEventHandler = function(event){

  event.preventDefault();
  
  // Increment the current question number.
  countKeeper.currentQuestion = countKeeper.currentQuestion + 1;
  var count = countKeeper.currentQuestion;
  var total = countKeeper.maxQuestions;
  
  console.log('in NEXT callback');
  console.log(`count is: ${count}`);
    
  // If all questions have been answered, remove the
  // page and add the summary page.
  if (count > total ) {
    removeQuestionPage();
    createSummaryPage();
  }
  
  // Set up for the next question.
  else {
    nextQuestion();
  
    // disable the NEXT button.
    $('#js-next').attr("disabled",'true');
    $('#js-next').removeClass("js-enable-button");
    $('#js-next').addClass("js-disable-button");
    
    // enable the toggle buttons.
    $('.js-1').removeAttr('disabled');
    $('.js-2').removeAttr('disabled');
    $('.js-3').removeAttr('disabled');
    $('.js-4').removeAttr('disabled');
  
    // Add the callback for the radio buttons.
    $('input[type="radio"]').on('click', radioButtonEventHandler );
  }
};

//************************************************************
// Handle the RADIO button selection.  Disable the toggle
// buttons since a selection has been made and enable the
// NEXT button to go to the next question.  Also, determine
// if it was a correct or incorrect question and update
// accordingly.
//************************************************************
var radioButtonEventHandler = function(event){
  console.log('in radio button callback');
  event.preventDefault();
  
  var count   = countKeeper.currentQuestion;
  var index   = countKeeper.currentDBIndex;
  var corrNum = countKeeper.correctAnswers;

  // enable the NEXT button.
  $('#js-next').removeAttr("disabled");
  $('#js-next').removeClass("js-disable-button");
  $('#js-next').addClass("js-enable-button");

  // disable the toggle buttons.
  $('.js-1').attr('disabled','true');
  $('.js-2').attr('disabled','true');
  $('.js-3').attr('disabled','true');
  $('.js-4').attr('disabled','true');

  // Retrieve the value of the current selection.
  var valueState = $(event.currentTarget).val();

  // Highlight the correct answer in green and say correct.
  $( "input[value='correct']" ).parent().next().text('Correct!');
  $( "input[value='correct']" ).parent().next().addClass('correct-answer');


  // If the current selection is correct, increment correct count.
  // If it is incorrect, highlight in red, say wrong.
  if (valueState === 'correct') {
    console.log("the selection is correct");
    corrNum += 1;
  }
 
  else {
    console.log("the selection is incorrect");
    $(event.currentTarget).parent().next().text('Incorrect');
    $(event.currentTarget).parent().next().addClass('wrong-answer');
  }

  // update the global parameter
  countKeeper.correctAnswers = corrNum;

  // Update the image to the state cutout.
  $('.js-us').replaceWith(`<img class='js-us' src=${DB[index].stateCutout} height= 250px alt='Detailed Map of ${DB[index].state} highlighted'>`);

  // Update the status at the bottom of the page
  $('.js-status').replaceWith(`<footer class='js-status' role='contentinfo'>${corrNum} correct, ${(count - corrNum)} incorrect answers</footer>`);
};

//************************************************************
// This builds the question page and displays it.
// It also creates the callbacks for the radio and
// NEXT buttons.
// total is the total number of questions.
// index is the selected state for the question.
//************************************************************
function createQuestionPage(){
  var index = countKeeper.currentDBIndex;
  var total = countKeeper.maxQuestions;

  var value1, value2, value3, value4;
  
  console.log(`createQuestionPage has been called.`);
  
  // Set the value attribute for the state capital questions.
  value1 = DB[index].choice1 == DB[index].capital ? 'correct' : 'incorrect';
  value2 = DB[index].choice2 == DB[index].capital ? 'correct' : 'incorrect';
  value3 = DB[index].choice3 == DB[index].capital ? 'correct' : 'incorrect';
  value4 = DB[index].choice4 == DB[index].capital ? 'correct' : 'incorrect';

  // Create and append all the elements for the question page except
  // for the radio buttons.
  const questionElements = `
    <div class='row'>
      <div class='col-6'>
        <div class='state-loc'>
          <figure>
            <img class='js-flag' src=${DB[index].flag} height= 50px alt='${DB[index].state} flag'>
            <figcaption class='js-caption'> ${DB[index].state} State Flag</figcaption>
          </figure>
          <img class='js-us' src=${DB[index].usCutout} height= 250px alt='U.S. Map with ${DB[index].state} highlighted'>
        </div>
      </div>
      <div class='col-6'>
        <form id='game-play' class='js-game-play'>
            <p class='js-loc'>(Question 1 of ${total})</p>
            <fieldset class='js-rb'>
              <legend class='js-quest'>What is the capital of ${DB[index].state}?</legend>
              <label class='js-1'><input type='radio' name='questions' value=${value1} >${DB[index].choice1}</label> <span></span><br>
              <label class='js-2'><input type='radio' name='questions' value=${value2} >${DB[index].choice2}</label> <span></span><br>
              <label class='js-3'><input type='radio' name='questions' value=${value3} >${DB[index].choice3}</label> <span></span><br>
              <label class='js-4'><input type='radio' name='questions' value=${value4} >${DB[index].choice4}</label> <span></span><br>
            </fieldset>
            <button id='js-next' form='game-play' name='play' autofocus>NEXT</button>
            <footer class='js-status' role='contentinfo'></footer>
        </form>
      </div>
    </div>`;

    $(questionElements).appendTo("main");
  
    // grey-out the NEXT button.
    $('#js-next').attr('disabled','true');
    $('#js-next').addClass("js-disable-button");

    // Add the callback for the radio buttons.
    $('input[type="radio"]').on('click', radioButtonEventHandler );
    
    // Add the callback for the NEXT button.
    $('#game-play').on('click', '#js-next', nextEventHandler );
    
}
   
//************************************************************
// firstQuestion sets up for the initial question and then
// calls createQuestionPage to create the question page.
//************************************************************
function firstQuestion(){

  // increment current question count.
  countKeeper.currentQuestion = countKeeper.currentQuestion + 1;
  
  // Pick a state-capital randomly.
  countKeeper.currentDBIndex = [Math.floor(Math.random() * 50)];
  var question = countKeeper.currentDBIndex;
  
  // Save off that this question has been selected.
  DB[question].answered = true;
  
  // Add new elements for first question.
  createQuestionPage();
  
  console.log(`The first question is for the state capital of: ${DB[question].state}`);
}

//************************************************************
// When the PLAY button is selected, initiate game play!
//************************************************************
function onPlay(){
   
  // Save off the number of questions.
  countKeeper.maxQuestions = parseInt($( "input:checked" ).val());
  var numVal = countKeeper.maxQuestions;
  console.log(`The selected number of questions is: ${numVal}`);
  
  // Save off the form and image for later.
  homeForm = $('.game-home').detach();
  homeImg = $('.bkg-img').detach();

  // Set up for the first question.
  firstQuestion(numVal);
}

//************************************************************
// Sets up the callback for the PLAY button.
//************************************************************
function main(){
  $('.game-home').on('click','#js-play', event => {
    event.preventDefault();
    onPlay();
  });
}
   
$(main);
   