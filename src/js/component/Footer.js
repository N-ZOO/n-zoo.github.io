/**
 * Created by vajoy on 2016/1/1.
 */
import {Component} from 'angular2/core';
require('css/component/Footer');

var Footer = Component({
    selector: 'footer-component',
    template: `
    <footer>&copy; NZOO 2016</footer>
    `
})
    .Class({
        constructor: () => {
        }
    });

export default Footer;