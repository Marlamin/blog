import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus 
    repo="marlamin/blog"
    repoId="R_kgDOL4fp1g"
    category="Announcements"
    categoryId="DIC_kwDOL4fp1s4CfNLQ"
    mapping="url"
    strict="0"
    reactionsEnabled="0"
    emitMetadata="0"
    inputPosition="top"
    theme="noborder_gray"
    lang="en"
  />
  );
}