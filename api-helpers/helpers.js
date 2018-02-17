require('dotenv').config();
const request = require('request');
// const converter = require('xml-js');
const db = require('../db/index.js');


// {
//   address: string(anything less than 255 chars),
//     lat: float(##.######),
//       long: float(###.######),
//         venue: string(can hold many characters), -- is removed
//           date: string(yyyy - mm - dd hh: mm: ss),
//             name: string(255 chars),
//               description: string(many chars)
//
//       *****don't forget to add image url. eventObj.image_url****** DONE
// }


const songkickFormatForDatabase = (resultArray) => {
  resultArray.forEach((event) => {
    const formattedEvent = {
      lat: event.venue.lat,
      long: event.venue.lng,
      date: event.start.date,
      name: event.displayName,
      description: event.type,
      num_people: event.popularity * 100,
    };
    db.addEvent(formattedEvent);
  });
};

const getSongkickEvents = (date) => {
  const skOptions = {
    method: 'GET',
    url: 'http://api.songkick.com/api/3.0/events.json',
    qs: {
      apikey: 'apvszgjjkV8KDNVN',
      location: 'sk:11772',
      min_date: '2018-02-16',
      max_date: '2018-02-18',
    },
    headers: {
      'Cache-Control': 'no-cache',
    },
  };

  request(skOptions, (error, response, body) => {
    if (error) throw new Error(error);
    const sParsed = JSON.parse(body);
    // console.log(sParsed.resultsPage.results.event); // there's your array
    songkickFormatForDatabase(sParsed.resultsPage.results.event); // there's your array
  });
};

const yelpFormatForDatabase = (resultArray) => {
  resultArray.forEach((eventObj) => {
    const formattedObj = {
      address: eventObj.location.address1,
      lat: eventObj.latitude,
      long: eventObj.longitude,
      date: eventObj.time_start,
      name: eventObj.name,
      description: eventObj.description,
      image_url: eventObj.image_url,
      num_people: eventObj.attending_count,
    };
    db.addEvent(formattedObj);
  });
};

const getYelpEvents = (date) => {
  // console.log(process.env.YELP_API_KEY); // ok
  const options = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/events',
    qs:
      {
        location: 'neworleans,la',
        limit: '5',
        sort_on: 'time_start',
        sort_by: 'desc',
        start_date: 1518814951,
      },
    headers:
      {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const parsedBody = JSON.parse(body);
    yelpFormatForDatabase(parsedBody.events);
  });
};

module.exports.getYelpEvents = getYelpEvents;
module.exports.getSongkickEvents = getSongkickEvents;
