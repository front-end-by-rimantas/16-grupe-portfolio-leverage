"use strict"

import data from './data.js'

import { renderBestServices } from './renderBestServices.js';

const { bestServices } = data;

console.log( renderBestServices(bestServices) );