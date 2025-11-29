import React from 'react';

function PaginaQuantidadeVisitantes() {
  const numero = 127;

  return (
    <div>
      <h1>Relatório de Visitantes</h1>
      <h2>Página: Quantidade</h2>
      <p>O número atual de visitantes no site é: {numero}</p>
    </div>
  );
}

export default PaginaQuantidadeVisitantes;