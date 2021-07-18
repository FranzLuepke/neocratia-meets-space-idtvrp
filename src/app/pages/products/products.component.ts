import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      title: 'CitySight',
      text: `A web site that contains the latests news and statistics about what goverment is doing, allowing for good information at all times.`,
      photo:
        'https://st4.depositphotos.com/1000423/22272/i/600/depositphotos_222728098-stock-photo-city-panoramic-view.jpg'
    },
    {
      title: 'Liquid democracy',
      text:
        'Democracy should be liquid, not all the votes on a goverment should be the same. Citizens should be able to decide who has more decision power delegating their votes. Also, politicians must make public their opinion about every law and project they will vote, citizens be involved on the debate so they can decide to who give their vote.',
      photo:
        'https://blog.vocaleyes.org/wp-content/uploads/2019/10/liquid_democracy.png'
    },
    {
      title: 'Transparent money',
      text:
        "Money movements should be transparent, politicians can't owe favors to corporations or rich people, they need to be free to take the best decisions for the people. Also, the money the goverment spends comes from our taxes, is our money, so we need to see where it goes, why it goes there and what are the projections. We are their investments, they need to show us the money.",
      photo:
        'https://images.techhive.com/images/article/2015/04/woman_stacking_gold_coins_salary_currency_wealth_finance_thinkstock_465223667-100580824-large.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
