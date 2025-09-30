const flashcardsData = {
    cooperativas: [
        { q: "Qual a base legal da Sociedade Cooperativa?", a: "Constituição Federal (Art. 5º, XVIII e Art. 174, § 2º), Lei 5.764/71 (Lei Geral das Cooperativas) e Código Civil (Arts. 1093-1096)." },
        { q: "Qual o objetivo principal de uma cooperativa?", a: "Prestação de serviços aos associados (mutualismo), sem objetivo primordial de lucro. O foco é o proveito comum dos membros." },
        { q: "Qual a natureza jurídica da cooperativa?", a: "É sempre uma sociedade simples (de pessoas), de natureza civil, e não está sujeita à falência." },
        { q: "Como funciona o capital social em uma cooperativa?", a: "É variável. Aumenta com a entrada de novos membros e diminui com a saída, refletindo o princípio da 'porta aberta'." },
        { q: "Qual o princípio fundamental do direito de voto em uma cooperativa?", a: "Gestão democrática: 'um associado, um voto'. O poder de decisão é igualitário e não depende do capital investido." },
        { q: "Qual o número mínimo de pessoas para constituir uma cooperativa?", a: "Regra geral: mínimo de 20 pessoas físicas. Exceção: cooperativas de trabalho, que podem ser constituídas com um mínimo de 7 sócios." },
        { q: "Como as cooperativas são classificadas quanto à sua estrutura?", a: "Em Singulares (pessoas físicas), Cooperativas Centrais/Federações (mínimo de 3 singulares), e Confederações (mínimo de 3 federações)." },
        { q: "Como são destinados os resultados positivos (sobras)?", a: "Após a dedução para fundos obrigatórios, as sobras são distribuídas aos associados na proporção de suas operações com a cooperativa (retorno)." },
        { q: "Quais são os órgãos de governança da cooperativa?", a: "A estrutura é tripartite: Assembleia Geral (órgão supremo), Conselho de Administração/Diretoria (órgão executivo) e Conselho Fiscal (órgão de fiscalização)." },
        { q: "Quais são os fundos obrigatórios que uma cooperativa deve constituir?", a: "O Fundo de Reserva, para reparar perdas e desenvolver atividades, e o Fundo de Assistência Técnica, Educacional e Social (FATES), para os associados." },
    ],
    comanditaAcoes: [
        { q: "Qual a base legal da Sociedade em Comandita por Ações?", a: "Lei das S/A (Lei 6.404/76, Arts. 280-284). Seu capital é dividido em ações e rege-se pelas normas das S/A, com as modificações da lei." },
        { q: "Qual a estrutura de responsabilidade dos sócios?", a: "Há duas categorias: sócios-diretores (comanditados), com responsabilidade ilimitada, e acionistas (comanditários), com responsabilidade limitada ao valor de suas ações." },
        { q: "Como é formado o nome empresarial?", a: "Adota firma ou razão social, que deve conter o nome de um ou mais sócios-diretores, seguido da expressão 'Comandita por Ações'." },
        { q: "Qual a consequência de ter o nome na firma ou razão social?", a: "Os sócios cujos nomes figuram na firma assumem responsabilidade subsidiária, ilimitada e solidária pelas obrigações sociais." },
        { q: "Quem pode administrar a Comandita por Ações?", a: "Apenas sócios ou acionistas podem ser diretores/gerentes. São nomeados no estatuto, sem limite de tempo de mandato." },
        { q: "Como um sócio-diretor pode ser destituído?", a: "Somente por deliberação de acionistas que representem, no mínimo, dois terços (2/3) do capital social." },
        { q: "A Assembleia Geral tem poderes ilimitados?", a: "Não. Atos essenciais como mudar o objeto social, aumentar ou diminuir o capital, exigem o consentimento dos diretores." },
        { q: "Quais institutos comuns em S/A NÃO se aplicam à Comandita por Ações?", a: "A lei afasta a aplicação de institutos como Conselho de Administração, autorização estatutária para aumento de capital, voto plural e bônus de subscrição." }
    ],
    orgaosSA: [
        { q: "Quais são os quatro órgãos essenciais de uma Sociedade Anônima (S.A.)?", a: "Assembleia Geral, Conselho de Administração, Diretoria e Conselho Fiscal." },
        { q: "Qual é a função da Assembleia Geral (AG) em uma S.A.?", a: "É o órgão deliberativo máximo, com competência para tratar de todos os assuntos relacionados ao objeto social da companhia." },
        { q: "Quem tem a competência principal para convocar a Assembleia Geral?", a: "Em regra, a convocação é de competência do Conselho de Administração. Na inércia deste, outros órgãos ou acionistas podem convocar." },
        { q: "Qual a diferença entre Assembleia Geral Ordinária (AGO) e Extraordinária (AGE)?", a: "A AGO ocorre anualmente para matérias específicas (contas, lucros, eleição). A AGE trata de todos os outros assuntos, sendo convocada quando necessário." },
        { q: "Quais são as matérias de competência exclusiva da AGO?", a: "Tomar contas dos administradores, deliberar sobre a destinação do lucro líquido e dividendos, e eleger administradores e membros do conselho fiscal." },
        { q: "Como deve ser feita a convocação para a Assembleia Geral?", a: "Por meio de edital publicado 3 vezes em jornal de grande circulação e no Diário Oficial, com antecedência específica para companhia aberta e fechada." },
        { q: "Qual o órgão responsável pela administração da S.A.?", a: "A administração compete ao Conselho de Administração (deliberativo) e à Diretoria (executivo/representação). Em algumas S.A.s, pode haver apenas a Diretoria." },
        { q: "Quais companhias são obrigadas a ter um Conselho de Administração?", a: "As companhias abertas e as de capital autorizado." },
        { q: "Quais são os deveres fundamentais de um administrador de S.A.?", a: "Dever de diligência (cuidado), dever de lealdade, dever de se abster em conflito de interesses e dever de informar ao mercado." },
        { q: "O administrador responde pessoalmente pelas obrigações da sociedade?", a: "Não, desde que atue em virtude de um ato regular de gestão. Ele responde civilmente por prejuízos causados com culpa ou dolo, ou violação da lei/estatuto." },
        { q: "O que é a Ação Social de Responsabilização contra o administrador?", a: "É a ação movida pela companhia, mediante autorização da Assembleia Geral, para reparar os danos causados pelo administrador ao patrimônio social." },
        { q: "Qual a composição mínima do Conselho de Administração?", a: "É composto por, no mínimo, 3 membros, eleitos pela Assembleia Geral." },
        { q: "O que é um Conselheiro Independente e quando ele é obrigatório?", a: "É um membro sem vínculos com a gestão ou acionistas majoritários. É obrigatório na composição do conselho de companhias abertas, conforme regras da CVM." },
        { q: "Qual a função da Diretoria?", a: "É o órgão de representação legal e execução da gestão dos negócios sociais. Os diretores são os executivos da companhia." },
        { q: "Qual a principal função do Conselho Fiscal?", a: "Fiscalizar os atos dos administradores, verificar o cumprimento dos deveres legais e opinar sobre as demonstrações financeiras, assessorando a Assembleia Geral." },
        { q: "O funcionamento do Conselho Fiscal é sempre permanente?", a: "Não. Sua existência é obrigatória, mas o funcionamento é facultativo (instalado a pedido de acionistas). É permanente apenas em sociedades de economia mista ou se o estatuto assim prever." },
        { q: "Quem não pode ser membro do Conselho Fiscal?", a: "Membros da administração, empregados da companhia ou de controladas, e cônjuge ou parente de administrador até 3º grau." }
    ],
    orgaosSADois: [
        { q: "Qual é o órgão máximo de tomada de decisões em uma S.A.?", a: "A Assembleia Geral, que é uma reunião de acionistas para deliberar sobre assuntos cruciais da empresa." },
        { q: "Cite 3 competências da Assembleia Geral.", a: "Alterar o Estatuto Social, eleger ou destituir administradores e fiscais, e aprovar as contas da administração." },
        { q: "O Conselho de Administração é obrigatório em todas as S.A.s?", a: "Não. É obrigatório para empresas de economia mista, companhias abertas e com capital autorizado. Para as demais, é facultativo." },
        { q: "Qual a principal função do Conselho de Administração?", a: "Definir a direção geral dos negócios e fiscalizar a atuação da diretoria, funcionando como um órgão deliberativo." },
        { q: "Qual a composição mínima do Conselho de Administração?", a: "Deve ter pelo menos três membros, eleitos e removíveis pela Assembleia Geral, com mandato de até três anos." },
        { q: "O que é o sistema de 'voto múltiplo' na eleição do Conselho de Administração?", a: "É um sistema que permite aos acionistas minoritários agrupar seus votos em um único candidato, aumentando a chance de eleger um representante." },
        { q: "Qual é o papel da Diretoria em uma S.A.?", a: "É o órgão executivo, responsável por representar a empresa e realizar os atos necessários para o seu bom funcionamento." },
        { q: "Qual a função do Conselho Fiscal?", a: "Sua principal função é fiscalizar as atividades e os atos dos administradores da empresa." },
        { q: "O funcionamento do Conselho Fiscal é sempre permanente?", a: "Não. Ele pode ser permanente (obrigatório em sociedades de economia mista) ou transitório (instalado a pedido dos acionistas)." }
    ]
};

