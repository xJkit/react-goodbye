import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubIcon from 'react-icons/lib/go/mark-github';

const CopyRight = styled.div`
  color: #666;
  position: fixed;
  bottom: 36px;
  right: 36px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled(GithubIcon)`
  margin-right: 4px;
`;

const Container = ({ name, githubLink }) => (
    <a target="_blank" href={githubLink}>
      <CopyRight>
        <Icon />
        {name}
      </CopyRight>
    </a>
);

Container.propTypes = {
  name: PropTypes.string,
  githubLink: PropTypes.string,
};

export default Container;
