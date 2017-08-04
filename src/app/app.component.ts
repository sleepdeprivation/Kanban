import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  cols = [
      { 'title' : 'name1',
        'color' : '#8e6e95',
        'cards' : [
        { cardText : "asdf"},
        { cardText : "asdf"},
        ]
      },
      { 'title' : 'name2',
        'color' : '#39a59c',
        'cards' : [
        { cardText : "asdf"},
        { cardText : "asdf"},
        ]
      },
      { 'title' : 'name3',
        'color' : '#344759',
        'cards' : [
        { cardText : "asdf"},
        { cardText : "asdf"},
        ]
      },
      { 'title' : 'name4',
        'color' : '#e8741e',
        'cards' : [
        { cardText : "asdf"},
        { cardText : "asdf"},
        ]
      }
  ];

  placeCard(index, card){
    let newIndex = (index+this.cols.length)%(this.cols.length);
    this.cols[newIndex].cards.push(card);
  }



}
