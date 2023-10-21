// require is not defined in ES module scope, you can use import instead
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'
dayjs.extend( localizedFormat )
dayjs.extend( relativeTime )

const formatDate = {
    // OBJECTIVE ) export function that takes an ISO take and returns a readable string as an output.
    // https://day.js.org/docs/en/display/format  OR
    // export const readable = e => dayjs(e).format('MMM D, YYYY @ h:m:ss A')
    readable: (e) => dayjs(e).format('LLL'),

    // OBJECTIVE ) Have a function for converting date formats to appear like "4 months ago"
    // https://day.js.org/docs/en/plugin/relative-time
    // https://day.js.org/docs/en/display/from-now
    relative: (e) => dayjs(e).fromNow(),

    // OBJECTIVE ) Have a function for converting date formats to appear like "Thursday, January 21, 2023"
    longFormat: (e) => dayjs(e).format('dddd, MMMM D, YYYY'),
    
    // OBJECTIVE ) Have a function for converting date formats to appear like "01/21/2023"
    shortFormat: (e) => dayjs(e).format('MM/DD/YYYY'),
  };
export default formatDate








/**********************************************
                DAYJS OBJECT
**********************************************/
//   dayjs('2023-10-31T15:30:00Z') = M {
//     '$L': 'en',
//     '$d': 2023-10-31T15:30:00.000Z,
//     '$y': 2023,
//     '$M': 9,
//     '$D': 31,
//     '$W': 2,
//     '$H': 11,
//     '$m': 30,
//     '$s': 0,
//     '$ms': 0,
//     '$x': {},
//     '$isDayjsObject': true
//   }

/**********************************************
            TESTING INSIDE THE FILE
**********************************************/
// // Test each string format with at least five different dates
// let isoArr = [
//     {title : "All Hallows' Eve", iso: '2023-10-31T03:00:00-04:00'}, 
//     {title : "Christmas Eve", iso: '2023-12-24T23:00:00-04:00'},
//     {title : "St. Patrick's Day", iso: '2023-03-17'},
//     {title: "Chocolate Cake Day", iso:"2023-01-27"},
//     {title: "National Donut Day", iso:"2023-05-07"}
//     ]

// for (let i of isoArr) {
//     console.log(`${'#'.repeat(10)} ${i.title.toUpperCase()} ${'#'.repeat(10)}`)
//     console.log("Readable\t", readable(i.iso))
//     console.log("Relative\t", relative(i.iso))
//     console.log("Full\t", longFormat(i.iso))
//     console.log("Short\t", shortFormat(i.iso))
// }
