import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  
import { AuthguardServiceService } from "../../authguard-service.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }


  Languages = [
    {
      id: 1,
      title: "Geo"
    },
    {
      id: 2,
      title: "Eng"
    },
  ];

  currentLang =     {
      id: 1,
      title: "Geo"
    };
  LanguageDropdown = false;

  changeLanguage(e:number) 
  {
    this.currentLang = this.Languages[e];

  }

  checkAuth() {
    return true;
  }

  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}  
    
  canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
  }  
}
