import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconSparQL,
  IconTypescript,
  IconTerraform,
  IconOpenstack,
  IconAws,
  IconGo,
  IconReact,
  IconKubernetes,
  IconGitLab,
  IconShop,
  IconLanggraph,
  IconMCP,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Shop':
      return <IconShop />;
    case 'TypeScript':
      return <IconTypescript />;
    case 'Terraform':
      return <IconTerraform />;
    case 'Openstack':
      return <IconOpenstack />;
    case 'React':
      return <IconReact />;
    case 'Kubernetes':
      return <IconKubernetes />;
    case 'LangGraph':
      return <IconLanggraph />;
    case 'SparQL':
      return <IconSparQL />;
    case 'MCP':
      return <IconMCP />;
    case 'Go':
      return <IconGo />;
    case 'Aws':
      return <IconAws />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'GitLab':
      return <IconGitLab />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
