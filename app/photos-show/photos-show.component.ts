import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-photos-show',
  templateUrl: './photos-show.component.html',
  styleUrls: ['./photos-show.component.css']
})
export class PhotosShowComponent implements OnInit {
  photoUrl: string;


  constructor(private photosService: PhotosService ) { 
    this.fetchPhoto();
  }


  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe(Response => {
      this.photoUrl = Response.urls.regular;
    });

  }



 

  ngOnInit(): void {
  }

}
