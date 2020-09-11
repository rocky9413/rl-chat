import React from 'react';

import Message from './Message';

import styled from 'styled-components';
import { styledColor } from './styledColor';

const StyledDiv = styled.div`
  // color: ${styledColor.red};
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;

// scroll to bottom
const Messages = ({ messages, name }) => {
  const showMessages = messages.map((message, i) => {
    return (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    );
  });

  return <StyledDiv>{showMessages}</StyledDiv>;
};

export default Messages;
