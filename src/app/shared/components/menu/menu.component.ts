import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
public  menuItems: MenuItem[] | undefined = [];

  ngOnInit() {
      this.menuItems = [
          {
              label: 'New',
              icon: 'pi pi-desktop',
              items :[
                {
                  label :'Texto y fecha',
                  icon : 'pi pi-aling-left',
                  routerLink: '/basicos'
                },
                {
                  label :'Números',
                  icon : 'pi pi-dollar',
                  routerLink: '/numbers'

                },
                {
                  label :'No comunes',
                  icon : 'pi pi-globe',
                  routerLink: '/uncommon'

                },


              ]
          },
          {
            label:'Pipes personalizaos',
            icon : 'pi pi-cog',
            items :[
              {
                label:'Otro elemento',
                icon : 'pi pi-cog',

              }
            ]
          }
       
          
      ];
  }
}
