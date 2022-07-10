// Crie uma class component 
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)
import React, { Component} from 'react';



 class Teste extends Component{
       state={
        nome:'Robson',
        idade: 40,
        comida: 'Pizza',
        musica : ['Pelados em Santos', 'Fuscão Preto', 'Florentina']
       };
       render(){
           return(

              <div>
                 <h1>Meu nome é {this.state.nome}</h1>
                 <h2>Tenho {this.state.idade} anos</h2>
                 <h3>Minha comida Favorita é {this.state.comida} :-)</h3>
                 
                  <ul>
                    
                    <li>{this.state.musica[0]}</li>
                    <li>{this.state.musica[1]}</li>
                    <li>{this.state.musica[2]}</li>
                  </ul>
                  
                
              </div>
           );

       }

 }
  export default Teste