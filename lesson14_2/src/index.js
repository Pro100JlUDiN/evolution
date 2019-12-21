"use strict";

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'matches';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import tuggleMenu from './modules/tuggleMenu';
import tugglePopUp from './modules/tugglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// таймер
countTimer("19 december 2019");
// меню
tuggleMenu();
// блок с полями реквизитов
tugglePopUp();
//табы
tabs();
//слайдер
slider();
//смена фотографий      
changePhoto();
//калькулятор    
calc(100);
//send-ajax-form    
sendForm();