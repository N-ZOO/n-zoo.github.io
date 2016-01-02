/**
 * Created by vajoy on 2016/1/1.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
require('css/common/reset');
require('css/component/App');

@Component({
    selector: 'app',
    template: `
    <header>
      <nav>
        <a [routerLink]="['Home']" >
            <svg width="46px" height="18px">
              <use xlink:href="#svg-logo"></use>
            </svg>
        </a>
        <a [routerLink]="['Project']">项目</a>
        <a href="//github.com/N-ZOO/everycode/issues" target="_blank">everycode</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `,
    directives: [ROUTER_DIRECTIVES, Footer]
})
@RouteConfig([
    { // Crisis Center child route
        path: '/',
        name: 'Home',
        component: Home,
        useAsDefault: true
    },

    {path: '/project', name: 'Project', component: Project}
])
export class App { }