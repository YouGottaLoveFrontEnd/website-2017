import React, { Component } from 'react';
import Speaker from './Speaker';
import BuyTicketsButton from './BuyTicketsButton';

class Speakers extends Component {

    render() {

        let speakers = [];

        [{
            first_name: 'Richard',
            last_name: 'Feldman',
            position: 'Director of Engineering',
            company: 'NoRedInk',
            description: 'Richard is the author of “Elm in Action” from Manning Publications, and the instructor for the Frontend Masters 2-Day Elm Workshop. When he’s not writing about Elm, teaching Elm, speaking about Elm, or co-hosting the San Francisco Elm meetup, he likes to take a break from his job at NoRedInk (where front-end programmers spend almost almost all their coding time writing production Elm code) by kicking back and working on some of his open-source Elm projects.',
            image_src: 'guy.png'
        }, {
            first_name: 'Paula Van',
            last_name: 'Dongen',
            position: 'Editor in chief at',
            company: 'smashingmagazine.com',
            description: 'Richard is the author of “Elm in Action” from Manning Publications, and the instructor for the Frontend Masters 2-Day Elm Workshop. When he’s not writing about Elm, teaching Elm, speaking about Elm, or co-hosting the San Francisco Elm meetup, he likes to take a break from his job at NoRedInk (where front-end programmers spend almost almost all their coding time writing production Elm code) by kicking back and working on some of his open-source Elm projects.',
            image_src: 'asian.png'
        }, {
            first_name: 'Richard',
            last_name: 'Feldman',
            position: 'Director of Engineering',
            company: 'NoRedInk',
            description: 'Richard is the author of “Elm in Action” from Manning Publications, and the instructor for the Frontend Masters 2-Day Elm Workshop. When he’s not writing about Elm, teaching Elm, speaking about Elm, or co-hosting the San Francisco Elm meetup, he likes to take a break from his job at NoRedInk (where front-end programmers spend almost almost all their coding time writing production Elm code) by kicking back and working on some of his open-source Elm projects.',
            image_src: 'black.png'
        }].forEach(function (speaker) {
            speakers.push(<Speaker key={speaker.image_src} speaker={speaker}/>);
        });

	    return (
	      <div className="speakers">
	      	<div className="container">
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
