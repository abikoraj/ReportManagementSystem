import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Variant } from 'src/app/Models/variant';
import { VariantService } from 'src/app/services/variant.service';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {
  

  

  choosen:number=1;
  @Input()variant:Variant
  @Input()choosenvariants:any
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor(public variatnevent:VariantService) {
  }

  ngOnInit(): void {
    console.log("cv",this.choosenvariants);
    this.choosenvariants.forEach(element => {
          if(this.variant.id==element.vid){
            this.choosen=element.opid;
            console.log("choosing running");
          }
        });
        this.selected.emit({
          vid:this.variant.id,
          opid:this.choosen
        });
  }

  choose(id){
    this.choosen=id;
    this.selected.emit({
      vid:this.variant.id,
      opid:this.choosen
    });
  }

  set(variants){

  }
}