let currentDeck = 'cooperativas';
let currentIndex = 0;

const flashcardContainer = document.getElementById('flashcard-container');
const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('card-front-text');
const backText = document.getElementById('card-back-text');
const cardCounter = document.getElementById('card-counter');

const flipCardBtn = document.getElementById('flip-card');
const nextCardBtn = document.getElementById('next-card');
const prevCardBtn = document.getElementById('prev-card');

const deckCoopBtn = document.getElementById('deck-coop');
const deckCaBtn = document.getElementById('deck-ca');
const deckSaBtn = document.getElementById('deck-sa');
const deckSaDoisBtn = document.getElementById('deck-sa-dois');

function loadCard(index) {
    const deck = flashcardsData[currentDeck];
    if (index >= 0 && index < deck.length) {
        if (flashcard.classList.contains('is-flipped')) {
            flashcard.classList.remove('is-flipped');
        }

        flashcardContainer.style.opacity = '0';

        setTimeout(() => {
            frontText.textContent = deck[index].q;
            backText.textContent = deck[index].a;
            cardCounter.textContent = `${index + 1} de ${deck.length}`;
            flashcardContainer.style.opacity = '1';
        }, 200);
    }
}

function changeDeck(deckName) {
    currentDeck = deckName;
    currentIndex = 0;
    loadCard(currentIndex);

    deckCoopBtn.classList.toggle('active', deckName === 'cooperativas');
    deckCaBtn.classList.toggle('active', deckName === 'comanditaAcoes');
    deckSaBtn.classList.toggle('active', deckName === 'orgaosSA');
    if (deckSaDoisBtn) {
        deckSaDoisBtn.classList.toggle('active', deckName === 'orgaosSADois');
    }
}

flipCardBtn.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

nextCardBtn.addEventListener('click', () => {
    const deck = flashcardsData[currentDeck];
    currentIndex = (currentIndex + 1) % deck.length;
    loadCard(currentIndex);
});

prevCardBtn.addEventListener('click', () => {
    const deck = flashcardsData[currentDeck];
    currentIndex = (currentIndex - 1 + deck.length) % deck.length;
    loadCard(currentIndex);
});

deckCoopBtn.addEventListener('click', () => changeDeck('cooperativas'));
deckCaBtn.addEventListener('click', () => changeDeck('comanditaAcoes'));
deckSaBtn.addEventListener('click', () => changeDeck('orgaosSA'));
if (deckSaDoisBtn) {
    deckSaDoisBtn.addEventListener('click', () => changeDeck('orgaosSADois'));
}


document.addEventListener('DOMContentLoaded', () => {
    changeDeck('cooperativas');
});

