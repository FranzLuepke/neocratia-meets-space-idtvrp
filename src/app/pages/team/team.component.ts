import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers = [
    {
      name: 'Alexander Torrenegra',
      twitter: '@torrenegra',
      twitterUrl: 'https://twitter.com/torrenegra',
      description: `Alexander Torrenegra is a Colombian-American activist and entrepreneur.
      He founded multiple companies including Torre, Bunny Inc., and Voice123.
      He was featured in MIT’s Technology Review as Colombia’s Top Young Innovator of 2012.
      In 2015, he joined the World Economic Forum’ Young Global Leaders community.
      In the US, Alexander is an activist that pushes for immigration reform.
      In Colombia, he works to improve government support for innovation. Alexander is the founder of Neocratia.`,
      bioUrl: 'https://bio.torre.co/torrenegra',
      photo: 'https://pbs.twimg.com/profile_images/933013816580849664/8-z7es-z_400x400.jpg'
    },
    {
      name: 'Helena Schwertheim',
      twitter: '',
      twitterUrl: '',
      description: `Helena is passionate about innovating for a more accountable democracy.
      Originally from New Zealand, she has a background in political studies, sociology and international relations,
      having lived and studied in Australia, Colombia, Spain and France, and is now based in Sweden.
      During the day Helena is a researcher, analysing democratic trends. By night she works with Neocrats to upgrade how laws are made.`,
      bioUrl: 'https://www.linkedin.com/in/helenaschwertheim/',
      photo: 'https://pbs.twimg.com/profile_images/1337056300262432769/1s6tSB2M_400x400.jpg'
    },
    {
      name: 'Andrés González',
      twitter: '',
      twitterUrl: '',
      description: `Andrés is a software developer, entrepreneur and tech enthusiast. Originary from Colombia,
      he has been in the software industry for more than 10 years leading projects for companies around the world.
      He is the founder and technical leader of Swapps a software development company based in Colombia. He is the maintainer
      of the Neocratium platform.`,
      bioUrl: 'https://www.linkedin.com/in/andresgz/',
      photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQFjIA_UrBVjWg/profile-displayphoto-shrink_200_200/0/1586961207456?e=1630540800&v=beta&t=liJXqQS-1eX2GJjITj6FbS_rLZXMC2syFRGF9g_dmxA'
    },
    {
      name: 'Rolf Veldman',
      twitter: '',
      twitterUrl: '',
      description: `Rolf is a project manager and change manager with a passion for creative writing and 'Learning organizations'.
      Curiosity is the driving force behind his ambition. This attitude leads Rolf to be creative, assertive and open minded.
      Fueled by his academic education in political history Rolf has always had a more than average interest in politics.
      He joined Neocratia in November 2017 and is responsible for Recruitment, Fundraising and Political Advice.`,
      bioUrl: 'https://www.linkedin.com/in/rolfveldman/',
      photo: 'https://pbs.twimg.com/profile_images/885495923232657410/QoCBaLOU.jpg'
    },
    {
      name: 'Nicolás Contreras',
      twitter: '@ni500',
      twitterUrl: 'https://twitter.com/ni500',
      description: `Our project leader. Nicolás is a software engineer and geek. Activist and entrepreneur with
      background in industrial and Electronic Engineer, founder of companies as Vaki and PappCorn, a startup incubator that
      had launch products as https://vaki.co, https://guardican.com, http://trepsi.co, http://treeoflifeapp.com, https://bhiveconsulting.co
      and many others. Product Manager at Vaki, CEO at PappCorn and Product Manager, main developer and mantainer of Neocratium platform on
      Neocratia.`,
      bioUrl: 'https://www.linkedin.com/in/rolfveldman/',
      photo: 'https://pbs.twimg.com/profile_images/1397241186281263115/44bhlCjt_400x400.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {}

  goTo(url: string) {
    window.open(url);
  }
}
