import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingService: SettingsService) { }

  ngOnInit() {
    this.cargarCheck();
  }

  cambiarTema(tema: string, link: any) {
    this.applyCheck(link);
    this.settingService.aplicarTema(tema);
  }

  applyCheck(link: any) {
    const list = Array.prototype.slice.call(document.getElementsByClassName('selector'));

    list.forEach(element => {
      element.classList.remove('working');
    });

    link.classList.add('working');
  }

  cargarCheck() {
    const list = Array.prototype.slice.call(document.getElementsByClassName('selector'));
    let tema = this.settingService.ajustes.tema;

    list.forEach(element => {
      if (tema === element.getAttribute('data-theme')) {
        element.classList.add('working');
        return;
      }
    });
  }

}
