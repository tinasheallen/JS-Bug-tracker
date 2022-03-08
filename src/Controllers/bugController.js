import { version } from 'react';
import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:007123,
        name:"Crash on load",
        details:"Crashes after 5 seconds",
        steps:"App crashes after openning",
        version:"1.3",
        assigned: "Lulu Johns",
        creator:"Phillip",
        priority:2,
        time: "06:45",

    }))
    data.push(new bugModel({
        _id:0071567,
        name:"blank screen on load",
        details:"frezzes after 2 seconds",
        steps:"App crashes",
        version:"1.3",
        assigned: "Lulu Johns",
        creator:"Phillip",
        priority:4,
        time: "06:45",

    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;

}