import React, { useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import PropTypes from 'prop-types';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 25px;
    position: relative;
    margin-top: 50px;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 1rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: hidden;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 15px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .langgraph {
      color: var(--green);
      svg {
        width: 80px;
        height: 40px;
      }
    }

  .folder {
    color: var(--green);
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .project-title {
    
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

  }
`;

const ProjectCard = ({ icon, skill }) => (
  <StyledProject>
    <div className="project-inner">
      <div className="project-top">
        {icon === 'LangGraph' ? (
          <div className="langgraph">
            <Icon name={icon} />
          </div>
        ) : (
          <div className="folder">
            <Icon name={icon} />
          </div>
        )}
      </div>
      <h3 className="project-title">{skill}</h3>
    </div>
  </StyledProject>
);

ProjectCard.propTypes = {
  icon: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

const Skills = () => {
  const revealContainer = useRef(null);

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>
      <ul className="projects-grid">
        <ProjectCard icon={'TypeScript'} skill="TypeScript" />
        <ProjectCard icon={'Terraform'} skill="Terraform" />
        <ProjectCard icon={'Openstack'} skill="Openstack" />
        <ProjectCard icon={'Go'} skill="Go" />
        <ProjectCard icon={'Aws'} skill="Aws" />
        <ProjectCard icon={'React'} skill="React" />
        <ProjectCard icon={'Kubernetes'} skill="Kubernetes" />
        <ProjectCard icon={'LangGraph'} skill="LangGraph" />
        <ProjectCard icon={'SparQL'} skill="SparQL" />
        <ProjectCard icon={'MCP'} skill="MCP" />
      </ul>
    </StyledSkillsSection>
  );
};

export default Skills;
