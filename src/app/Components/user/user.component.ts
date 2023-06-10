import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userid :any;
  constructor(private route : ActivatedRoute, private router : Router){}
  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('id')
    // this.router.events.filter
    console.log(this.router.url);
  }

  

}
