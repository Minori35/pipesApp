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
              icon: 'pi pi-fw pi-plus',
              items :[
                {
                  label :'Texto y fe  cha',
                  icon : 'pi pi-aling-left'
                },
                {
                  label :'Números',
                  icon : 'pi pi-dollar'
                },
                {
                  label :'No comunes',
                  icon : 'pi pi-globe'
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
