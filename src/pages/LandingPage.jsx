import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold">ETL-DataHub</h1>
          <p className="mt-4 text-xl">
            Revolucionando a Gestão de Não Conformidades no Setor Aeronáutico com Automação e Inteligência de Dados
          </p>
          <a 
            href="#sobre" 
            className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg font-bold hover:bg-gray-100 transition"
          >
            Saiba Mais
          </a>
        </div>
      </header>

      <section id="sobre" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800">O que é o ETL-DataHub?</h2>
          <p className="mt-8 text-lg text-justify leading-relaxed">
            No setor aeronáutico, a gestão de qualidade é crucial para garantir a segurança e a confiabilidade. Qualquer falha nos processos, conhecida como "não conformidade", pode comprometer a operação e até a segurança dos voos. O <strong>ETL-DataHub</strong> é uma solução inovadora que visa automatizar e aprimorar a gestão dessas não conformidades, utilizando tecnologias de ponta como Extração, Transformação e Carga de dados (ETL), RPA (Automação Robótica de Processos) e APIs de comunicação com sistemas internos como o SAP.
          </p>
          <p className="mt-6 text-lg text-justify leading-relaxed">
            Este projeto foi desenvolvido como parte de uma pesquisa aplicada em uma empresa do setor aeronáutico e propõe uma abordagem eficiente para lidar com grandes volumes de dados, melhorar a precisão e agilidade no processo de emissão de notas de não conformidade, e criar uma base sólida para a análise contínua desses dados.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800">O Problema</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-lg">
              <p className="leading-relaxed">
                A indústria aeronáutica é altamente regulada e qualquer não conformidade pode ter impactos significativos. Imagine um parafuso mal apertado em uma fuselagem ou uma cablagem mal conectada — esses problemas afetam diretamente a segurança dos passageiros e a reputação da empresa.
              </p>
              <p className="mt-4 leading-relaxed">
                Casos como o da Boeing em janeiro de 2024, onde um incidente com a fuselagem de um avião durante um voo resultou em uma queda de 8,5% no valor de mercado da empresa, mostram a importância de processos de qualidade bem estruturados. Este cenário ilustra a necessidade de soluções tecnológicas para gerir essas não conformidades com eficiência.
              </p>
            </div>
            <div className="text-lg">
              <p className="leading-relaxed">
                A gestão de não conformidades envolve processos repetitivos e, muitas vezes, manuais, o que aumenta o risco de erro humano e prejudica a eficiência das operações. Além disso, esses processos são demorados, resultando em perda de tempo e recursos.
              </p>
              <p className="mt-4 leading-relaxed">
                O <strong>ETL-DataHub</strong> foi criado para resolver esses problemas, utilizando automação de dados, RPA e inteligência analítica para garantir que cada não conformidade seja tratada rapidamente, com precisão e em conformidade com as rigorosas normas do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800">Tecnologias Utilizadas</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Python & Pandas</h3>
              <p className="mt-4 text-lg">
                A manipulação de grandes volumes de dados é feita com o Python, utilizando a biblioteca Pandas para análise e tratamento eficiente dos dados.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">FastAPI</h3>
              <p className="mt-4 text-lg">
                A API utilizada na solução é construída com FastAPI, oferecendo alto desempenho na comunicação entre o frontend e o backend.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">RPA e SAP Integration</h3>
              <p className="mt-4 text-lg">
                A integração com o SAP é automatizada por meio de RPA, eliminando a necessidade de inserções manuais e garantindo eficiência no processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold">Quer saber mais?</h2>
          <p className="mt-4 text-xl">
            Se você ficou interessado em colaborar ou deseja mais informações sobre o projeto, preencha o formulário de interesse clicando no botão abaixo.
          </p>
          <a 
            href="https://forms.google.com" 
            className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition"
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