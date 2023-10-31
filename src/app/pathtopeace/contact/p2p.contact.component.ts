import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'p2p-app-contact',
    templateUrl: './p2p.contact.component.html',
    styleUrls: ['./p2p.contact.component.scss']
})

export class P2pContactComponent implements OnInit {
  focus: any;
  focus1: any;
  contactForm: FormGroup;
  url = 'https://prod-26.australiaeast.logic.azure.com:443/workflows/b72fa0a6bebb442db1caf18fca22ec69/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=v0SPEeef1oZJXEYKNXuEqpaAm-vqxtVwQCiwIBGQwCQ&Content-Type=application/json'

  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.http.post<any>(this.url, this.contactForm.value).subscribe(data => {
      console.log(data)
    })
  }

}
