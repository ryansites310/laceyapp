import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as models from '../../model/models';

import { TestApi } from '../../providers/test-data/test-data';
import { HomePage } from '../home/home';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  @ViewChild('slides') slides: any;
  selectedTest: models.TestViewModel;
  cards: Array<models.CardViewModel>;
  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: TestApi) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTest = navParams.get('test'); 
  }

 ionViewDidLoad() { 
        this.slides.lockSwipes(true); 
        let originalOrder = this.selectedTest.card;
        this.cards = this.randomizeAnswers(originalOrder);       
    }
 
    nextSlide(){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }
 
    
    randomizeAnswers(rawAnswers: any[]): any[] {
 
        for (let i = rawAnswers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
 
        return rawAnswers;
 
    }
 
    restartQuiz() {       
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 1000);
        this.slides.lockSwipes(true);
    }

    mainMenu() {
        this.navCtrl.push(HomePage);
    }

  selectAnswer() {
    this.flashCardFlipped = true;
  }

}
