/**
 * Created by vajoy on 2016/1/1.
 */
import {App} from '../component/App';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';

document.querySelector('app').className='loading-done';
setTimeout(bootstrap.bind(this, App, [ROUTER_PROVIDERS]), 300);