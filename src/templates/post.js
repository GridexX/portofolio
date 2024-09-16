import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { getReadingTime } from '../utils';

const StyledPostContainer = styled.main`
  max-width: 1500px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    color: white;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 7px 7px 0;
      color: var(--light-slate);
      background-color: var(--dark-navy);
      border-radius: 1rem;
      padding: 7px 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 3px 1px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .reading-time {
    margin-bottom: 20px;
    font-family: var(--font-mono);
    font-style: italic;
    font-size: var(--fz-sm);
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--dark-slate);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;
  return (
    <Layout location={location}>
      <Helmet title={title} />

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/pensieve">All memories</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <time className="range">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <p className="reading-time">{getReadingTime(html)}</p>
          <p className="subtitle">
            {tags && tags.length > 0 && (
              <ul className="project-tech-list">
                {tags.map((tag, i) => (
                  <li key={`${tag}-${i}`}>
                    <Link
                      key={`${tag}-${i}`}
                      to={`/pensieve/tags/${kebabCase(tag)}/`}
                      className="tag">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
