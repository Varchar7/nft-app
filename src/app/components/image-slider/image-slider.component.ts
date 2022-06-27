import { Component, OnInit } from '@angular/core';
import { faUserTag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  faUser = faUserTag;
  constructor() { }

  ngOnInit(): void {
  }

}
