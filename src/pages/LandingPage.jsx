import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold">ETL-DataHub</h1>
          <p className="mt-6 text-2xl text-gray-600 max-w-2xl mx-auto">
            Automação e Inteligência de Dados para a Gestão de Não Conformidades no Setor Aeronáutico
          </p>
          <a
            href="#sobre"
            className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-full shadow-md font-medium hover:bg-gray-800 transition-all"
          >
            Saiba Mais
          </a>
        </div>
      </header>

      {/* Seção: Sobre o Projeto */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Sobre o ETL-DataHub</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O <strong>ETL-DataHub</strong> é uma solução completa para a gestão de não conformidades no setor aeronáutico, que abrange desde a integração e automação de dados até o front-end amigável para os usuários. O sistema é composto por vários blocos principais: bancos de dados, backend com ETL e DataMart, front-end e automação com RPA.
          </p>
        </div>
      </section>

      {/* Seção: Blocos do Sistema */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Arquitetura do Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-lg text-gray-600">
            {/* Bancos de Dados */}
            <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transform transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Bancos de Dados</h3>
              <p className="leading-relaxed text-center">
                O sistema permite a utilização de diferentes fontes de dados que armazenem as informações de não conformidades, históricos e auditorias. 
              </p>
            </div>
            {/* Backend, ETL e DataMart */}
            <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transform transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Backend, ETL e DataMart</h3>
              <p className="leading-relaxed text-center">
                O backend do ETL-DataHub foi desenvolvido em Python, utilizando FastAPI para a construção de uma API robusta. O processo de ETL extrai dados brutos, transforma em informações úteis e carrega no DataMart para fácil acesso e análise.
              </p>
            </div>
            {/* Frontend */}
            <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transform transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Frontend</h3>
              <p className="leading-relaxed text-center">
                A interface do usuário é construída com bibliotecas gráficas de Python para desenvolver uma aplicação desktop que é autenticado no SAP com o usuário de Windows.
              </p>
            </div>
            {/* RPA */}
            <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transform transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">Automação com RPA</h3>
              <p className="leading-relaxed text-center">
                Robotic Process Automation (RPA) automatiza tarefas repetitivas no SAP, como o preenchimento de campos do SAP. O RPA é integrado ao sistema para garantir que processos manuais sejam executados de maneira eficiente e sem erros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Expansão do Projeto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Expansão e Consultoria</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A visão do <strong>ETL-DataHub</strong> é expandir a solução para além do setor aeronáutico, permitindo que pequenas e médias empresas em outros segmentos industriais implementem soluções de gestão de qualidade. Estamos transformando nossa experiência em uma consultoria que auxilia empresas a automatizarem seus processos e a melhorarem a gestão da qualidade.
          </p>
        </div>
      </section>

      {/* Seção de Formulário */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Interessado em Expandir a Solução?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Se você deseja otimizar seus processos de gestão de qualidade com o ETL-DataHub, preencha o formulário de interesse. Vamos entender como podemos ajudá-lo.
          </p>
          <a
            href="."
            className="inline-block bg-black text-white px-8 py-3 rounded-full shadow-md font-medium hover:bg-gray-800 transition-all"
          >
            Preencher Formulário
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 ETL-DataHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
