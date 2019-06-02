import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withAuth} from '@okta/okta-react';
import photo from '../../imagesSrc/Austria/Vena.jpg';
import austria from '../../imagesSrc/Austria/Vena.jpg';
import belgium from '../../imagesSrc/Belguim/bel.jpg';
import germany from '../../imagesSrc/Germany/germany.jpg';
import monaco from '../../imagesSrc/monaco.jpg';
import france from '../../imagesSrc/france.jpg';
import danya from '../../imagesSrc/danya.jpg';
import island from '../../imagesSrc/island.jpg';
import latvya from '../../imagesSrc/latvya.jpg';
import estonia from '../../imagesSrc/estonia.jpg';
import switzerland from '../../imagesSrc/switzerland.jpg';
import sweden from '../../imagesSrc/sweden.jpg';
import norveg from '../../imagesSrc/norveg.jpg';
import Country_Europa from "./Countrys/handler_Country/Country_Europa";
import Navbar from "../layout/Navbar";
import Modal from 'react-responsive-modal';

const CountryEurop_Western = [
    {
        link: '/austria',
        label: 'Австрия',
        remote: austria

    },
    {
        link: '/belgium',
        label: 'Бельгия',
        remote: belgium

    },
    {
        link: '/germany',
        label: 'Германия',
        remote: germany
    }
    ,
    // {
    //     link: '/monaco',
    //     label: 'Монако',
    //     remote: monaco
    // },
    {
        link: '/france',
        label: 'Франция',
        remote: france
    }
    ,
    {
        link: '/switzerland',
        label: 'Швейцария',
        remote: switzerland
    }

];
const CountryEurop_North = [

    {
        link: '/denmark',
        label: 'Дания',
        remote: danya

    },
    //
    // {
    //     link: '/iceland',
    //     label: 'Исландия',
    //     remote: island
    // },
    // {
    //     link: '/latvia',
    //     label: 'Латвия',
    //     remote: latvya
    // }
    ,
    {
        link: '/estonia',
        label: 'Эстония',
        remote: estonia
    }
    ,
    {
        link: '/sweden',
        label: 'Швеция',
        remote: sweden
    }
    ,
    {
        link: '/spain',
        label: 'Испания',
        remote: norveg
    }
];
    class Country extends Component {

        state = {authenticated: null,open:false};

        render() {
            const {open}=this.state;


            const mainContent =(
                <div className="country1">
                    <div className="twelve columns collapsed">
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <Country_Europa items={CountryEurop_Western}>

                            </Country_Europa>


                            <Country_Europa items={CountryEurop_North}/>

                        </div>
                    </div>
                </div>
            );

            return (
<div>
    <Navbar/>
                <section id="HotTurs2">
                    <h1 className="h1">Выбирете старну которую вы хотите посетить.</h1>

                    {mainContent}
                </section>
</div>

            );
        }
    }
export  default Country;
