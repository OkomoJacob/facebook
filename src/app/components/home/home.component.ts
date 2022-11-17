import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://blog.craigjoneswildlifephotography.co.uk/wp-content/uploads/2017/10/CMJ3288.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://imgs.search.brave.com/5m4FkVAwFrPzWzlhq6nwzN-HV_WjGwR4QN3dBnUZArE/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/SkZRQThrMHNPVnBy/c3pCc1hzcU5BSGFF/NyZwaWQ9QXBp',
    'https://imgs.search.brave.com/ty3saQoMkd5Y-ynh0j4kbBMlgrG_0GpXgT9KsLFNBKY/rs:fit:793:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/bmU1YVpXTEhlaUE3/dGxBLTBPc3lBSGFF/YiZwaWQ9QXBp',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }
  postMessages(form: NgForm): void{
    console.log(form.value);
  }

}
