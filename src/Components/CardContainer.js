import React, { useState } from 'react';
import '../CSS/cardContainer.css';
import RulingsDisplay from './RulingsDisplay';

const CardContainer = ({ cardInfo }) => {
	const [displayRulings, setDisplayRulings] = useState(false);
	const cardName = cardInfo ? cardInfo[0].name : 'default';
	const cardNameDash = cardName
		.replace(/[.,/#!$%^&*;:{}=_`'~()]/g, '')
		.split(' ')
		.join('-');

	const defaultRuling = [
		'No ruling clarifications currently set up for this card. Contact Caleb Gannon at CalebGannonLLC@gmail.com to request an official clarification',
	];
	const rulings = cardInfo.rulings ? cardInfo.rulings : defaultRuling;
	const toggleInfo = (cardInfo) => {
		setDisplayRulings(!displayRulings);
	};

	return (
		<div
			onClick={() => {
				toggleInfo(cardInfo);
			}}
			className="cardContainer"
		>
			{displayRulings ? (
				<RulingsDisplay cardName={cardName} rulings={rulings} />
			) : (
				<img
					className="cardImg"
					src={`https://calebgannon.com/wp-content/uploads/cardsearch-images/${cardNameDash}.jpg`}
					alt={`${cardName}`}
				/>
			)}
		</div>
	);
};

export default CardContainer;
