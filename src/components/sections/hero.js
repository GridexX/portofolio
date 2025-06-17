import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-family: var(--font-title);
  }

  h2 {
    font-family: var(--font-title);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  #aka {
    font-family: var(--font-title);
    font-size: clamp(var(--fz-heading), 5vw, 60px);
  }

  #X {
    position: relative;
    bottom: -5px;
  }

  #G {
    position: relative;
    top: -5px;
  }

  .div-two {
    display: flex;
    flex-flow: row wrap;
    column-gap: 1rem;
  }

  #name {
    color: var(--green);
  }

  .hero-p {
    @media (max-width: 700px) {
      width: 90%;
    }

    width: 70vw;
    max-width: 900px;
  }

  p {
    margin: 20px 0 0;
    width: 100%;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = (
    <div className="div-two">
      <h2 className="big-heading">Arsène</h2>
      <div>
        <h2 className="big-heading">
          aka
          <span id="name">
            {' '}
            <span id="G">G</span>ride<span id="X">X</span>X.
          </span>
        </h2>
      </div>
    </div>
  );
  const three = <h3 className="big-heading">I build things for the Cloud.</h3>;
  const four = (
    <div className="hero-p">
      <p>
        I'm a DevOps engineer specializing in cloud-native architectures that seamlessly integrate
        microservices with multi-agent systems, leveraging cutting-edge technologies to build
        meaningful AI-driven platforms.
      </p>
      <p>
        Currently, I'm focused on building Knowledge Graph solutions for{' '}
        <strong>European projects</strong>, where I leverage my expertise in cloud technologies to
        create innovative and impactful systems.
      </p>
    </div>
  );
  const five = (
    <a
      className="email-link"
      href="/resume-arsene-fougerouse.pdf"
      target="_blank"
      rel="noopener noreferrer">
      Check out my Resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
