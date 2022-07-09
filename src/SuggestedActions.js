import { hooks } from 'botframework-webchat-component';
import React from 'react';

import CardActionButton from './CardActionButton'

const { useSuggestedActions } = hooks;

const SuggestedActions = () => {
    const [suggestedActions] = useSuggestedActions();
  
    return (
      !!suggestedActions.length && (
        <ul style={{ padding:0, margin:0}}>
          {suggestedActions.map((action, index) => (
            <li key={index} style={{display:'inline-block', margin:'20px'  }}>
              <CardActionButton style={{}} cardAction={action} />
            </li>
          ))}
        </ul>
      )
    );
  };
  
  export default SuggestedActions;