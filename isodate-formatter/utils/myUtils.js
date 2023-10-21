import boxen from 'boxen';
import chalk from 'chalk';

                // can just do chalk
                // added inverse for background and bold
const customChalk = chalk.inverse.bold;
const fallArr = ["Hello, pumpkin.",
            "Don't stop be-leafing.",
            "Channel the flannel.",
            "Spice, spice baby."];


// SECOND EXPORT SYNTAX OPTION
export const logTitle = (color, title) => {
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
                
                // MY ADDITION ) using boxen to make a footer
                // https://github.com/sindresorhus/boxen
                export const addFooter = (inner, title) => {
                    // log the footer -> basic needed for box
    console.log(
        boxen(fallArr[Math.floor(Math.random() * fallArr.length)], 
        {
            title: 'xtina.codes', 
            titleAlignment: 'center',
            // possible values: black' 'red' 'green' 'yellow' 'blue' 'magenta' 'cyan' 'white' 'gray' or a hex value like
            // favs: magenta, blue, orange = `#fec89a`
            backgroundColor: '#fec89a', 
            borderStyle: 'round', 
            padding: 2, margin:.5
                }
        )
    );
}
