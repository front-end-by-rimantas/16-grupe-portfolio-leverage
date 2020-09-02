"use strict";
import { renderBestServices } from './renderBestServices.js';
import data from '../js/data.js';
import {Video} from './video.js';

const { bestServices } = data;
renderBestServices('#best-services .service', bestServices );

new Video ({selector: '#video'});



