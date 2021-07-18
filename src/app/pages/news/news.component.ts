import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [
    {
      title: 'Neocratia team is working',
      url:
        'https://www.facebook.com/369286796836227/photos/a.395012920930281/424314384666801/',
      text: `Wahey! Another week and another inspiring session with the Neocratia team - connecting #Bogota, #SanFran #Baranquilla and #Stockholm #Neocratia #disrputpolitics #liquiddemoracy #democracy`,
      photo:
        'https://scontent.fbog4-1.fna.fbcdn.net/v/t31.18172-8/27368771_424314384666801_918418003290341770_o.png?_nc_cat=105&ccb=1-3&_nc_sid=2c4854&_nc_eui2=AeFnF6UKe7lkxnuAxbaA9jo_ezMC1N_zs3V7MwLU3_OzdVKQNqASNzYs2HB7LMGBnok&_nc_ohc=q4RQSm1X-CIAX8cvwyV&_nc_ht=scontent.fbog4-1.fna&oh=2ea7c7b777a7e06c8309de0c7b429890&oe=60F8CB0B'
    },
    {
      title: ' New Tools!',
      url:
        'https://www.facebook.com/369286796836227/photos/a.395012920930281/418262291938677/',
      text: `A new #OnlinePlatform isn't enough to fix #democracy. But we CAN make an #innovative tool to allow smart #inclusive #debate #transparent and inclusive #decision-making. A start. Jürgen #Habermas may agree + Insights: https://buff.ly/2BgDo9Z #neocratia #Publi… See More`,
      photo:
        'https://scontent.fbog4-2.fna.fbcdn.net/v/t31.18172-8/26685146_418262291938677_6152765433441159346_o.png?_nc_cat=102&_nc_rgb565=1&ccb=1-3&_nc_sid=2c4854&_nc_eui2=AeFfJRhNEu7Z5SaNX2tZZNZv9F0o7G5BXrr0XSjsbkFeullXYmTObRcJxP0URPzKpeo&_nc_ohc=CAkgyYNpYvQAX9QNFL6&_nc_ht=scontent.fbog4-2.fna&oh=8866ceb3d9fa56f249312a299342e5cf&oe=60F8DB40'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
