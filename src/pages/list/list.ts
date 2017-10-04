import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestApi } from '../../providers/test-data/test-data';
import * as models from '../../model/models';
import { DatePipe } from '@angular/common';
import { QuizPage } from '../quiz/quiz'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  tests: Array<models.TestViewModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestApi) {
   

    const request: models.PagedDataRequest = {};
    request.filters = [];
    request.multiSelectFilters = [];

    const pagination: models.Pagination = {};
    pagination.start = 0;
    pagination.count = 100;
    request.pagination = pagination;



    this.testService.getPaged(request)
      .subscribe(response => {
        this.tests = response.data as Array<models.TestViewModel>;
      });
  }

  itemTapped(event, test) {
    // That's right, we're pushing to ourselves!
    console.log('stest from list >', JSON.stringify(test));
    this.navCtrl.push(QuizPage, {
      test: test
    });
  }
}
