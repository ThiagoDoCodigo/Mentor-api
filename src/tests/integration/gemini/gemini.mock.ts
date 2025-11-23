import { ExercisesRequest } from "../../../modules/exercises/exercise.interface";
import { LessonPlanRequest } from "../../../modules/lesson_plans/lesson_plan.interface";

export const inputCreateLessonPlan: LessonPlanRequest = {
  subjectLessonPlan: "Estrutura de Dados em Java",
  descriptionLessonPlan:
    "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
  gradeLevelLessonPlan: "Ensino Superior",
  complexityLevelLessonPlan: "Avançado",
  durationMinutesLessonPlan: 120,
  generalObjective:
    "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
  specificObjectives: [
    {
      titleObjetivesLessonPlan:
        "Compreender o conceito de lista duplamente encadeada",
      contentObjetivesLessonPlan:
        "Entender a estrutura, os nós e os ponteiros anterior e próximo que compõem uma lista duplamente encadeada.",
    },
    {
      titleObjetivesLessonPlan:
        "Implementar listas duplamente encadeadas em Java",
      contentObjetivesLessonPlan:
        "Aprender a criar classes Node e DoublyLinkedList em Java, além de métodos para inserção, remoção e percorrimento da lista.",
    },
    {
      titleObjetivesLessonPlan: "Analisar a complexidade das operações",
      contentObjetivesLessonPlan:
        "Avaliar a eficiência das operações de inserção, remoção e busca em listas duplamente encadeadas.",
    },
  ],
  competencies: [
    {
      contentCompetenciesLessonPlan:
        "Desenvolver o raciocínio lógico e a capacidade de abstração para modelar problemas utilizando estruturas de dados adequadas.",
    },
    {
      contentCompetenciesLessonPlan:
        "Implementar e testar algoritmos eficientes para manipular listas duplamente encadeadas em Java.",
    },
    {
      contentCompetenciesLessonPlan:
        "Analisar o desempenho de algoritmos e estruturas de dados, identificando gargalos e propondo otimizações.",
    },
  ],
  themes: [
    {
      titleThemesLessonPlan: "Introdução às listas duplamente encadeadas",
      contentThemesLessonPlan:
        "Diferenças entre listas simples e duplas; estrutura de nós e referências anteriores e posteriores.",
    },
    {
      titleThemesLessonPlan: "Implementação em Java",
      contentThemesLessonPlan:
        "Criação das classes Node e DoublyLinkedList, com métodos de inserção, remoção e exibição de elementos.",
    },
    {
      titleThemesLessonPlan: "Aplicações práticas e análise de desempenho",
      contentThemesLessonPlan:
        "Exemplos de uso de listas duplamente encadeadas em softwares reais e discussão sobre a complexidade de tempo e espaço.",
    },
  ],
  teachingMethodologies: [
    {
      titleMethodologyLessonPlan: "Metodologia ativa com prática de código",
      contentMethodologyLessonPlan:
        "O professor apresentará os conceitos teóricos e em seguida os alunos implementarão exemplos práticos em Java utilizando uma IDE como Eclipse ou IntelliJ.",
    },
    {
      titleMethodologyLessonPlan: "Aprendizagem baseada em problemas",
      contentMethodologyLessonPlan:
        "Os alunos resolverão um problema proposto, aplicando a estrutura de lista duplamente encadeada para manipular dados de maneira eficiente.",
    },
  ],
  topics: [
    {
      titleTopicsLessonPlan: "Introdução às Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
      detailed_explanation_topic_lesson_plan:
        "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
      examplesTopicLessonPlan: [
        {
          titleExamplesTopicLessonPlan: "Navegador Web",
          contentExamplesTopicLessonPlan:
            "O histórico de páginas visitadas em um navegador web pode ser implementado usando uma lista duplamente encadeada, permitindo ao usuário navegar para frente e para trás facilmente.",
        },
        {
          titleExamplesTopicLessonPlan: "Editor de Texto",
          contentExamplesTopicLessonPlan:
            "Em um editor de texto, as ações de desfazer (undo) e refazer (redo) podem ser implementadas utilizando listas duplamente encadeadas para manter o histórico de edições.",
        },
        {
          titleExamplesTopicLessonPlan: "Reprodutor de Música",
          contentExamplesTopicLessonPlan:
            "Um playlist de um reprodutor de música pode ser modelado como uma lista duplamente encadeada, possibilitando que o usuário avance ou retroceda entre as músicas.",
        },
      ],
      activitiesTopicLessonPlan: [
        {
          titleActivitiesTopicLessonPlan: "Comparação de Listas",
          contentActivitiesTopicLessonPlan:
            "Compare e contraste listas simplesmente encadeadas com listas duplamente encadeadas. Crie um diagrama que ilustre a estrutura de cada tipo de lista, destacando as diferenças e semelhanças.",
          explicationActivitiesTopicLessonPlan:
            "Esta atividade promove a compreensão das estruturas e suas diferenças, estimulando a análise e o pensamento crítico.",
        },
        {
          titleActivitiesTopicLessonPlan: "Desenho da Estrutura",
          contentActivitiesTopicLessonPlan:
            "Desenhe diagramas representando diferentes estados de uma lista duplamente encadeada após inserções e remoções. Inclua cenários com inserção no início, no fim e no meio da lista.",
          explicationActivitiesTopicLessonPlan:
            "Esta atividade visa visualizar o impacto das operações na estrutura da lista, reforçando o entendimento prático.",
        },
        {
          titleActivitiesTopicLessonPlan: "Discussão em Grupo",
          contentActivitiesTopicLessonPlan:
            "Divida a turma em grupos e peça para discutirem cenários onde uma lista duplamente encadeada seria mais vantajosa que um array ou uma lista simplesmente encadeada.",
          explicationActivitiesTopicLessonPlan:
            "Fomenta a colaboração, a argumentação e a aplicação dos conhecimentos em diferentes contextos.",
        },
      ],
      connectionsTopicLessonPlan: [
        {
          titleConnectionsTopics: "Sistemas Operacionais",
          contentConnectionsTopics:
            "Listas duplamente encadeadas são usadas em sistemas operacionais para gerenciar processos e threads, permitindo fácil acesso ao processo anterior e ao próximo.",
        },
        {
          titleConnectionsTopics: "Banco de Dados",
          contentConnectionsTopics:
            "Em sistemas de gerenciamento de banco de dados, listas duplamente encadeadas podem ser usadas para implementar índices e estruturas de dados para acesso rápido aos registros.",
        },
        {
          titleConnectionsTopics: "Interface Gráfica",
          contentConnectionsTopics:
            "Em interfaces gráficas, podem ser utilizadas para implementar funcionalidades como a pilha de desfazer/refazer em editores de texto ou imagens.",
        },
      ],
    },
    {
      titleTopicsLessonPlan:
        "Implementação de Listas Duplamente Encadeadas em Java",
      contentTopicsLessonPlan:
        "Esta seção aborda a implementação prática de listas duplamente encadeadas em Java. Serão criadas as classes 'Node' e 'DoublyLinkedList', juntamente com métodos para inserção, remoção, busca e exibição de elementos. A implementação seguirá os princípios de orientação a objetos, garantindo a encapsulação e a modularidade do código.",
      detailed_explanation_topic_lesson_plan:
        "A classe `Node` conterá os atributos para armazenar o dado (genérico, usando generics em Java) e as referências para o próximo e o anterior nó. A classe `DoublyLinkedList` manterá as referências para a cabeça (head) e a cauda (tail) da lista, além de implementar métodos como `insertAtBeginning`, `insertAtEnd`, `insertAtPosition`, `remove`, `search` e `printList`. A implementação desses métodos exigirá o correto manejo dos ponteiros para garantir a integridade da lista.",
      examplesTopicLessonPlan: [
        {
          titleExamplesTopicLessonPlan: "Inserção no Início",
          contentExamplesTopicLessonPlan:
            "Código Java demonstrando a inserção de um novo nó no início da lista, atualizando a cabeça (head) da lista.",
        },
        {
          titleExamplesTopicLessonPlan: "Remoção de um Nó",
          contentExamplesTopicLessonPlan:
            "Código Java que exemplifica a remoção de um nó específico da lista, ajustando os ponteiros dos nós adjacentes.",
        },
        {
          titleExamplesTopicLessonPlan: "Busca de um Elemento",
          contentExamplesTopicLessonPlan:
            "Código Java que mostra como buscar um elemento na lista e retornar sua posição, se encontrado.",
        },
      ],
      activitiesTopicLessonPlan: [
        {
          titleActivitiesTopicLessonPlan: "Implementação da Classe Node",
          contentActivitiesTopicLessonPlan:
            "Implemente a classe `Node` em Java, incluindo os atributos para o dado, o ponteiro para o próximo nó e o ponteiro para o nó anterior.",
          explicationActivitiesTopicLessonPlan:
            "Reforça a compreensão da estrutura básica de um nó em uma lista duplamente encadeada.",
        },
        {
          titleActivitiesTopicLessonPlan:
            "Implementação da Classe DoublyLinkedList",
          contentActivitiesTopicLessonPlan:
            "Implemente a classe `DoublyLinkedList` com os métodos de inserção no início, no fim e em uma posição específica. Teste cada método com diferentes casos de uso.",
          explicationActivitiesTopicLessonPlan:
            "Consolida o conhecimento sobre a manipulação da lista e seus elementos.",
        },
        {
          titleActivitiesTopicLessonPlan: "Debug e Teste",
          contentActivitiesTopicLessonPlan:
            "Utilize uma IDE (como Eclipse ou IntelliJ) para debugar e testar a implementação da lista duplamente encadeada, identificando e corrigindo possíveis erros.",
          explicationActivitiesTopicLessonPlan:
            "Desenvolve habilidades de resolução de problemas e depuração de código.",
        },
      ],
      connectionsTopicLessonPlan: [
        {
          titleConnectionsTopics: "Programação Orientada a Objetos",
          contentConnectionsTopics:
            "A implementação de listas duplamente encadeadas em Java reforça os princípios de programação orientada a objetos, como encapsulamento, abstração e modularidade.",
        },
        {
          titleConnectionsTopics: "Estruturas de Dados",
          contentConnectionsTopics:
            "Conecta-se com o estudo de outras estruturas de dados, como árvores e grafos, que também utilizam conceitos de nós e ponteiros.",
        },
        {
          titleConnectionsTopics: "Algoritmos",
          contentConnectionsTopics:
            "As operações de inserção, remoção e busca em listas duplamente encadeadas são exemplos de algoritmos básicos que podem ser aplicados em contextos mais complexos.",
        },
      ],
    },
    {
      titleTopicsLessonPlan:
        "Aplicações Práticas de Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Neste tópico, exploraremos exemplos de uso de listas duplamente encadeadas em softwares reais. Analisaremos casos como a implementação de histórico de navegação em navegadores web, a funcionalidade de desfazer/refazer em editores de texto e a gestão de playlists em reprodutores de mídia. A discussão abordará como a capacidade de percorrer a lista em ambas as direções torna essa estrutura particularmente útil em tais aplicações.",
      detailed_explanation_topic_lesson_plan:
        "Serão apresentados estudos de caso detalhados, mostrando como as listas duplamente encadeadas são utilizadas para resolver problemas específicos em diferentes domínios. Por exemplo, em um navegador web, a lista duplamente encadeada mantém o histórico de páginas visitadas, permitindo que o usuário volte à página anterior ou avance para a próxima. A inserção de uma nova página no histórico e a remoção de páginas (por exemplo, quando o usuário limpa o histórico) são operações eficientes graças à estrutura da lista duplamente encadeada.",
      examplesTopicLessonPlan: [
        {
          titleExamplesTopicLessonPlan: "Histórico de Navegação",
          contentExamplesTopicLessonPlan:
            "Implementação do histórico de navegação em um navegador web utilizando uma lista duplamente encadeada para permitir a navegação para frente e para trás.",
        },
        {
          titleExamplesTopicLessonPlan: "Desfazer/Refazer em Editores",
          contentExamplesTopicLessonPlan:
            "Implementação da funcionalidade de desfazer/refazer em um editor de texto, mantendo um histórico de ações em uma lista duplamente encadeada.",
        },
        {
          titleExamplesTopicLessonPlan: "Gerenciamento de Playlist",
          contentExamplesTopicLessonPlan:
            "Implementação de uma playlist em um reprodutor de música, permitindo que o usuário avance, retroceda e adicione músicas facilmente.",
        },
      ],
      activitiesTopicLessonPlan: [
        {
          titleActivitiesTopicLessonPlan: "Estudo de Caso: Editor de Texto",
          contentActivitiesTopicLessonPlan:
            "Analise o código-fonte de um editor de texto simples e identifique como a funcionalidade de desfazer/refazer é implementada utilizando listas duplamente encadeadas.",
          explicationActivitiesTopicLessonPlan:
            "Promove a análise crítica de código existente e a aplicação dos conhecimentos teóricos em um contexto real.",
        },
        {
          titleActivitiesTopicLessonPlan: "Projeto: Playlist Musical",
          contentActivitiesTopicLessonPlan:
            "Desenvolva um protótipo de um reprodutor de música que utiliza uma lista duplamente encadeada para gerenciar a playlist. Implemente as funcionalidades de adicionar, remover, avançar e retroceder músicas.",
          explicationActivitiesTopicLessonPlan:
            "Estimula a criação de soluções práticas e a aplicação dos conhecimentos em um projeto concreto.",
        },
        {
          titleActivitiesTopicLessonPlan: "Debate: Vantagens e Desvantagens",
          contentActivitiesTopicLessonPlan:
            "Organize um debate em sala de aula sobre as vantagens e desvantagens de usar listas duplamente encadeadas em comparação com outras estruturas de dados, como arrays e listas simplesmente encadeadas, em diferentes aplicações.",
          explicationActivitiesTopicLessonPlan:
            "Fomenta a argumentação, a colaboração e a análise comparativa de diferentes soluções.",
        },
      ],
      connectionsTopicLessonPlan: [
        {
          titleConnectionsTopics: "Design de Software",
          contentConnectionsTopics:
            "A escolha da estrutura de dados adequada, como a lista duplamente encadeada, é um aspecto importante do design de software e pode impactar significativamente o desempenho e a usabilidade de uma aplicação.",
        },
        {
          titleConnectionsTopics: "Engenharia de Software",
          contentConnectionsTopics:
            "Em projetos de engenharia de software, a utilização de estruturas de dados eficientes, como listas duplamente encadeadas, pode contribuir para a criação de sistemas mais robustos e escaláveis.",
        },
        {
          titleConnectionsTopics: "Experiência do Usuário",
          contentConnectionsTopics:
            "A escolha de uma estrutura de dados apropriada pode melhorar a experiência do usuário, tornando as aplicações mais rápidas e responsivas.",
        },
      ],
    },
    {
      titleTopicsLessonPlan: "Análise de Desempenho e Complexidade",
      contentTopicsLessonPlan:
        "Este tópico aborda a análise de desempenho das operações em listas duplamente encadeadas, incluindo inserção, remoção e busca. Discutiremos a complexidade de tempo e espaço de cada operação, comparando-as com outras estruturas de dados. O objetivo é fornecer aos alunos uma compreensão profunda das implicações de desempenho ao escolher uma lista duplamente encadeada para resolver um problema específico.",
      detailed_explanation_topic_lesson_plan:
        "A inserção e remoção em listas duplamente encadeadas geralmente têm complexidade O(1) se o nó a ser removido ou o local de inserção já for conhecido. A busca, no entanto, tem complexidade O(n) no pior caso, pois pode ser necessário percorrer toda a lista para encontrar o elemento desejado. Analisaremos como a escolha de diferentes implementações e algoritmos pode afetar o desempenho das operações, e como otimizar o código para obter o melhor desempenho possível.",
      examplesTopicLessonPlan: [
        {
          titleExamplesTopicLessonPlan: "Inserção no Início (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da inserção de um novo nó no início da lista, mostrando que é O(1) devido à atualização direta dos ponteiros.",
        },
        {
          titleExamplesTopicLessonPlan: "Busca de um Elemento (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da busca de um elemento na lista, mostrando que é O(n) no pior caso, pois pode ser necessário percorrer toda a lista.",
        },
        {
          titleExamplesTopicLessonPlan: "Remoção de um Nó (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da remoção de um nó da lista, mostrando que é O(1) se o nó já for conhecido, mas O(n) se for necessário buscá-lo primeiro.",
        },
      ],
      activitiesTopicLessonPlan: [
        {
          titleActivitiesTopicLessonPlan: "Cálculo da Complexidade",
          contentActivitiesTopicLessonPlan:
            "Calcule a complexidade de tempo e espaço das operações de inserção, remoção e busca em listas duplamente encadeadas. Compare os resultados com outras estruturas de dados, como arrays e listas simplesmente encadeadas.",
          explicationActivitiesTopicLessonPlan:
            "Reforça a compreensão da análise de algoritmos e a comparação de diferentes estruturas de dados.",
        },
        {
          titleActivitiesTopicLessonPlan: "Otimização de Código",
          contentActivitiesTopicLessonPlan:
            "Identifique gargalos de desempenho no código de implementação da lista duplamente encadeada e proponha otimizações para melhorar o desempenho das operações.",
          explicationActivitiesTopicLessonPlan:
            "Desenvolve habilidades de otimização de código e melhoria de desempenho.",
        },
        {
          titleActivitiesTopicLessonPlan: "Simulação de Desempenho",
          contentActivitiesTopicLessonPlan:
            "Utilize ferramentas de simulação de desempenho para medir o tempo de execução das operações em listas duplamente encadeadas com diferentes tamanhos e configurações. Analise os resultados e tire conclusões sobre o desempenho da estrutura.",
          explicationActivitiesTopicLessonPlan:
            "Promove a análise empírica de desempenho e a validação de modelos teóricos.",
        },
      ],
      connectionsTopicLessonPlan: [
        {
          titleConnectionsTopics: "Teoria da Computação",
          contentConnectionsTopics:
            "A análise de complexidade de tempo e espaço está relacionada com a teoria da computação, que fornece as bases teóricas para o estudo de algoritmos e estruturas de dados.",
        },
        {
          titleConnectionsTopics: "Otimização de Algoritmos",
          contentConnectionsTopics:
            "O conhecimento da complexidade das operações permite otimizar algoritmos e escolher as estruturas de dados mais adequadas para um problema específico.",
        },
        {
          titleConnectionsTopics: "Arquitetura de Computadores",
          contentConnectionsTopics:
            "A arquitetura de computadores pode influenciar o desempenho das operações em listas duplamente encadeadas, dependendo da forma como a memória é organizada e acessada.",
        },
      ],
    },
  ],
  homework: {
    description:
      "Implementar uma lista duplamente encadeada genérica em Java que possa armazenar diferentes tipos de dados. Escrever testes unitários abrangentes para verificar a correção de todos os métodos da lista.",
    objective:
      "Consolidar o conhecimento sobre a implementação de listas duplamente encadeadas e a importância dos testes unitários na garantia da qualidade do código.",
  },
  inclusiveAdaptation: {
    visualImpairment:
      "Fornecer materiais de apoio em formatos acessíveis, como áudio e texto com fonte ampliada. Utilizar IDEs com suporte a leitores de tela para facilitar a programação. Permitir o uso de gravadores de tela durante as aulas para revisão posterior.",
    learningDifficulties:
      "Dividir as tarefas em etapas menores e mais gerenciáveis. Oferecer apoio individualizado durante as atividades práticas. Utilizar recursos visuais e diagramas para explicar os conceitos. Permitir tempo adicional para a conclusão das atividades.",
    highAbilities:
      "Propor desafios adicionais, como a implementação de variações da lista duplamente encadeada (por exemplo, listas circulares duplamente encadeadas). Incentivar a participação em competições de programação. Orientar na pesquisa de tópicos avançados relacionados a estruturas de dados.",
  },
  references: [
    {
      contentReferencesLessonPlan:
        "Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). Data Structures and Algorithms in Java (6th ed.). Wiley.",
    },
    {
      contentReferencesLessonPlan:
        "Sedgewick, R., & Wayne, K. (2011). Algorithms (4th ed.). Addison-Wesley Professional.",
    },
    {
      contentReferencesLessonPlan:
        "Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to Algorithms (3rd ed.). MIT Press.",
    },
  ],
  closure: {
    summary:
      "Revisão dos principais conceitos abordados na aula, incluindo a estrutura de listas duplamente encadeadas, sua implementação em Java, aplicações práticas e análise de desempenho.",
    reflection:
      "Discussão sobre a importância das estruturas de dados na resolução de problemas de programação e a relevância das listas duplamente encadeadas em contextos específicos.",
    nextSteps:
      "Introdução a outras estruturas de dados avançadas, como árvores e grafos, e sua aplicação em problemas mais complexos.",
  },
};

