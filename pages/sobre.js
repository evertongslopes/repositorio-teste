import React from 'react';

// Renomeamos de 'Cracha' para 'InfoEquipe' para evitar conflito se quisermos reutilizar
function InfoEquipe({ nome, cargo }) {
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>Membro da Equipe</h3>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Cargo:</strong> {cargo}</p>
    </div>
  );
}

// ------ MUDANÇA PRINCIPAL AQUI ------
// Renomeie a função principal de 'Home' para 'PaginaSobre'
function PaginaSobre() {
  const ceo = { nome: 'Everton Lopes', cargo: 'CEO & Fundador' };
  const cto = { nome: 'Jane Doe', cargo: 'Diretora de Tecnologia' };

  return (
    <div>
      <h1>Sobre a Nossa Empresa</h1>
      <p>Esta é a página que fala sobre nossa incrível equipe.</p>

      <InfoEquipe nome={ceo.nome} cargo={ceo.cargo} />
      <InfoEquipe nome={cto.nome} cargo={cto.cargo} />
    </div>
  );
}

// E AQUI, exporte o novo nome do componente
export default PaginaSobre;