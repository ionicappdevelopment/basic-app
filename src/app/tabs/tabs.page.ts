import { Tab2Page } from './../tab2/tab2.page';
import { Tab1Page } from './../tab1/tab1.page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false
})
export class TabsPage {
  tab1Root = Tab1Page;
  tab2Root = Tab2Page;
  constructor() {}

}
