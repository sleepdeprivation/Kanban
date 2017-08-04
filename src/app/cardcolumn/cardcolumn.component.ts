import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardcolumn',
  templateUrl: './cardcolumn.component.html',
  styleUrls: ['./cardcolumn.component.scss']
})
export class CardcolumnComponent implements OnInit {

  @Input() name : string;
  @Input() headercolor : string;
  @Input() cards;
  @Input() index : number;

  @Input() placeCard;
  //  = [
  //   { cardText : "test"},
  //   { cardText : "test"},
  // ]

  constructor() {
  }

  ngOnInit() {
    if(this.index == 0)
      this.placeCard(this.index+1, {cardText : "Testing"});
  }

  clickedAdd(){
    console.log("clicked!")
    let result = window.prompt("testing", "");
    this.cards.push({ cardText : result });
  }

  clickedLeftArrow(index:number){
    this.clickedArrow(index, -1);
  }

  clickedRightArrow(index:number){
    this.clickedArrow(index, 1);
  }

  clickedArrow(index:number, inc: number){
    let res = this.cards[index];
    this.cards.splice(index, 1);
    this.placeCard(this.index+inc, res);
  }

}
