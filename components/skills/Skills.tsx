import React from 'react';

import ReadMeImg from '../ReadMeImg';

import AndroidIcon from '../icons/android';
import RubyIcon from '../icons/ruby';
import CIcon from '../icons/c';
import CPlusPlusIcon from '../icons/cplusplus';
import GitIcon from '../icons/git';
import JavaIcon from '../icons/java';
import JSIcon from '../icons/js';
import RailsIcon from '../icons/rails';
import PythonIcon from '../icons/python';
import GitHubIcon from '../icons/github';
import JekyllIcon from '../icons/jekyll';
import LaTeXIcon from '../icons/latex';
import TravisIcon from '../icons/travis';
import KotlinIcon from '../icons/kotlin';
import TSIcon from '../icons/ts';
import VSCodeIcon from '../icons/vscode';

export interface Props { };

/**
 * Skills
 * Displays various SVG icons
 * @param trackLists 
 */
export const Skills: React.FC<Props> = ({ }) => {
  return (
    <ReadMeImg
      width="800"
      height="212">
      <div id="icon-wrapper">

        <CIcon
          width="70"
          height="70">
        </CIcon>

        <CPlusPlusIcon
          width="70"
          height="70">
        </CPlusPlusIcon>

        <JavaIcon
          width="70"
          height="70">
        </JavaIcon>

        <JSIcon
          width="70"
          height="70">
        </JSIcon>

        <KotlinIcon
          width="70"
          height="70">
        </KotlinIcon>

        <PythonIcon
          width="70"
          height="70">
        </PythonIcon>

        <RubyIcon
          width="70"
          height="70">
        </RubyIcon>

        <TSIcon
          width="70"
          height="70">
        </TSIcon>

        <AndroidIcon
          width="70"
          height="70">
        </AndroidIcon>

        <JekyllIcon
          width="70"
          height="70">
        </JekyllIcon>

        <LaTeXIcon
          width="70"
          height="70">
        </LaTeXIcon>

        <RailsIcon
          width="70"
          height="70">
        </RailsIcon>

        <GitIcon
          width="70"
          height="70">
        </GitIcon>

        <GitHubIcon
          width="70"
          height="70">
        </GitHubIcon>

        <TravisIcon
          width="70"
          height="70">
        </TravisIcon>

        <VSCodeIcon
          width="70"
          height="70">
        </VSCodeIcon>


      </div>

      <style>
        {`
          #icon-wrapper {
            display: flex;
            
            flex-wrap: wrap;
          }
          
          #icon-wrapper svg {
            margin: 12px;
            padding: 8px;
            background: rgb(250, 250, 250);
            box-shadow: 2px 2px 2px rgba(0,0,0,.3);
            border: 1px solid rgba(0,0,0,.01);
            border-radius: 12px;
          }
        `}
      </style>
    </ReadMeImg>
  );
};