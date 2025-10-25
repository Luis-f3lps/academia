document.addEventListener('DOMContentLoaded', function() {

    // --- LISTA DE TRABALHOS ---
    const workList = [
        "PALAVRAS QUE CUIDAM: A MEDIAÇÃO AFETUOSA DA LITERATURA NA PEDIATRIA HOSPITALAR",
        "INFÂNCIA, RACISMO E EDUCAÇÃO: A CONSTRUÇÃO DE UMA ESCOLA INCLUSIVA",
        "PRODUÇÃO DE MUDAS DE DELONIX REGIA SOB DIFERENTES VOLUMES DE TUBETES E FORMULAÇÕES DE OSMOCOTE®",
        "DESAFIOS E POSSIBILIADES NA INCLUSÃO DE CRIANÇAS COM AUTISMO NA EDUCAÇÃO INFANTIL: UM OLHAR DA DOCÊNCIA",
        "UTILIZAÇÃO DA CASCA DO URUCUM PARA A PRODUÇÃO DE MUDAS DE SIBIPIRUNA SOB DIFERENTES NÍVEIS DE SOMBREAMENTO",
        "PARÂMETROS MORFOLÓGICOS DE MUDAS DE MORINGA SOB DIFERENTES VOLUMES DE TUBETES E SUBSTRATOS",
        "APRENDENDO COM O LÚDICO: O BINGO SILÁBICO COMO FERRAMENTA DE ALFABETIZAÇÃO NO 1º ANO",
        "EFEITO DA GRANULOMETRIA E PROPORÇÃO DA CASCA DO CAFÉ NA COMPOSIÇÃO DE SUBSTRATOS PARA A PRODUÇÃO DE MUDAS DE PELTOPHORUM DUBIUM (SPRENGEL) TAUBERT",
        "PRODUÇÃO DE MUDAS DE MORINGA SOB DIFERENTES VOLUMES DE TUBETES E DOSES DE ADUBO DE LIBERAÇÃO LENTA",
        "INFLUÊNCIA DO SOMBREAMENTO E DO VOLUME DO TUBETE NA PRODUÇÃO DE MUDAS DE CANAFÍSTULA",
        "A PALAVRA ESCAPOU!: UMA EXPERIÊNCIA DO PIBID COM O ENSINO DA ORTOGRAFIA",
        "DISTRIBUIÇÃO ESPACIAL DO PARÂMETRO CURVE NUMBER (CN) EM FUNÇÃO DE DIFERENTES CONFIGURAÇÕES DE SOLO, RELEVO E USO/COBERTURA DA TERRA NA BACIA EXPERIMENTAL DO RIBEIRÃO ALMÊCEGAS – NOVORIZONTE/MG",
        "PIBID E EDUCAÇÃO ANTIRRACISTA: PRÁTICAS NA EDUCAÇÃO INFANTIL",
        "SECAGEM EM CAMADA DE ESPUMA DA POLPA DE MARACUJÁ: AVALIAÇÃO DA CINÉTICA E PARÂMETROS TECNOLÓGICOS DO PRODUTO EM PÓ.",
        "CULTURA, DANÇA E ALFABETIZAÇÃO: PROJETO INTEGRADO SERTÃO E FOLCLORE EM PRÁTICAS",
        "NEUROCIÊNCIA E EDUCAÇÃO: VIVÊNCIAS E CONTRIBUIÇÕES PARA A ALFABETIZAÇÃO",
        "ASPECTOS GERAIS DO DESEMPENHO DA PITAYA (HYLOCEREUS SPP.) NAS CONDIÇÕES EDAFOCLIMÁTICAS DE SALINAS, MG.",
        "EXPERIÊNCIAS DO PIBID: JOGOS PEDAGÓGICOS",
        "PRODUÇÃO DO BIOCHAR A PARTIR DE BIOMASSA DE ESPÉCIES DE BAMBU SP.",
        "EDUCAÇÃO AMBIENTAL NA ESCOLA: UM OLHAR A PARTIR DA PRÁTICA DOCENTE",
        "CUIDADO, TRYPANOSOMA CRUZI NA FEIRA",
        "LER PARA APRENDER: CONSTRUINDO O HÁBITO DA LEITURA UMA EXPERIÊNCIA DO PIBID",
        "PRODUTIVIDADE DE PITAYA HILOCEREUS POLYRHIZUS EM COMPARAÇÃO COM A HILOCEREUS UNDATUS CULTIVADAS EM PROJETO DE PESQUISA NO MUNICÍPIO DE SALINAS, MINAS GERAIS",
        "USO DE SORO DE QUEIJO NA SUPLEMENTÇÃO DE BOVINOS",
        "A ARTE DA CONTAÇÃO DE HISTÓRIAS PARA CRIANÇAS HOSPITALIZADAS",
        "EDUCAÇÃO DE TODOS E PARA TODOS: CURRICULARIZAÇÃO DA EXTENSÃO E INCLUSÃO EDUCACIONAL",
        "CULTIVANDO AS SEMENTES DO SABER",
        "ENTRE O LABORATÓRIO E O BEBEDOURO: AVALIAÇÃO DA QUALIDADE DA ÁGUA NO IFNMG – SALINAS",
        "PRÁTICAS PEDAGÓGICAS E EDUCAÇÃO AMBIENTAL: UM ESTUDO DE CASO EM UMA ESCOLA PÚBLICA EM SALINAS/MG",
        "PRÁTICA PEDAGÓGICA, EDUCAÇÃO AMBIENTAL E INTERDISCIPLINARIDADE :ARTICULAÇOES PARA UMA FORMAÇÃO DE PROFESSORES CRITICA E TRANSFORMADORA",
        "HIV NA FEIRA: MITOS E VERDADES",
        "FORMAÇÃO CONTINUADA DE PROFESSORES DE MATEMÁTICA: UM PROJETO DE EXTENSÃO NO MUNICÍPIO DE SALINAS",
        "RELATO DE EXPERIÊNCIA NO PIBID: REFLEXÕES SOBRE DESIGUALDADE SOCIAL E FORMAÇÃO DOCENTE",
        "SERES VIVOS E NÃO VIVOS NA EDUCAÇÃO INFANTIL: UMA EXPERIÊNCIA NO PIBID",
        "EDUCAÇÃO AMBIENTAL NA PRÁTICA PEDAGÓGica",
        "EDUCAÇÃO AMBIENTAL NO CURRÍCULO ESCOLAR: PRÁTICAS DE PROFESSORES(AS) DE UMA ESCOLA PÚBLICA DE SALINAS/MG",
        "TECNOLOGIA NA PRÁTICA DO APRENDIZADO: RELATO DE EXPERIÊNCIA NO ENSINO FUNDAMENTAL I COM O PIBID",
        "ROBÓTICA EDUCACIONAL E APRENDIZAGEM ATIVA: EXPERIMENTAÇÃO, LUDICIDADE E ENSINO DE ENERGIA MECÂNICA EM ESCOLAS PÚBLICAS DE SALINAS (MG)",
        "A GLOBALIZAÇÃO E SEUS IMPACTOS NA EDUCAÇÃO PROFISSIONAL E NA FORMAÇÃO DE PROFESSORES",
        "JOVENS MINEIROS SUSTENTÁVEIS: EDUCAÇÃO AMBIENTAL E PROTAGONISMO INFANTIL NA ESCOLA MUNICIPAL DR. WALTER FERREIRA DE ARAÚJO",
        "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS : APRENDIZAGEM ATIVA E NOVOS ARRANJOS PEDAGÓGICOS",
        "A UTILIZAÇÃO DE MATERIAIS MANIPULATIVOS NA INTRODUÇÃO DO TEOREMA DE PITÁGORAS: UM RELATO DE EXPERIÊNCIA",
        "EDUCAÇÃO AMBIENTAL: COMO OS PROFESSORES ESTÃO TRABALHANDO O TEMA EM SALA DE AULA?",
        "PRATICA PEDAGOGICA E EDUCAÇAO AMBIENTAL: REFLEXOES NECESSARIAS",
    ];
    
    const generatePdfBtn = document.getElementById('generatePdfBtn');
    let allPagesContainer = null; // Variável para guardar o container

    // Função que cria o HTML para uma única página
    function createPageHTML(title) {
        return `
            <div class="page-container">
                <h2>Ficha de Avaliação de Trabalho</h2>
                <h3>Trabalho: <span>${title}</span></h3>
                                                <table>
                    <thead>
                        <tr>
                            <th>Pontos Obrigatorios</th>
                            <th>Sim</th>
                            <th>Não</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Apresentou um produto?</b></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Pelo menos um dos autores estava presente?</b></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Critério de Avaliação</th>
                            <th>Pontuação Máxima</th>
                            <th>Pontuação Atribuída</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Organização:</b> Discorreu sobre o Objetivo, Material e Métodos, Resultados e Considerações do projeto?</td>
                            <td class="center">20</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Estética e Clareza:</b> Estética dos produtos do trabalho e clareza na sua apresentação.</td>
                            <td class="center">30</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Domínio do Conteúdo:</b> Domínio do conteúdo abordado.</td>
                            <td class="center">30</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Linguagem:</b> Linguagem adequada.</td>
                            <td class="center">10</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Impacto na Sociedade:</b> O conhecimento desenvolvido no trabalho poderá apresentar impactos sociais, econômicos, ambientais ou culturais significativos?</td>
                            <td class="center">10</td>
                            <td></td>
                        </tr>
                        <tr class="total-row">
                            <td><b>PONTUAÇÃO TOTAL</b></td>
                            <td class="center"><b>100</b></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="footer">
                    <p><strong>Avaliador(a):</strong> ___________________________________________________________</p>
                    <p><strong>Data:</strong> ____/____/______</p>
                </div>
            </div>
        `;
    }

    // Função para limpar a tela depois da impressão
    function afterPrint() {
        console.log("Evento 'afterprint' disparado. Limpando a tela.");
        // Remove o container das páginas
        if (allPagesContainer) {
            document.body.removeChild(allPagesContainer);
            allPagesContainer = null;
        }
        // Reabilita o botão
        generatePdfBtn.disabled = false;
        generatePdfBtn.textContent = 'Gerar PDF de Todos os Trabalhos';
        
        // Remove o 'listener' para não acumular
        window.removeEventListener('afterprint', afterPrint);
    }

    // Adiciona o evento de clique ao botão
    generatePdfBtn.addEventListener('click', function() {
        
        generatePdfBtn.disabled = true;
        generatePdfBtn.textContent = 'Preparando para impressão...';
        console.log("Gerando HTML das páginas...");

        // Cria o container que vai guardar todas as páginas
        allPagesContainer = document.createElement('div');
        allPagesContainer.id = 'pdf-all-pages'; // ID para o CSS
        
        // Preenche o container com todas as páginas
        workList.forEach(workName => {
            allPagesContainer.innerHTML += createPageHTML(workName);
        });

        // Adiciona o container ao corpo do documento (vai ficar visível)
        document.body.appendChild(allPagesContainer);
        console.log("Páginas adicionadas ao DOM. Chamando window.print().");

        // Adiciona o 'listener' que vai limpar a tela DEPOIS que
        // a janela de impressão for fechada.
        window.addEventListener('afterprint', afterPrint);

        // Chama a janela de impressão do navegador
        // É AQUI QUE VOCÊ DEVE ESCOLHER "SALVAR COMO PDF"
        window.print();
    });
});