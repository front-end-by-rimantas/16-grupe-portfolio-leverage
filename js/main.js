"use strict";
import { renderBestServices } from './renderBestServices.js';
import data from '../js/data.js';
import {Video} from './video.js';
import { renderSkills } from './renderSkills.js';

const { bestServices, skills } = data;

renderBestServices('#best-services .service', bestServices );
renderSkills('#skills .skills-bar', skills );

new Video ({selector: '#video'});



