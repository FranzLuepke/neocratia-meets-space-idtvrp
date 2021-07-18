import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [
    {
      title: ' New 1',
      url: 'https://twitter.com/torrenegra',
      text: `Wahey! Another week and another inspiring session with the Neocratia team - connecting #Bogota, #SanFran #Baranquilla and #Stockholm #Neocratia #disrputpolitics #liquiddemoracy #democracy`,
      photo:
        'https://st4.depositphotos.com/1000423/22272/i/600/depositphotos_222728098-stock-photo-city-panoramic-view.jpg'
    },
    {
      title: ' New 2',
      url: 'https://twitter.com/torrenegra',
      text: `A new #OnlinePlatform isn't enough to fix #democracy. But we CAN make an #innovative tool to allow smart #inclusive #debate #transparent and inclusive #decision-making. A start. Jürgen #Habermas may agree + Insights: https://buff.ly/2BgDo9Z #neocratia #Publi… See More`,
      photo:
        'https://st4.depositphotos.com/1000423/22272/i/600/depositphotos_222728098-stock-photo-city-panoramic-view.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