export const inputCreateExercises: ExercisesRequest = {
  subject_exercises: "Parasitologia",
  description_exercises:
    "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
  grade_level_exercises: "Ensino Superior",
  complexity_level_exercises: "Avançado",
  duration_minutes_exercises: 90,
  objectives_exercises: [
    {
      titleObjectiveExercises: "Identificar ectoparasitas",
      contentObjectiveExercises:
        "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
    },
    {
      titleObjectiveExercises: "Compreender transmissão de doenças",
      contentObjectiveExercises:
        "O aluno deverá entender como esses ectoparasitas atuam como vetores de doenças e os fatores que influenciam a infestação.",
    },
    {
      titleObjectiveExercises: "Aplicar métodos de controle",
      contentObjectiveExercises:
        "O aluno deverá avaliar técnicas de prevenção, tratamento e manejo ambiental para controlar infestações.",
    },
  ],
  themes_exercises: [
    {
      titleThemeExercises: "Pulgas",
      contentThemeExercises:
        "Estudo do ciclo de vida, hospedagem, transmissão de patógenos e medidas de controle.",
    },
    {
      titleThemeExercises: "Carrapatos",
      contentThemeExercises:
        "Exploração de espécies de carrapatos, doenças transmitidas e prevenção em animais domésticos.",
    },
    {
      titleThemeExercises: "Piolhos",
      contentThemeExercises:
        "Análise de diferentes tipos de piolhos, sua morfologia, ciclo de vida e estratégias de combate.",
    },
  ],
  exercises: [
    {
      type_exercise: "multipla-escolha",
      title_exercise: "Análise comparativa do ciclo de vida de ectoparasitas",
      content_exercise:
        "O ciclo de vida dos ectoparasitas, como pulgas, carrapatos e piolhos, apresenta variações significativas que influenciam diretamente as estratégias de controle e prevenção de infestações. A compreensão detalhada dessas diferenças é crucial para o desenvolvimento de abordagens eficazes.",
      options_exercise_multipla_escolha: [
        {
          option: "A",
          content_option:
            "A metamorfose incompleta é característica exclusiva de carrapatos, com estágios de larva, ninfa e adulto, sem a fase pupal.",
        },
        {
          option: "B",
          content_option:
            "O ciclo de vida das pulgas é caracterizado por uma metamorfose completa, envolvendo os estágios de ovo, larva, pupa e adulto, sendo a fase larval a principal responsável pela alimentação no hospedeiro.",
        },
        {
          option: "C",
          content_option:
            "Os piolhos apresentam um ciclo de vida com metamorfose gradual, passando pelos estágios de ovo (lêndea), ninfa e adulto, com todas as fases ninfais se alimentando de sangue do hospedeiro.",
        },
        {
          option: "D",
          content_option:
            "A longevidade dos carrapatos é uniforme entre as espécies, com um ciclo de vida tipicamente curto, raramente ultrapassando um ano, independente das condições ambientais e do hospedeiro.",
        },
        {
          option: "E",
          content_option:
            "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
        },
      ],
      correct_answer_exercise: "C",
      explanation_exercise:
        "A alternativa correta é a C, pois descreve corretamente o ciclo de vida dos piolhos, que apresentam metamorfose gradual com estágios de ovo (lêndea), ninfa e adulto. As ninfas se alimentam de sangue do hospedeiro, ao contrário das pulgas onde a fase larval se alimenta de matéria orgânica.",
      bloom_level: "analisar",
    },
    {
      type_exercise: "discursiva",
      title_exercise:
        "Avaliação de Métodos de Controle de Carrapatos em Bovinos",
      content_exercise:
        "Um produtor rural relata altas infestações por carrapatos em seu rebanho bovino, causando prejuízos econômicos significativos devido à perda de peso dos animais e transmissão de doenças. Discuta e avalie criticamente diferentes métodos de controle de carrapatos que podem ser implementados na propriedade, considerando os aspectos de eficácia, custo-benefício, impacto ambiental e resistência parasitária. Justifique sua recomendação para a melhor abordagem a ser adotada pelo produtor.",
      options_exercise_multipla_escolha: [],
      options_exercise_verdadeiro_falso: [],
      correct_answer_exercise: "",
      explanation_exercise:
        "A resposta ideal deve abordar a análise comparativa de métodos químicos (acaricidas), biológicos (uso de predadores naturais ou fungos entomopatogênicos), manejo de pastagens (rotação de pastos, controle de plantas daninhas) e controle genético (seleção de raças resistentes). O aluno deve avaliar a eficácia de cada método, seus custos, impacto ambiental e o risco de desenvolvimento de resistência por parte dos carrapatos. A recomendação deve ser justificada com base em uma análise integrada desses fatores, considerando as particularidades da propriedade e o contexto local.",
      bloom_level: "avaliar",
    },
    {
      type_exercise: "verdadeiro-falso",
      title_exercise: "Afirmações sobre Piolhos e sua Biologia",
      content_exercise:
        "Analise as seguintes afirmações sobre piolhos (Pediculus humanus e Pthirus pubis) e indique se são verdadeiras (V) ou falsas (F).",
      options_exercise_verdadeiro_falso: [
        {
          option: "V",
          content_option:
            "Os piolhos da cabeça (Pediculus humanus capitis) são vetores de diversas doenças bacterianas e virais.",
        },
        {
          option: "F",
          content_option:
            "A transmissão de piolhos ocorre principalmente por meio do contato direto com objetos pessoais infestados, como pentes e escovas.",
        },
        {
          option: "V",
          content_option:
            "Os piolhos do corpo (Pediculus humanus corporis) são importantes vetores de doenças como o tifo exantemático e a febre das trincheiras.",
        },
        {
          option: "F",
          content_option:
            "A permetrina é um inseticida eficaz contra todas as fases do ciclo de vida dos piolhos, incluindo as lêndeas (ovos).",
        },
        {
          option: "V",
          content_option:
            "O piolho pubiano (Pthirus pubis) geralmente causa prurido intenso na região genital, devido à irritação da pele causada pela picada e saliva do parasita.",
        },
      ],
      correct_answer_exercise: "F, F, V, F, V",
      explanation_exercise:
        "1) Falso: Piolhos da cabeça não são vetores primários de doenças. 2) Falso: A principal forma de transmissão é contato direto. 3) Verdadeiro: Piolhos do corpo são vetores de doenças. 4) Falso: Permetrina tem menor eficácia contra lêndeas. 5) Verdadeiro: Pthirus pubis causa prurido intenso.",
      bloom_level: "lembrar",
    },
  ],
};
