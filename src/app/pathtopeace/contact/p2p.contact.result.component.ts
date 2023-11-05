import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'p2p-app-contact-result',
    templateUrl: './p2p.contact.result.component.html',
    styleUrls: ['./p2p.contact.component.scss']
})

export class P2pContactResultComponent implements OnInit {
  focus: any;
  focus1: any;
  result: string;

  header: string;
  image: string;
  firstMessage: string;
  secondMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.result = this.activatedRoute.snapshot.paramMap.get("result");
    this.determineResponse();
  }

  determineResponse() {
    if (this.result === "success") {
      this.header = "Good on You!";
      this.image = "assets/img/contact/contact-result-success.svg";
      this.firstMessage = "You\'ve taken your first step on the Path to Peace.";
      this.secondMessage = "You\'ll receive a reply within 48 hours.";
    } else {
      this.header = "Uh Oh!";
      this.image = "assets/img/contact/contact-result-failure.svg";
      this.firstMessage = "Something\'s gone wrong.";
      this.secondMessage = "Contact me on lachlan.querzoli@.gmail.com for the time being.";
    }
  }

}
