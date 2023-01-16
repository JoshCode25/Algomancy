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
		'No rulings for this card have been made yet. You can request a ruling or ask a question in the Algomancy Discord (click here).',
	];
	const rulings =
		!!cardInfo[0]?.rulings.length > 0 ? cardInfo[0].rulings : defaultRuling;
	const useDefaultRuling = !!cardInfo[0]?.rulings.length > 0 ? false : true;
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
				<RulingsDisplay
					cardName={cardName}
					rulings={rulings}
					useDefaultRuling={useDefaultRuling}
				/>
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
