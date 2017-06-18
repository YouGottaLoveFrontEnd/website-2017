import React, { Component } from 'react';
import Speaker from './Speaker';
import BuyTicketsButton from './BuyTicketsButton';
import './Speakers.css';

class Speakers extends Component {

    render() {

        let speakers = [];

        [{
            first_name: 'Richard',
            last_name: 'Feldman',
            position: 'Director of Engineering',
            company: 'NoRedInk',
            description: 'Richard is the author of “Elm in Action” from Manning Publications, and the instructor for the Frontend Masters 2-Day Elm Workshop. When he’s not writing about Elm, teaching Elm, speaking about Elm, or co-hosting the San Francisco Elm meetup, he likes to take a break from his job at NoRedInk (where front-end programmers spend almost almost all their coding time writing production Elm code) by kicking back and working on some of his open-source Elm projects.',
            image_src: 'guy.png',
            social_icons: [{
                type: 'twitter',
                url: 'https://twitter.com/rtfeldman'
            }, {
                type: 'github',
                url: 'https://github.com/rtfeldman'
            }, {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/rtfeldman'
            }]
        }, {
            first_name: 'Sarah',
            last_name: 'Drasner',
            position: 'Web Technologies Consultant',
            company: 'sarahdrasnerdesign.com',
            description: 'Sarah is an award-winning Speaker, Consultant, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given a Frontend Masters workshop on Advanced SVG Animations. Sarah is formerly Manager of UX Design & Engineering at Trulia (Zillow).',
            image_src: 'asian.png',
            social_icons: [{
                type: 'twitter',
                url: 'https://twitter.com/sarah_edo'
            }, {
                type: 'github',
                url: 'https://github.com/sdras'
            }, {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/sarahdrasner'
            }]
        }, {
            first_name: 'Ashlee',
            last_name: 'Williams',
            position: 'Developer',
            company: 'NPM',
            description: 'Ashley Williams wears a lot of hats, both literally and professionally. She is currently a services engineer at npm, Inc, the package manager for JavaScript and the Node.js ecosystem. She also represents the Individual Membership on the Node.js Foundation Board of Directors. Previously a backend and services engineer at Mozilla, and a web engineer and educator at Bocoup, Ashley has a long history of designing, developing, and teaching systems and systems architecture.',
            image_src: 'black.png',
            social_icons: [{
                type: 'twitter',
                url: 'https://twitter.com/ag_dubs'
            }, {
                type: 'github',
                url: 'https://github.com/ashleygwilliams'
            }, {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/ashleygwilliams'
            }]
        }].forEach(function(speaker) {
                speakers.push(<Speaker key= {speaker.image_src} speaker={speaker}/>);
        });

        return (
            <div className="speakers">
                <div className="container container-fluid">
                    <div className="container-header speakers-header">
                        <span>1 <i>Amazing Talks</i></span>
                        <h1>Speakers</h1>
                        <div className="container-header-flexbox">
                            <div className="container-header-info">
                                <p>This year YGLF is hosting amazing speakers from all around the world. Listed below are our keynote speakers. For the whole lineup you can visit our Speakers page. Make sure to check back reguraly as this is just the beginning and we have many more to be announced soon!</p>
                                <BuyTicketsButton/>
                            </div>
                        </div>
                    </div>
                    <div className="speakers-list">
                        {speakers}
                    </div>
                </div>
            </div>
        );

    }

}

export default Speakers;
