/* Conteúdo do site – Imersão Bullying – Realidade não Editada */
window.APP_DATA = {
  topics: [
    { label: "O que é Bullying", icon: "book" },
    { label: "Tipos de Bullying", icon: "users" },
    { label: "Como identificar", icon: "eye" },
    { label: "Como prevenir", icon: "shield" },
    { label: "Como agir", icon: "sparkles" },
    { label: "Como denunciar", icon: "siren" },
    { label: "Como apoiar uma vítima", icon: "heart" },
    { label: "Como reverter uma situação de bullying", icon: "message" },
  ],

  quizOptions: [
    {
      id: "coordenacao",
      label: "Reportaria à coordenação da escola",
      good: true,
      feedback:
        "Escolha adequada. Zombar de raça, etnia ou religião é injúria racial e intolerância — a escola tem o dever legal de registrar, apurar e proteger você.",
    },
    {
      id: "professor",
      label: "Conversaria com um professor",
      good: true,
      feedback:
        "Escolha adequada. Um adulto de confiança ajuda a documentar o ocorrido e encaminha o caso para quem pode agir formalmente.",
    },
    {
      id: "ignorar",
      label: "Ignoraria",
      good: false,
      feedback:
        "Escolha inadequada. O silêncio costuma normalizar a agressão: sem registro, a prática se repete e se intensifica com outras vítimas.",
    },
    {
      id: "ofensas",
      label: "Retrucaria com ofensas",
      good: false,
      feedback:
        "Escolha inadequada. Responder com ofensas mantém o ciclo de violência e pode transformar você em parte do conflito, dificultando a apuração.",
    },
    {
      id: "incentivar",
      label: "Incentivaria outros colegas",
      good: false,
      feedback:
        "Escolha inadequada. Mobilizar colegas para retaliar cria um novo grupo agressor — o caminho é apoio institucional, não vingança coletiva.",
    },
  ],

  loginCards: [
    { title: "Tipos de Bullying", desc: "Físico, verbal, virtual, social, racial e religioso.", icon: "users" },
    { title: "Como Identificar", desc: "Sinais de alerta na turma e em casa.", icon: "eye" },
    { title: "Como Denunciar", desc: "Escola, Conselho Tutelar e Disque 100.", icon: "siren" },
    { title: "Empatia", desc: "Ouvir sem julgar e acolher quem sofre.", icon: "heart" },
    { title: "Respeito", desc: "Diferenças não são motivo de piada.", icon: "shield" },
    { title: "Convivência Escolar", desc: "Combinados de turma que sustentam a mudança.", icon: "sparkles" },
  ],

  sobre: [
    { title: "Conscientizar", desc: "Mostrar o impacto real do bullying na saúde mental e no aprendizado.", icon: "alert" },
    { title: "Capacitar", desc: "Ensinar rotas concretas de ação, denúncia e apoio à vítima.", icon: "shield" },
    { title: "Transformar", desc: "Criar cultura de empatia e respeito que se sustenta depois da aula.", icon: "heart" },
  ],

  tipos: [
    { title: "Físico", icon: "hand", desc: "Empurrões, socos, chutes e qualquer agressão ao corpo." },
    { title: "Verbal", icon: "message", desc: "Apelidos, insultos, humilhações e ameaças." },
    { title: "Psicológico", icon: "brain", desc: "Chantagem, manipulação, intimidação e perseguição." },
    { title: "Virtual", icon: "globe", desc: "Cyberbullying: prints, memes, exposição e ataques on-line." },
    { title: "Social", icon: "users", desc: "Isolamento proposital, boatos e exclusão do grupo." },
    { title: "Racial", icon: "eye", desc: "Ofensas ligadas à cor, raça ou etnia — é crime." },
    { title: "Religioso", icon: "shield", desc: "Zombaria e intolerância contra crenças e práticas." },
  ],

  sinais: [
    "Queda repentina nas notas ou faltas frequentes",
    "Objetos e materiais escolares que desaparecem ou aparecem danificados",
    "Machucados sem explicação convincente",
    "Isolamento, tristeza persistente ou irritabilidade nova",
    "Medo de intervalos, educação física ou do caminho para a escola",
    "Alterações de sono, apetite e queixas físicas antes das aulas",
  ],

  prevencao: [
    { title: "Cultura do respeito", desc: "Combinados de convivência construídos com a turma, revisados a cada bimestre.", icon: "heart" },
    { title: "Escuta ativa", desc: "Canais anônimos e horários fixos de acolhimento com a coordenação.", icon: "message" },
    { title: "Protagonismo", desc: "Formação de estudantes mediadores que interrompem situações de agressão.", icon: "sparkles" },
    { title: "Tolerância zero", desc: "Protocolo claro, registrado e aplicado igualmente para todos os casos.", icon: "ban" },
  ],

  timeline: [
    { step: "01", title: "Registre", desc: "Anote datas, locais, pessoas envolvidas e salve prints." },
    { step: "02", title: "Fale", desc: "Procure um adulto de confiança: professor, família, coordenação." },
    { step: "03", title: "Acione a escola", desc: "A coordenação deve abrir apuração formal e proteger a vítima." },
    { step: "04", title: "Denuncie", desc: "Casos graves: Disque 100, Conselho Tutelar ou delegacia." },
    { step: "05", title: "Acompanhe", desc: "Cobre retorno, apoio psicológico e mediação entre as partes." },
  ],

  dados: [
    { label: "Verbal", value: 38 },
    { label: "Virtual", value: 27 },
    { label: "Social", value: 16 },
    { label: "Físico", value: 12 },
    { label: "Outros", value: 7 },
  ],

  faq: [
    {
      q: "Qual a diferença entre briga e bullying?",
      a: "Bullying é intencional, repetido e marcado por desequilíbrio de poder. Um conflito isolado entre iguais não é bullying, mas também precisa de mediação.",
    },
    {
      q: "Brincadeira pode virar bullying?",
      a: "Sim. Quando alguém pede para parar e a conduta continua, deixa de ser brincadeira e passa a ser violência.",
    },
    {
      q: "Denunciar é o mesmo que ser dedo-duro?",
      a: "Não. Denunciar é proteger alguém de uma violência que se repete — inclusive você mesmo.",
    },
    {
      q: "Como apoiar uma vítima?",
      a: "Acredite no relato, não minimize, ofereça companhia nos intervalos e ajude a levar o caso a um adulto responsável.",
    },
    {
      q: "É possível reverter uma situação de bullying?",
      a: "Sim, com protocolo escolar, responsabilização, apoio psicológico e trabalho contínuo de convivência com a turma.",
    },
  ],

  chatSuggestions: [
    "O que é bullying?",
    "Como identificar sinais na turma?",
    "Como denunciar com segurança?",
    "Como apoiar uma vítima?",
  ],

  games: [
    {
      id: "quiz",
      title: "Quiz",
      description: "Teste seus conhecimentos sobre conceitos, tipos e leis relacionadas ao bullying.",
      questions: [
        {
          prompt: "O que caracteriza o bullying?",
          options: [
            "Um desentendimento único entre colegas",
            "Agressão intencional e repetida com desequilíbrio de poder",
            "Qualquer brincadeira feita em grupo",
            "Discordar da opinião de alguém",
          ],
          correct: 1,
          explanation:
            "Bullying exige três elementos: intenção de causar dano, repetição e desequilíbrio de poder entre quem agride e quem sofre.",
        },
        {
          prompt: "Ofender alguém pela cor da pele em um grupo da turma é:",
          options: [
            "Apenas falta de educação",
            "Bullying virtual com injúria racial, previsto em lei",
            "Brincadeira interna sem consequências",
            "Assunto que só a família resolve",
          ],
          correct: 1,
          explanation:
            "Além de bullying, há injúria racial — crime previsto em lei. A escola deve registrar e encaminhar o caso.",
        },
        {
          prompt: "Quem presencia o bullying sem agir é chamado de:",
          options: [
            "Espectador passivo, que acaba reforçando a agressão",
            "Vítima indireta protegida",
            "Mediador natural do conflito",
            "Alguém sem relação com o caso",
          ],
          correct: 0,
          explanation:
            "O silêncio da plateia dá força ao agressor. Um espectador que avisa um adulto muda o resultado da situação.",
        },
      ],
    },
    {
      id: "vf",
      title: "Verdadeiro ou Falso",
      description: "Separe fatos de mitos sobre bullying, denúncia e apoio às vítimas.",
      questions: [
        {
          prompt: "“Bullying é fase e passa sozinho.”",
          options: ["Verdadeiro", "Falso"],
          correct: 1,
          explanation:
            "Falso. Sem intervenção, a prática tende a se repetir e deixar marcas na saúde mental e no desempenho escolar.",
        },
        {
          prompt: "“Cyberbullying pode acontecer 24 horas por dia.”",
          options: ["Verdadeiro", "Falso"],
          correct: 0,
          explanation:
            "Verdadeiro. Por acontecer on-line, o ataque continua fora da escola — por isso prints e registros são importantes.",
        },
        {
          prompt: "“Quem sofre bullying provocou de alguma forma.”",
          options: ["Verdadeiro", "Falso"],
          correct: 1,
          explanation:
            "Falso. A responsabilidade é sempre de quem agride. Culpar a vítima aumenta o silêncio e a dor.",
        },
        {
          prompt: "“A escola tem obrigação legal de prevenir e combater o bullying.”",
          options: ["Verdadeiro", "Falso"],
          correct: 0,
          explanation:
            "Verdadeiro. A legislação brasileira determina que instituições de ensino adotem medidas de prevenção e combate.",
        },
      ],
    },
    {
      id: "atitude",
      title: "Escolha a Melhor Atitude",
      description: "Situações reais de sala de aula: escolha a resposta mais empática e eficaz.",
      questions: [
        {
          prompt: "Um colega é chamado por um apelido humilhante todos os dias. Você:",
          options: [
            "Ri para não ficar de fora do grupo",
            "Chama o colega para sentar com você e avisa um professor",
            "Finge que não percebeu",
            "Cria um apelido para o agressor",
          ],
          correct: 1,
          explanation:
            "Acolher e comunicar um adulto quebra o ciclo sem criar nova violência — é a atitude mais eficaz.",
        },
        {
          prompt: "Você vê um vídeo constrangendo uma colega circulando no grupo da turma. Você:",
          options: [
            "Encaminha para saber se é verdade",
            "Salva o print, não repassa e leva à coordenação",
            "Comenta pedindo mais detalhes",
            "Sai do grupo e não fala nada",
          ],
          correct: 1,
          explanation:
            "Não repassar evita ampliar o dano; o print serve como prova para a escola apurar o caso.",
        },
        {
          prompt: "Você percebeu que fez uma piada que magoou alguém. Você:",
          options: [
            "Diz que foi só brincadeira",
            "Pede desculpas sinceras e não repete a conduta",
            "Espera a pessoa esquecer",
            "Explica que ela é sensível demais",
          ],
          correct: 1,
          explanation:
            "Reconhecer o impacto e mudar o comportamento é o que diferencia um erro de uma prática de bullying.",
        },
      ],
    },
    {
      id: "completar",
      title: "Complete a Situação",
      description: "Complete a frase com o desfecho que protege a vítima e resolve o conflito.",
      questions: [
        {
          prompt:
            "Ana passou a faltar às aulas depois de ser excluída pelo grupo. A melhor continuação é: a escola…",
          options: [
            "…espera que o grupo se entenda sozinho",
            "…convoca as partes, oferece apoio psicológico e faz mediação com a turma",
            "…troca Ana de turma e encerra o assunto",
            "…anuncia o caso na frente de todos",
          ],
          correct: 1,
          explanation:
            "Reverter uma situação de bullying exige mediação, apoio à vítima e trabalho contínuo com o grupo — não apenas afastar alguém.",
        },
        {
          prompt: "Pedro sofre ameaças no caminho de casa. O passo imediato é…",
          options: [
            "…reagir fisicamente para se impor",
            "…contar à família e registrar o caso na escola e, se necessário, na delegacia",
            "…mudar de rota e não contar a ninguém",
            "…esperar mais algumas semanas",
          ],
          correct: 1,
          explanation:
            "Ameaça é caso de proteção: família, escola e, quando há risco, autoridades devem ser acionadas de imediato.",
        },
        {
          prompt: "Depois da denúncia, o acompanhamento correto inclui…",
          options: [
            "…encerrar o registro assim que o agressor se desculpar",
            "…monitorar a convivência, dar retorno à família e manter apoio à vítima",
            "…expor o resultado no mural da escola",
            "…deixar a turma decidir a punição",
          ],
          correct: 1,
          explanation:
            "Sem acompanhamento, a agressão volta. Monitorar, informar a família e sustentar o apoio é parte da solução.",
        },
      ],
    },
  ],
};
