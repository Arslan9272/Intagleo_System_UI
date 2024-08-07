import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0084ff;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
`;

const Containerr = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3em;
  padding-right: 110px;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin: 20px 0;
  color: white;
  padding-left: 20px;
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Flip = styled.div`
  width: 120px; /* Shortened width */
  height: 80px; /* Shortened height */
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  perspective: 1000px; // Ensure perspective is applied
  transform: ${props => props.isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)'};
`;

const FlipSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Front = styled(FlipSide)`
  background: white;
  color: black;
  padding: 10px 20px;
  margin: 5px; /* Adjusted margin */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em; /* Adjusted font size */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Back = styled(FlipSide)`
  background: white;
  color: black;
  transform: rotateX(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em; /* Adjusted font size */
  padding: 10px 20px;
  margin: 5px; /* Adjusted margin */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TechnologyContainer = styled.div`
  perspective: 1000px;
  display: inline-block;
  margin: 10px;
`;

const technologies = [
  'Devops',
  'Ruby on Rails',
  'Python',
  'Sales Force',
  'Swift',
  'Android',
  'Angular',
  'NodeJs',
  'iOS',
  'React',
  'AWS',
  'Microsoft',
  'ASP .Net',
  'PHP',
];

const backTechnologies = [
  'Docker',
  'Elixir',
  'Kubernetes',
  'GraphQL',
  'C++',
  'Laravel',
  'Java',
  'Go',
  'TypeScript',
  'Golang',
  'Firebase',
  'C#',
  'Ruby',
  'Scala',
];

const Technologyy = () => {
  return (
    <Container>
      <Containerr>
        <Title>Technology Expertise</Title>
        <Subtitle>
          The right Technology Stacks is the foundation of custom software. We work with the latest, most robust
          technologies to deliver scalable, integrable, and secure software solutions.
        </Subtitle>
      </Containerr>
      <TechnologiesWrapper>
        <TechnologiesContainer>
          {technologies.map((tech, index) => (
            <TechnologyContainer key={index}>
              <TechnologyComponent name={tech} backName={backTechnologies[index % backTechnologies.length]} shouldFlipRandomly={index % 2 === 0} />
            </TechnologyContainer>
          ))}
        </TechnologiesContainer>
      </TechnologiesWrapper>
    </Container>
  );
};

const TechnologyComponent = ({ name, backName, shouldFlipRandomly }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (shouldFlipRandomly) {
      const flipInterval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, Math.random() * 2000 + 2000); // Random interval between 8 and 16 seconds

      return () => clearInterval(flipInterval);
    }
  }, [shouldFlipRandomly]);

  return (
    <Flip isFlipped={isFlipped}>
      <Front>
        {name}
      </Front>
      <Back>
        {backName}
      </Back>
    </Flip>
  );
};

export default Technologyy;
