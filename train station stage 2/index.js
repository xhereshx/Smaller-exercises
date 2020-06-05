'use strict';

let departures = [
    {time: {hrs: 8, mins: 14}, 
    train: 'Acela Express', 
    no: 2153, 
    to: 'Washington, DC', 
    status: '', 
    track: 2},

    {time: {hrs: 8, mins: 19 },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Termil',
    status:'On Time',
    track: 14},

    {time: { hrs: 8, mins: 20 },
    train: 'Shore Line East',
    no: 1606,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 12,
    },

    {time: { hrs: 8, mins: 37 },
    train: 'N.E. Regional',
    no: 190,
    to: 'Boston South Station',
    status: 'On Time',
    track: 1,
    },

    {
    time: { hrs: 8, mins: 40 },
    train: 'Shuttle',
    no: 490,
    to: 'Springfield',
    status: 'On Time',
    track: 3,
    },

    {
    time: { hrs: 8, mins: 43 },
    train: 'N.E. Regional',
    no: 96,
    to: 'Newport News',
    status: 'On Time',
    track: 2,
    },

    {
    time: { hrs: 8, mins: 50 },
    train: 'New Haven Line',
    no: 1545,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8,
    },

    {
    time: { hrs: 9, mins: 16 },
    train: 'Shore Line East',
    no: 1610,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 10,
    },

    {
    time: { hrs: 9, mins: 23 },
    train: 'New Haven Line',
    no: 1549,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
    },

    {
    time: { hrs: 9, mins: 36 },
    train: 'Acela Express',
    no: 2150,
    to: 'Boston-South Sta.',
    status: '',
    track: 1,
    },

    {
    time: { hrs: 9, mins: 46 },
    train: 'New Haven Line',
    no: 1551,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8,
    },

    {
    time: { hrs: 10, mins: 13 },
    train: 'N.E. Regional',
    no: 170,
    to: 'Boston South Station',
    status: 'On Time',
    track: 2,
    },

    {
    time: { hrs: 10, mins: 25 },
    train: 'New Haven Line',
    no: 1553,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
    },
    

]

let data = document.querySelector('.table');
  departures.forEach((item) => {
    data.innerHTML += `
      <tr>
        <td class="table_time">${item.time.hrs}:${item.time.mins}</td>
        <td class="table_train">${item.train}</td>
        <td class="table_no">${item.no}</td>
        <td class="table_to">${item.to}</td>
        <td class="table_status">${item.status}</td>
        <td class="table_track">${item.track}</td>
      </tr>


   `
  });

