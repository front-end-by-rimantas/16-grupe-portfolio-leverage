"use strict";

import data from '../js/data.js';

import { renderBestServices } from './renderBestServices.js';

const { bestServices } = data;

renderBestServices('#best-services .card', bestServices );