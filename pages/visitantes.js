import React from 'react';

// ------ NOSSO MINI COMPONENTE QUE USA PROPS ------
// Pense nisto como a "máquina de crachás".
// Note que agora a função recebe um argumento: 'props'.
function Cracha(props) {
  // 'props' é um objeto. Se passarmos <Cracha nome="Everton" cargo="Desenvolvedor" />,
  // o objeto 'props' será: { nome: 'Everton', cargo: 'Desenvolvedor' }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Crachá de Visitante</h3>
      <p><strong>Nome:</strong> {props.nome}</p>
      <p><strong>Cargo:</strong> {props.cargo}</p>
    </div>
  );
}


// ------ NOSSO COMPONENTE PRINCIPAL DA PÁGINA ------
function Visitantes() {
  // Agora, dentro da Home, vamos usar nossa "máquina de crachás"
  // várias vezes, passando "roteiros" (props) diferentes.

  return (
    <div>
      <h1>Controle de Visitantes</h1>

      {/* Usando o componente Cracha pela primeira vez */}
      <Cracha nome="Everton Lopes" cargo="Desenvolvedor em Treinamento" />

      {/* Usando o mesmo componente com dados diferentes */}
      <Cracha nome="Rodrigo Lozada" cargo="Gerente de Projetos" />

      {/* Podemos até passar variáveis! */}
      {(() => {
        const visitanteVip = 'Ronnie Singh';
        return <Cracha nome={visitanteVip} cargo="Diretor Executivo" />;
      })()}

    </div>
  );
}

export default Visitantes;