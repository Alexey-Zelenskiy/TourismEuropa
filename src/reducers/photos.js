import priroda from "../imagesSrc/Belguim/priroda.jpg";
import prazd from "../imagesSrc/Belguim/prazd.jpg";
import dostrop from "../imagesSrc/Belguim/dostopr.jpg";

const initialState = [
    {
        label: 'Праздники',
        remote: prazd,
        click: 'prazdn',
    }
    ,
    {
        label: 'Достопримечательности ',
        remote: dostrop,
        click: 'dostopr',
    }
    ,
    {
        label: 'Природа',
        remote: priroda,
        click: 'prirodaa',
    }
];

export default function photos(state= initialState, action){
    return state
    }