import { Component } from '@angular/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component ({
  selector : 'home',
  templateUrl : 'client/home/main/home.html',
  styleUrls : ['client/home/main/home.html'],
  directives : [ROUTER_DIRECTIVES]
})



export class HomeComponent {}
