// NotFoundPage.js
import React from "react";
import styled from "styled-components";

// Styling the main container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styling the text
const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <p>Sorry, the page you are looking for does not exist.</p>
    </Container>
  );
};

export default NotFound;
