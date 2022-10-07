import { Component, ElementRef, ViewChild } from '@angular/core';
import { } from '@formio/angular';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {

  @ViewChild('json') jsonElement?: ElementRef | any;
  @ViewChild('formio') formio: any;
  public form: any = {
    components: [],
  };
  options: any = {
    builder: {
      premium: {
        title: "More Advanced"
      }
    }
  }
  guardarFormulario() {
    console.log("The inner html is : ", this.jsonElement.nativeElement.innerHTML)
    if (this.jsonElement.nativeElement.innerHTML == '') {
      this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.formio.form, null, 4)));
      const json = document.createTextNode(JSON.stringify(this.formio.form, null, 4));
    }
    else {
      this.jsonElement.nativeElement.innerHTML = '';
    }
  }
}
