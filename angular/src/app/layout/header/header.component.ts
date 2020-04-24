import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../../data/config.model';
import { Link } from '../../data/link.model';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'uic-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  navbarLinks$: Observable<Link[]>;

  constructor(private readonly config: ConfigService) {}

  ngOnInit(): void {
    this.navbarLinks$ = this.config.get().pipe(map<Config, Link[]>((cfg) => cfg.navigation.header));
  }
}
