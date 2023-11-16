'use client';

import React from "react";
import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
import "./Footer.css";

export default function FooterBlock() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Ka Long CHAN" year={2023} />
      <Footer.LinkGroup>
        <Footer.Icon href="https://github.com/kalong2008" icon={BsGithub} />
      </Footer.LinkGroup>
    </Footer>
  );
}