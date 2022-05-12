import { Component, OnInit } from '@angular/core';

const LIGHT = 'light';
const DARK = 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EnglishBattle';

  constructor() {}
  
  ngOnInit() {
    this.initDarkLight();
  }

  // -------------------- Nav Menu ---------------------
  toggleMobilMenu() {
    try {
      const hamburger: HTMLImageElement = this.queryImageById('#hamburger');
      const menu: HTMLImageElement = this.queryImageById('#menu');
      
      menu.classList.toggle('-right-full');
      menu.classList.toggle('right-0');
      hamburger.classList.toggle('active');
    } catch (error) {
      console.error(error);
    }
  }

  // ------------------- Dark-Mode ---------------------
  toggleDarkMode() {
    try {
      const darkButton: HTMLImageElement = this.queryImageById('#dark_button');
      this.toggleDarkLightLocalStorage(darkButton);
      this.toggleDarkLightIcon(darkButton);
      this.toggleDarkLightTheme(darkButton);
    } catch (error) {
      console.error(error);
    }
  }

  private toggleDarkLightLocalStorage (darkButton: HTMLImageElement) {
    if (localStorage.theme === LIGHT) localStorage.theme = DARK;
    else localStorage.theme = LIGHT;
  }
  
  private toggleDarkLightIcon (darkButton: HTMLImageElement) {
    if (localStorage.theme === LIGHT) darkButton.src = '../assets/img/icon_sun.svg';
    else darkButton.src = '../assets/img/icon_moon.svg';
  }
  
  private toggleDarkLightTheme (darkButton: HTMLImageElement) {
    if (localStorage.theme === LIGHT) document.documentElement.classList.remove(DARK);
    else document.documentElement.classList.add(DARK);
  }

  private initDarkLight () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.theme = DARK;
    else localStorage.theme = LIGHT;

    try {
      const darkButton: HTMLImageElement = this.queryImageById('#dark_button');
      this.toggleDarkLightTheme(darkButton);
      this.toggleDarkLightIcon(darkButton);
    } catch (error) {
      console.error(error);
    }
  }

  private queryImageById(imageId: string): HTMLImageElement {
    const image: HTMLImageElement | null = document.querySelector(imageId);
    if (!image){
      throw new Error(`AppComponent: Selector ${imageId} is not defined`)
    }
    else
      return image;
  }
}