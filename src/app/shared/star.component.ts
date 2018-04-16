import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating : number;
    starWidth : number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 92 / 5;
    }

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    OnClick() : void {
        this.ratingClicked.emit(`rating ${this.rating} clicked!`);
    }
}