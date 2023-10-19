import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Podcast } from '../../../../classes/podcast';
import { PodcastEntries } from '../../../../data/podcast-entries.service';

@Component({
    selector: 'p2p-app-your-stories-podcasts',
    templateUrl: './p2p.your-stories.podcasts.component.html',
    styleUrls: ['./p2p.your-stories.podcasts.component.scss']
})

export class P2pYourStoriesPodcastsComponent implements OnInit {
  focus: any;
  focus1: any;

  podcasts: Podcast[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.podcasts = new PodcastEntries().podcastEntries;
  }

  santiseUrl(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
