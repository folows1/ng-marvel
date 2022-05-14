import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetail } from './detail';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail = {} as IDetail;
  type = '';

  constructor(private service: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      console.log(id);
      console.log(this.route);
      this.type = this.route.snapshot.url[0].path;
      this.service.passParams(id, this.type);
      this.detail = this.service.getDetailObjetct();
    })
  }
}
