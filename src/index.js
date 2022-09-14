import {veletlen} from './matek.js';
import {NEV , LOREM} from './kulonleges.js';
//import { concat } from 'lodash';
import _ from 'lodash';
import bs from 'bootstrap';


console.log(veletlen(5,1000));
console.log(NEV + ' ' + LOREM);

let t1 = [1 , 455, 6];
let t2 = [5 ,155 ,2];
let t3 = [10];

let osszefuzott = _.concat(t1 , t2 , t3);
console.log(osszefuzott);


