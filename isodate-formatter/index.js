// OBJECTIVE ) In index.js, import your functions, run them, and log their outputs to the console
import formatDate from './utils/formatDate.js'
import chalk from 'chalk';
                // can just do chalk
                // added inverse for background and bold
const customChalk = chalk.inverse.bold;


// OBJECTIVE ) Test each string format with at least five different dates
let isoArr = [
    {title : "All Hallows' Eve", iso: '2023-10-31T03:00:00-04:00', color: "orange"}, 
    {title : "Christmas Eve", iso: '2023-12-24T23:00:00-04:00', color: "red"},
    {title : "St. Patrick's Day", iso: '2023-03-17', color: "green"},
    {title: "Tell a Fairy Tale Day", iso:"2023-02-26", color: "purple"},
    {title: "National Donut Day", iso:"2023-05-07", color: "pink"}
    ]

const logTitle = (color, title) => {
    let hash = '#'.repeat(11)

    // chalk works best inside the console log
    switch (color) {
        case "orange":
            console.log(`${hash} ${customChalk.rgb(254, 200, 154)(title.toUpperCase())} ${hash}`)
            break;
        case "red":
            console.log(`${hash} ${customChalk.redBright(title.toUpperCase())} ${hash}`)
            break;
        case "green":
            console.log(`${hash} ${customChalk.greenBright(title.toUpperCase())} ${hash}`)
            break;
        case "purple":
            console.log(`${hash} ${customChalk.magenta(title.toUpperCase())} ${hash}`)
            break;
        case "pink":
            console.log(`${hash} ${customChalk.rgb(15, 100, 204)(title.toUpperCase())} ${hash}`)
            break;
      }
}

// BONUS OBJECTIVE ) Log your output with different colors by installing chalk `npm install chalk`
for (let i of isoArr) {
    logTitle(i.color, i.title)
    console.log("Readable\t", formatDate.readable(i.iso))
    console.log("Relative\t", formatDate.relative(i.iso))
    console.log("Full    \t", formatDate.longFormat(i.iso))
    console.log("Short    \t", formatDate.shortFormat(i.iso))
}
