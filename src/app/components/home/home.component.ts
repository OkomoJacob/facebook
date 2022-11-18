import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://blog.craigjoneswildlifephotography.co.uk/wp-content/uploads/2017/10/CMJ3288.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://imgs.search.brave.com/5m4FkVAwFrPzWzlhq6nwzN-HV_WjGwR4QN3dBnUZArE/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/SkZRQThrMHNPVnBy/c3pCc1hzcU5BSGFF/NyZwaWQ9QXBp',
    'https://imgs.search.brave.com/ty3saQoMkd5Y-ynh0j4kbBMlgrG_0GpXgT9KsLFNBKY/rs:fit:793:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/bmU1YVpXTEhlaUE3/dGxBLTBPc3lBSGFF/YiZwaWQ9QXBp',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
  ];
  posts: any[] = [];
  user: UserData | undefined;
  subs: Subscription[] = [];

  constructor(private postService: PostService) { }

  async ngOnInit(): Promise<void>{
    this.subs.push(
      this.postService.getAllPosts().subscribe(async (posts) => {
        this.posts = posts;
        console.log(posts);
      })
    );
  }

  // // Destroy the subscriptions to avoid multiple API calls and subscriptions on refresh.
  // ngOnDestroy(): void {
  //   this.subs.map(s: Subscription =>s.unsubscribe());
    
  //   // throw new Error('Method not implemented.');
  // }


  postMessages(form: NgForm): void{
    console.log(form.value);
  }

}
