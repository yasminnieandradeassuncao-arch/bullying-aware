export type Question = {
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Game = {
  id: "quiz" | "vf" | "atitude" | "completar";
  title: string;
  description: string;
  questions: Question[];
};

export const games: Game[] = [
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
];
