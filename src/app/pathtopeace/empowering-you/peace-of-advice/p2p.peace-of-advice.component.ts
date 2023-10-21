import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PeaceOfAdvice } from '../../../classes/peace-of-advice';
import { PeaceOfAdviceEntries } from '../../../data/peace-of-advice-entries.service';

@Component({
    selector: 'p2p-app-peace-of-advice',
    templateUrl: './p2p.peace-of-advice.component.html',
    styleUrls: ['./p2p.peace-of-advice.component.scss']
})

export class P2pPeaceOfAdviceComponent implements OnInit {
  focus: any;
  focus1: any;

  peacesOfAdvice: PeaceOfAdvice[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.peacesOfAdvice = new PeaceOfAdviceEntries().peaceOfAdviceEntries;
  }

  santiseUrl(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
