"use client";

import { Button } from "@/components/Button";
import { device } from "@/styling/breakpoints";
import { useEffect, useState } from "react";
import { backgroundSlide, fadeIn } from "@/styling/keyframes";
import styled from "@emotion/styled";
import Link from "next/link";
import { mainColor } from "@/constants";

type Props = {
  setButtonHovered: (e: boolean) => void;
};

export default function Hero({ setButtonHovered }: Props) {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(1);
    }, 1000);

    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <Container>
      <Heading>
        Tars <ColoredHeading loaded={loaded}>Hoeykens</ColoredHeading>
      </Heading>
      <StyledText>
        Enthusiatic dude with a passion for learning, music and web development.
      </StyledText>
      <ButtonsContainer>
        <StyledLink href="">
          <Button type="normal" setButtonHovered={setButtonHovered}>
            View projects
          </Button>
        </StyledLink>
        <StyledLink href="">
          <Button type="transparant" setButtonHovered={setButtonHovered}>
            Contact me
          </Button>
        </StyledLink>
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.div`
  animation: ${fadeIn} 0.7s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 40rem;
  z-index: 1;
  pointer-events: none;
  @media ${device.md} {
    text-align: center;
    max-width: 50rem;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  @media ${device.md} {
    font-size: 5.5rem;
  }
  @media ${device.lg} {
    font-size: 6.5rem;
  }
`;

const StyledText = styled.p`
  font-family: var(--font-PT-Serif);
  font-size: 1.5rem;

  @media ${device.md} {
    color: #101112;
  }
`;

const ColoredHeading = styled.span<{ loaded: number }>`
  display: inline;
  background: ${(props) =>
    props.loaded
      ? `linear-gradient(to right, ${mainColor} 50%, transparent 50%);`
      : "transparant"};
  color: ${(props) => (props.loaded ? "white" : "black")};
  background-size: 200% 100%;
  animation: ${backgroundSlide} 1s ease-out 1s;
  transition: color 0.5s ease 0.3s;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  @media ${device.md} {
    flex-direction: row;
    justify-content: center;
    max-width: 24rem;
    align-self: center;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
`;
