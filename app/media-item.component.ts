import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
 // name = 'The Redemption';

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete(){
    //console.log("Deleted Button Clicked");
    this.delete.emit(this.mediaItem);
  }
 
 /*  wasWatched(){
    return true;
  } */

}
