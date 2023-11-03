{


interface Developer<T>{
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear: number;
    };
    smartWatch:T;
}

type Emilabwatch ={
    brand:string,
    model:string,
    display:string;
}

const poorDeveloper : Developer<Emilabwatch> ={
name:'Sumaiya',
computer:{
    brand:'Asus',
    model:'xx',
    releaseYear:2013
},
smartWatch:{
    brand:'Emilab',
    model:'k6w',
    display:'oled'
}
}

interface appleWatch{
    brand:string,
    model:string,
    heartTrack: boolean,
    sleepTrack: boolean
}
const richDeveloper : Developer<appleWatch> ={
    name:'Touhid',
    computer:{
        brand:'Hp',
        model:'xx6',
        releaseYear:2018
    },
    smartWatch:{
        brand:'AppleWatch',
        model:'y67',
        heartTrack: true,
        sleepTrack: true,
    }
    }








}