require('dotenv').config();
const request = require('request');

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

const getEventfulEvents = (date) => {
  const options = {
    method: 'GET',
    url: 'http://api.eventful.com/rest/events/search',
    qs:
      {
        location: 'new%20orleans,%20la',
        date: 'Today',
        app_key: 'kJPdZJwbJBPj6NhX',
      },
    headers:
      {
        'Cache-Control': 'no-cache',
      },
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
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
