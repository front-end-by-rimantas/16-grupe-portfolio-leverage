"use strict";

import data from './data.js';

import { renderBestServices } from './renderBestServices.js';

const { bestServices } = data;

renderBestServices('#best-services .card', bestServices );