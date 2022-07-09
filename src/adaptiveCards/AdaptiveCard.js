import * as React from "react";
import * as AdaptiveCards from "adaptivecards";

const AdaptiveCard = ({ card }: AdaptiveCardProps) => {
  
  const cardWrapperRef = React.useRef<HTMLDivElement>(null);

React.useEffect(() => {
  if (!cardWrapperRef || !card) return;

  const adaptiveCard = new AdaptiveCards.AdaptiveCard();
  adaptiveCard.parse(card);

  cardWrapperRef.current.innerHTML = "";
  adaptiveCard.render(cardWrapperRef.current);
}, [card, cardWrapperRef]);

return <div ref={cardWrapperRef} />;
};

export default AdaptiveCard;
