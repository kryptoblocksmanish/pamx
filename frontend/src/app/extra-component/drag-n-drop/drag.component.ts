import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragComponent {
  // This is for the basic example and for general
  

  private hasClass(el: any, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(
        new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'),
        ''
      );
    }
  }

  private onDrag(args: any): void {
    const [e] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any): void {
    const [e] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args: any): void {
    const [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any): void {
    const [el] = args;
    this.removeClass(el, 'ex-over');
  }

  // tslint:disable-next-line:member-ordering
  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  // tslint:disable-next-line:member-ordering
  public many2: Array<string> = ['Explore', 'them'];

  private onDropModel(args: any): void {
    const [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args: any): void {
    const [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }
}