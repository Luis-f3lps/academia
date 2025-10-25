// --- Selecionando Elementos do DOM ---
        const form = document.getElementById('tbmForm');
        const resultadoDiv = document.getElementById('resultado');
        const listaHistorico = document.getElementById('listaHistorico');
        const btnLimpar = document.getElementById('limparHistorico');

        // --- Chave do LocalStorage ---
        const CHAVE_STORAGE = 'historicoTBM';

        // --- Funções ---

        /**
         * Carrega e exibe o histórico salvo no localStorage.
         */
        function carregarHistorico() {
            const historico = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
            listaHistorico.innerHTML = ''; // Limpa a lista atual

            if (historico.length === 0) {
                listaHistorico.innerHTML = '<li>Nenhum cálculo salvo ainda.</li>';
                return;
            }

            // Adiciona cada item do histórico na lista (ul)
            historico.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nome} (${item.sexo}) - ${item.idade} anos, ${item.peso}kg, ${item.altura}cm | TMB: ${item.tbm.toFixed(2)} kcal`;
                listaHistorico.appendChild(li);
            });
        }

        /**
         * Salva um novo cálculo no localStorage.
         */
        function salvarCalculo(nome, idade, peso, altura, sexo, tbm) {
            const historico = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
            
            const novaEntrada = {
                nome,
                idade,
                peso,
                altura,
                sexo,
                tbm,
                data: new Date().toISOString()
            };

            historico.push(novaEntrada);
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(historico));
        }

        /**
         * Lida com o envio do formulário.
         */
        function handleCalcular(event) {
            event.preventDefault(); // Impede o recarregamento da página

            // Pega os valores dos campos do formulário
            const nome = document.getElementById('nome').value;
            const idade = parseFloat(document.getElementById('idade').value);
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);
            const sexo = document.getElementById('sexo').value;

            // Validação simples
            if (!nome || isNaN(idade) || isNaN(altura) || isNaN(peso) || !sexo) {
                resultadoDiv.innerHTML = 'Por favor, preencha todos os campos corretamente.';
                resultadoDiv.style.color = 'red';
                return;
            }

            let tbm = 0;

            // Aplica a fórmula correta baseada no sexo
            if (sexo === 'masculino') {
                // TBM = 88.362 + (13.397 * peso [kg]) + (4.799 * altura [cm]) – (5.677 * idade [anos])
                tbm = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
            } else if (sexo === 'feminino') {
                // TBM = 447.593 + (9.247 * peso) + (3.098 * altura) – (4.330 * idade)
                tbm = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
            }

            // Exibe o resultado
            resultadoDiv.style.color = 'var(--cor-texto)'; // Reseta a cor
            resultadoDiv.innerHTML = `Olá, ${nome}!<br>Sua TMB é de <span>${tbm.toFixed(2)}</span> calorias/dia.`;

            // Salva e atualiza o histórico
            salvarCalculo(nome, idade, peso, altura, sexo, tbm);
            carregarHistorico();

            // Opcional: Limpar o formulário após salvar
            // form.reset(); 
        }

        /**
         * Limpa todo o histórico do localStorage.
         */
        function limparHistorico() {
            if (confirm('Tem certeza que deseja apagar todo o histórico?')) {
                localStorage.removeItem(CHAVE_STORAGE);
                carregarHistorico();
            }
        }

        // --- Event Listeners ---

        // Chama a função handleCalcular quando o formulário for enviado
        form.addEventListener('submit', handleCalcular);

        // Chama a função limparHistorico quando o botão for clicado
        btnLimpar.addEventListener('click', limparHistorico);

        // Carrega o histórico assim que a página é aberta
        document.addEventListener('DOMContentLoaded', carregarHistorico);