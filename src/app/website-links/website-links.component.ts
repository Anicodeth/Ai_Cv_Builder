import { Component } from '@angular/core';

@Component({
  selector: 'app-website-links',
  templateUrl: './website-links.component.html',
  styleUrls: ['./website-links.component.css']
})
export class WebsiteLinksComponent {
  linknlabel: string[] = ['Label', 'Link']
  counter: number = 0
  
  addLink(){
    let formArr: HTMLElement[] = []

    for (let element of this.linknlabel){
      let labelArr: HTMLElement[] = [];

      const label = this.addLabel(element);
      labelArr.push(label);

      labelArr.push(document.createElement('br'));

      const input = this.addInput(element, 'site-' + element);
      labelArr.push(input);

      const div = this.addDiv(labelArr, 'input-control');
      formArr.push(div);
    }

    const form = this.addForm(formArr, 'form-web');
    form.style.setProperty('display', 'flex');
    form.style.setProperty('justify-content', 'space-between');
    document.getElementById('here')?.append(form);
    
  }

  addLabel(name: string){
    const label = document.createElement('label');
    label.setAttribute('for', 'site-label');
    label.innerText = name;

    return label;
  }

  addInput(name: string, id: string){
    const input = document.createElement('input');
    input.name, input.id, input.type = name, id, 'text';

    return input;
  }

  addDiv(elements: HTMLElement[], divClass: string){
    const div = document.createElement('div');
    for (let element of elements){
      div.append(element);
    }
    
    div.setAttribute('class', divClass);
    return div
  }

  addForm(elements: HTMLElement[], id: string){
    const form = document.createElement('form');
    form.id = id

    for (let element of elements){
      form.append(element);
    }

    return form
  }

}
