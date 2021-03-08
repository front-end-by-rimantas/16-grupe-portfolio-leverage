"use strict";
import { renderBestServices } from './renderBestServices.js';
import data from '../js/data.js';
import {Video} from './video.js';
import portfData from '../data/portfolioData.js'
import {Portfolio} from './Portfolio.js'

const { bestServices } = data;
renderBestServices('#best-services .service', bestServices );

new Video ({selector: '#video'});
new Portfolio ({
    selector: '#portfolio',
    data: portfData,
})



