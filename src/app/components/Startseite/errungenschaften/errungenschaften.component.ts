import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-errungenschaften',
  templateUrl: './errungenschaften.component.html',
  styleUrls: ['./errungenschaften.component.css']
})
export class ErrungenschaftenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
   this.router.events
     .pipe(filter((event: any) => event instanceof NavigationEnd))
     .subscribe((event: any) => {
       if (event.url === '/#' || event.url === '/#') {
         this.router.navigate(['/startButton']);
       }
     });
 }
}
