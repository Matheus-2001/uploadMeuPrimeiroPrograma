import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  testeForm:FormGroup;
  
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.testeForm=this.fb.group({
      nome:['',Validators.required],
      cpf:['',Validators.required],
      dob:[],
      sex:['1'],
      prof:[],
    });
  }
  voltar(){
    console.log('valores: ' + this.testeForm.get('nome').value)

  }
}
