"use strict";

import data from '../js/data.js';

import { renderBestServices } from './renderBestServices.js';

const { bestServices } = data;

renderBestServices('#best-services .service', bestServices );

import { renderBestSkills } from './renderBestSkills.js';

const { bestSkills } = data;

renderBestSkills ('#best-skills .skill', bestSkills );