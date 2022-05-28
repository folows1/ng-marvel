import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../item';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail = {} as IItem;
  type = '';

  constructor(private service: DetailService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      console.log(id);
      console.log(this.route);
      this.type = this.route.snapshot.url[0].path;
      console.log(this.type);
      this.service.fetch(id, this.type).subscribe((data) => {
        console.log(data);
        this.detail = data.data.results[0] as IItem;
        if (!this.detail.description) {
          this.detail.description = 'No description available';
        }
      },
        (error) => {
          this.router.navigate(['/not-found']);
        });
    })
  }
}
