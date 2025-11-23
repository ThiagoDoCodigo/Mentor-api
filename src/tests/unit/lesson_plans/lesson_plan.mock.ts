import {
  LessonPlanRequest,
  LessonPlanResponse,
} from "../../../modules/lesson_plans/lesson_plan.interface";

export const inputCreate: LessonPlanRequest = {
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

export const responseCreate: LessonPlanResponse = {
  id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
  id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
  subjectLessonPlan: "Estrutura de Dados em Java",
  descriptionLessonPlan:
    "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
  gradeLevelLessonPlan: "Ensino Superior",
  complexityLevelLessonPlan: "Avançado",
  durationMinutesLessonPlan: 120,
  generalObjective:
    "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
  createdAt: new Date("2025-11-16T14:50:18.336Z"),
  updatedAt: new Date("2025-11-16T14:50:18.336Z"),
  objetives_lesson_plan: [
    {
      id_objetives_lesson_plan: "6563a57a-a0ea-4803-b1f5-fd2aaa83633a",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleObjetivesLessonPlan:
        "Compreender o conceito de lista duplamente encadeada",
      contentObjetivesLessonPlan:
        "Entender a estrutura, os nós e os ponteiros anterior e próximo que compõem uma lista duplamente encadeada.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_objetives_lesson_plan: "d5c0e203-9d66-4daf-953a-f8c546f791a3",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleObjetivesLessonPlan:
        "Implementar listas duplamente encadeadas em Java",
      contentObjetivesLessonPlan:
        "Aprender a criar classes Node e DoublyLinkedList em Java, além de métodos para inserção, remoção e percorrimento da lista.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_objetives_lesson_plan: "bb697041-29c7-4f6a-af36-cf8c32dbd130",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleObjetivesLessonPlan: "Analisar a complexidade das operações",
      contentObjetivesLessonPlan:
        "Avaliar a eficiência das operações de inserção, remoção e busca em listas duplamente encadeadas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  ],
  competencies_lesson_plan: [
    {
      id_competencies_lesson_plan: "9d7dc928-bdf9-436f-a108-764bd0856840",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentCompetenciesLessonPlan:
        "Desenvolver o raciocínio lógico e a capacidade de abstração para modelar problemas utilizando estruturas de dados adequadas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_competencies_lesson_plan: "f89cd399-de91-420a-b5f1-e6608d642484",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentCompetenciesLessonPlan:
        "Implementar e testar algoritmos eficientes para manipular listas duplamente encadeadas em Java.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_competencies_lesson_plan: "f25cfd54-dc4b-4ce7-ae64-66b86ed4a904",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentCompetenciesLessonPlan:
        "Analisar o desempenho de algoritmos e estruturas de dados, identificando gargalos e propondo otimizações.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  ],
  themes_lesson_plan: [
    {
      id_themes_lesson_plan: "54c12a21-3539-42fc-88aa-3f3ebf26f9c1",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleThemesLessonPlan: "Introdução às listas duplamente encadeadas",
      contentThemesLessonPlan:
        "Diferenças entre listas simples e duplas; estrutura de nós e referências anteriores e posteriores.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_themes_lesson_plan: "355266dc-59ce-469a-b0f1-70d879403273",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleThemesLessonPlan: "Implementação em Java",
      contentThemesLessonPlan:
        "Criação das classes Node e DoublyLinkedList, com métodos de inserção, remoção e exibição de elementos.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_themes_lesson_plan: "4a38ec71-8c60-4d99-894d-fb65b88adb04",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleThemesLessonPlan: "Aplicações práticas e análise de desempenho",
      contentThemesLessonPlan:
        "Exemplos de uso de listas duplamente encadeadas em softwares reais e discussão sobre a complexidade de tempo e espaço.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  ],
  methodology_lesson_plan: [
    {
      id_methodology_lesson_plan: "9eecb6a4-b3a9-4fe6-b100-1aa6d283f530",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleMethodologyLessonPlan: "Metodologia ativa com prática de código",
      contentMethodologyLessonPlan:
        "O professor apresentará os conceitos teóricos e em seguida os alunos implementarão exemplos práticos em Java utilizando uma IDE como Eclipse ou IntelliJ.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_methodology_lesson_plan: "a6b8f6cf-ca62-473b-92d2-ff6b04a4ed10",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleMethodologyLessonPlan: "Aprendizagem baseada em problemas",
      contentMethodologyLessonPlan:
        "Os alunos resolverão um problema proposto, aplicando a estrutura de lista duplamente encadeada para manipular dados de maneira eficiente.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  ],
  topics_lesson_plan: [
    {
      id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleTopicsLessonPlan: "Introdução às Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
      detailed_explanation_topic_lesson_plan:
        "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      examples_topics: [
        {
          id_examples_topics: "8bae4b1c-97cc-4663-a0c4-e4b5129724d5",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleExamplesTopicLessonPlan: "Reprodutor de Música",
          contentExamplesTopicLessonPlan:
            "Um playlist de um reprodutor de música pode ser modelado como uma lista duplamente encadeada, possibilitando que o usuário avance ou retroceda entre as músicas.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "6140156f-4c56-48af-ae10-c2ba5dabf68a",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleExamplesTopicLessonPlan: "Editor de Texto",
          contentExamplesTopicLessonPlan:
            "Em um editor de texto, as ações de desfazer (undo) e refazer (redo) podem ser implementadas utilizando listas duplamente encadeadas para manter o histórico de edições.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "c32c89bd-c070-45a1-9541-8f4d66673a29",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleExamplesTopicLessonPlan: "Navegador Web",
          contentExamplesTopicLessonPlan:
            "O histórico de páginas visitadas em um navegador web pode ser implementado usando uma lista duplamente encadeada, permitindo ao usuário navegar para frente e para trás facilmente.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      activities_topics: [
        {
          id_activities_topics: "d21b994f-46b1-488c-ad71-acddaf647bf2",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleActivitiesTopicLessonPlan: "Comparação de Listas",
          contentActivitiesTopicLessonPlan:
            "Compare e contraste listas simplesmente encadeadas com listas duplamente encadeadas. Crie um diagrama que ilustre a estrutura de cada tipo de lista, destacando as diferenças e semelhanças.",
          explicationActivitiesTopicLessonPlan:
            "Esta atividade promove a compreensão das estruturas e suas diferenças, estimulando a análise e o pensamento crítico.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "d6d9836d-592e-426c-b46b-3b1ab750846f",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleActivitiesTopicLessonPlan: "Desenho da Estrutura",
          contentActivitiesTopicLessonPlan:
            "Desenhe diagramas representando diferentes estados de uma lista duplamente encadeada após inserções e remoções. Inclua cenários com inserção no início, no fim e no meio da lista.",
          explicationActivitiesTopicLessonPlan:
            "Esta atividade visa visualizar o impacto das operações na estrutura da lista, reforçando o entendimento prático.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "fa3cad30-921b-481f-8b06-4fac12df1ecf",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleActivitiesTopicLessonPlan: "Discussão em Grupo",
          contentActivitiesTopicLessonPlan:
            "Divida a turma em grupos e peça para discutirem cenários onde uma lista duplamente encadeada seria mais vantajosa que um array ou uma lista simplesmente encadeada.",
          explicationActivitiesTopicLessonPlan:
            "Fomenta a colaboração, a argumentação e a aplicação dos conhecimentos em diferentes contextos.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      connections_topics: [
        {
          id_connections_topics: "9765d6e2-4499-411a-9320-9725267e087c",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleConnectionsTopics: "Interface Gráfica",
          contentConnectionsTopics:
            "Em interfaces gráficas, podem ser utilizadas para implementar funcionalidades como a pilha de desfazer/refazer em editores de texto ou imagens.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "c60ff482-978c-4b73-970a-11dced9cdabc",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleConnectionsTopics: "Banco de Dados",
          contentConnectionsTopics:
            "Em sistemas de gerenciamento de banco de dados, listas duplamente encadeadas podem ser usadas para implementar índices e estruturas de dados para acesso rápido aos registros.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "9c231d1d-483a-4c45-a7f1-7950a758bbe5",
          id_topics_lesson_plan: "1e9455c1-eff4-4cb0-a7c5-7b1b4fe1959d",
          titleConnectionsTopics: "Sistemas Operacionais",
          contentConnectionsTopics:
            "Listas duplamente encadeadas são usadas em sistemas operacionais para gerenciar processos e threads, permitindo fácil acesso ao processo anterior e ao próximo.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
    },
    {
      id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleTopicsLessonPlan:
        "Implementação de Listas Duplamente Encadeadas em Java",
      contentTopicsLessonPlan:
        "Esta seção aborda a implementação prática de listas duplamente encadeadas em Java. Serão criadas as classes 'Node' e 'DoublyLinkedList', juntamente com métodos para inserção, remoção, busca e exibição de elementos. A implementação seguirá os princípios de orientação a objetos, garantindo a encapsulação e a modularidade do código.",
      detailed_explanation_topic_lesson_plan:
        "A classe `Node` conterá os atributos para armazenar o dado (genérico, usando generics em Java) e as referências para o próximo e o anterior nó. A classe `DoublyLinkedList` manterá as referências para a cabeça (head) e a cauda (tail) da lista, além de implementar métodos como `insertAtBeginning`, `insertAtEnd`, `insertAtPosition`, `remove`, `search` e `printList`. A implementação desses métodos exigirá o correto manejo dos ponteiros para garantir a integridade da lista.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      examples_topics: [
        {
          id_examples_topics: "50d71fe6-05a9-47c4-b96f-465aef61efb5",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleExamplesTopicLessonPlan: "Busca de um Elemento",
          contentExamplesTopicLessonPlan:
            "Código Java que mostra como buscar um elemento na lista e retornar sua posição, se encontrado.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "045988af-b6bb-465f-beea-e4ba255eff9c",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleExamplesTopicLessonPlan: "Remoção de um Nó",
          contentExamplesTopicLessonPlan:
            "Código Java que exemplifica a remoção de um nó específico da lista, ajustando os ponteiros dos nós adjacentes.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "173b4a08-36fc-42ea-82e0-cf50c0c760a6",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleExamplesTopicLessonPlan: "Inserção no Início",
          contentExamplesTopicLessonPlan:
            "Código Java demonstrando a inserção de um novo nó no início da lista, atualizando a cabeça (head) da lista.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      activities_topics: [
        {
          id_activities_topics: "aafb3647-9bef-49bd-8f91-159153cd7e31",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleActivitiesTopicLessonPlan: "Implementação da Classe Node",
          contentActivitiesTopicLessonPlan:
            "Implemente a classe `Node` em Java, incluindo os atributos para o dado, o ponteiro para o próximo nó e o ponteiro para o nó anterior.",
          explicationActivitiesTopicLessonPlan:
            "Reforça a compreensão da estrutura básica de um nó em uma lista duplamente encadeada.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "c65e6781-cf32-47ea-80db-57d5c3d7408d",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleActivitiesTopicLessonPlan:
            "Implementação da Classe DoublyLinkedList",
          contentActivitiesTopicLessonPlan:
            "Implemente a classe `DoublyLinkedList` com os métodos de inserção no início, no fim e em uma posição específica. Teste cada método com diferentes casos de uso.",
          explicationActivitiesTopicLessonPlan:
            "Consolida o conhecimento sobre a manipulação da lista e seus elementos.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "606a218a-5945-4b99-921d-1dd54802c83a",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleActivitiesTopicLessonPlan: "Debug e Teste",
          contentActivitiesTopicLessonPlan:
            "Utilize uma IDE (como Eclipse ou IntelliJ) para debugar e testar a implementação da lista duplamente encadeada, identificando e corrigindo possíveis erros.",
          explicationActivitiesTopicLessonPlan:
            "Desenvolve habilidades de resolução de problemas e depuração de código.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      connections_topics: [
        {
          id_connections_topics: "e1c75df7-25a9-4c50-955e-a49bf68ba19c",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleConnectionsTopics: "Algoritmos",
          contentConnectionsTopics:
            "As operações de inserção, remoção e busca em listas duplamente encadeadas são exemplos de algoritmos básicos que podem ser aplicados em contextos mais complexos.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "6978709d-0c74-42d9-aac2-efaa657cade7",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleConnectionsTopics: "Estruturas de Dados",
          contentConnectionsTopics:
            "Conecta-se com o estudo de outras estruturas de dados, como árvores e grafos, que também utilizam conceitos de nós e ponteiros.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "3665260a-b9ad-4393-b8da-9461985bf4d7",
          id_topics_lesson_plan: "9cde675e-b761-474c-a3bc-d8bcfe072f89",
          titleConnectionsTopics: "Programação Orientada a Objetos",
          contentConnectionsTopics:
            "A implementação de listas duplamente encadeadas em Java reforça os princípios de programação orientada a objetos, como encapsulamento, abstração e modularidade.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
    },
    {
      id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleTopicsLessonPlan:
        "Aplicações Práticas de Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Neste tópico, exploraremos exemplos de uso de listas duplamente encadeadas em softwares reais. Analisaremos casos como a implementação de histórico de navegação em navegadores web, a funcionalidade de desfazer/refazer em editores de texto e a gestão de playlists em reprodutores de mídia. A discussão abordará como a capacidade de percorrer a lista em ambas as direções torna essa estrutura particularmente útil em tais aplicações.",
      detailed_explanation_topic_lesson_plan:
        "Serão apresentados estudos de caso detalhados, mostrando como as listas duplamente encadeadas são utilizadas para resolver problemas específicos em diferentes domínios. Por exemplo, em um navegador web, a lista duplamente encadeada mantém o histórico de páginas visitadas, permitindo que o usuário volte à página anterior ou avance para a próxima. A inserção de uma nova página no histórico e a remoção de páginas (por exemplo, quando o usuário limpa o histórico) são operações eficientes graças à estrutura da lista duplamente encadeada.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      examples_topics: [
        {
          id_examples_topics: "efe12a65-dd98-4a9b-8d34-73bcc0caff41",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleExamplesTopicLessonPlan: "Gerenciamento de Playlist",
          contentExamplesTopicLessonPlan:
            "Implementação de uma playlist em um reprodutor de música, permitindo que o usuário avance, retroceda e adicione músicas facilmente.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "ccb32fca-07d7-40fd-9f94-e74f472b979b",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleExamplesTopicLessonPlan: "Desfazer/Refazer em Editores",
          contentExamplesTopicLessonPlan:
            "Implementação da funcionalidade de desfazer/refazer em um editor de texto, mantendo um histórico de ações em uma lista duplamente encadeada.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "06607004-8ea5-450f-ab30-35d69a1b7a8b",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleExamplesTopicLessonPlan: "Histórico de Navegação",
          contentExamplesTopicLessonPlan:
            "Implementação do histórico de navegação em um navegador web utilizando uma lista duplamente encadeada para permitir a navegação para frente e para trás.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      activities_topics: [
        {
          id_activities_topics: "ce05f1a5-a5cf-438b-9d56-2efafdf56444",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleActivitiesTopicLessonPlan: "Estudo de Caso: Editor de Texto",
          contentActivitiesTopicLessonPlan:
            "Analise o código-fonte de um editor de texto simples e identifique como a funcionalidade de desfazer/refazer é implementada utilizando listas duplamente encadeadas.",
          explicationActivitiesTopicLessonPlan:
            "Promove a análise crítica de código existente e a aplicação dos conhecimentos teóricos em um contexto real.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "fa1b4a1e-a80f-4744-a2d3-a2598d8542c0",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleActivitiesTopicLessonPlan: "Projeto: Playlist Musical",
          contentActivitiesTopicLessonPlan:
            "Desenvolva um protótipo de um reprodutor de música que utiliza uma lista duplamente encadeada para gerenciar a playlist. Implemente as funcionalidades de adicionar, remover, avançar e retroceder músicas.",
          explicationActivitiesTopicLessonPlan:
            "Estimula a criação de soluções práticas e a aplicação dos conhecimentos em um projeto concreto.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "7ce4721a-f42e-4fd6-ac9e-c2a6a82aaece",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleActivitiesTopicLessonPlan: "Debate: Vantagens e Desvantagens",
          contentActivitiesTopicLessonPlan:
            "Organize um debate em sala de aula sobre as vantagens e desvantagens de usar listas duplamente encadeadas em comparação com outras estruturas de dados, como arrays e listas simplesmente encadeadas, em diferentes aplicações.",
          explicationActivitiesTopicLessonPlan:
            "Fomenta a argumentação, a colaboração e a análise comparativa de diferentes soluções.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      connections_topics: [
        {
          id_connections_topics: "d4f2ab99-bdfc-4c6d-9459-25aeef802c2f",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleConnectionsTopics: "Experiência do Usuário",
          contentConnectionsTopics:
            "A escolha de uma estrutura de dados apropriada pode melhorar a experiência do usuário, tornando as aplicações mais rápidas e responsivas.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "c5e0fc43-70ea-4685-97a5-876bc1c2dd15",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleConnectionsTopics: "Engenharia de Software",
          contentConnectionsTopics:
            "Em projetos de engenharia de software, a utilização de estruturas de dados eficientes, como listas duplamente encadeadas, pode contribuir para a criação de sistemas mais robustos e escaláveis.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "91f5c73a-97f4-456c-919f-ca73a7c514fe",
          id_topics_lesson_plan: "fc02db6b-ca15-4855-9c76-b5d147206d79",
          titleConnectionsTopics: "Design de Software",
          contentConnectionsTopics:
            "A escolha da estrutura de dados adequada, como a lista duplamente encadeada, é um aspecto importante do design de software e pode impactar significativamente o desempenho e a usabilidade de uma aplicação.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
    },
    {
      id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      titleTopicsLessonPlan: "Análise de Desempenho e Complexidade",
      contentTopicsLessonPlan:
        "Este tópico aborda a análise de desempenho das operações em listas duplamente encadeadas, incluindo inserção, remoção e busca. Discutiremos a complexidade de tempo e espaço de cada operação, comparando-as com outras estruturas de dados. O objetivo é fornecer aos alunos uma compreensão profunda das implicações de desempenho ao escolher uma lista duplamente encadeada para resolver um problema específico.",
      detailed_explanation_topic_lesson_plan:
        "A inserção e remoção em listas duplamente encadeadas geralmente têm complexidade O(1) se o nó a ser removido ou o local de inserção já for conhecido. A busca, no entanto, tem complexidade O(n) no pior caso, pois pode ser necessário percorrer toda a lista para encontrar o elemento desejado. Analisaremos como a escolha de diferentes implementações e algoritmos pode afetar o desempenho das operações, e como otimizar o código para obter o melhor desempenho possível.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      examples_topics: [
        {
          id_examples_topics: "7d2f916d-0aaf-44f0-b4ef-d825c34a201c",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleExamplesTopicLessonPlan: "Remoção de um Nó (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da remoção de um nó da lista, mostrando que é O(1) se o nó já for conhecido, mas O(n) se for necessário buscá-lo primeiro.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "00507742-6ab4-4fac-ab50-7696c294016d",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleExamplesTopicLessonPlan: "Busca de um Elemento (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da busca de um elemento na lista, mostrando que é O(n) no pior caso, pois pode ser necessário percorrer toda a lista.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_examples_topics: "9aaa358a-f40e-4448-a50e-967922f4394d",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleExamplesTopicLessonPlan: "Inserção no Início (Complexidade)",
          contentExamplesTopicLessonPlan:
            "Análise da complexidade de tempo da inserção de um novo nó no início da lista, mostrando que é O(1) devido à atualização direta dos ponteiros.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      activities_topics: [
        {
          id_activities_topics: "f02517d1-ff19-490c-a674-022bc71ea743",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleActivitiesTopicLessonPlan: "Cálculo da Complexidade",
          contentActivitiesTopicLessonPlan:
            "Calcule a complexidade de tempo e espaço das operações de inserção, remoção e busca em listas duplamente encadeadas. Compare os resultados com outras estruturas de dados, como arrays e listas simplesmente encadeadas.",
          explicationActivitiesTopicLessonPlan:
            "Reforça a compreensão da análise de algoritmos e a comparação de diferentes estruturas de dados.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "aa8841da-114b-487e-84a3-d27f3283fe3b",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleActivitiesTopicLessonPlan: "Otimização de Código",
          contentActivitiesTopicLessonPlan:
            "Identifique gargalos de desempenho no código de implementação da lista duplamente encadeada e proponha otimizações para melhorar o desempenho das operações.",
          explicationActivitiesTopicLessonPlan:
            "Desenvolve habilidades de otimização de código e melhoria de desempenho.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_activities_topics: "8e1a21e3-be7a-4c44-9ab6-dbb1c7f08df3",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleActivitiesTopicLessonPlan: "Simulação de Desempenho",
          contentActivitiesTopicLessonPlan:
            "Utilize ferramentas de simulação de desempenho para medir o tempo de execução das operações em listas duplamente encadeadas com diferentes tamanhos e configurações. Analise os resultados e tire conclusões sobre o desempenho da estrutura.",
          explicationActivitiesTopicLessonPlan:
            "Promove a análise empírica de desempenho e a validação de modelos teóricos.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
      connections_topics: [
        {
          id_connections_topics: "ffe954e6-71f1-46bb-9f1a-1117934170f9",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleConnectionsTopics: "Arquitetura de Computadores",
          contentConnectionsTopics:
            "A arquitetura de computadores pode influenciar o desempenho das operações em listas duplamente encadeadas, dependendo da forma como a memória é organizada e acessada.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "1a9dc578-699a-4816-b10c-1a2de3013ef9",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleConnectionsTopics: "Otimização de Algoritmos",
          contentConnectionsTopics:
            "O conhecimento da complexidade das operações permite otimizar algoritmos e escolher as estruturas de dados mais adequadas para um problema específico.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
        {
          id_connections_topics: "7b981356-388a-45da-9127-5d369499bde7",
          id_topics_lesson_plan: "14d25c92-dfdb-42d4-9f0b-a5d6b4b0fe06",
          titleConnectionsTopics: "Teoria da Computação",
          contentConnectionsTopics:
            "A análise de complexidade de tempo e espaço está relacionada com a teoria da computação, que fornece as bases teóricas para o estudo de algoritmos e estruturas de dados.",
          createdAt: new Date("2025-11-16T14:50:18.336Z"),
          updatedAt: new Date("2025-11-16T14:50:18.336Z"),
        },
      ],
    },
  ],
  homework_lesson_plan: {
    id_homework_lesson_plan: "166c202b-c0dd-4f8a-938e-1c982859746a",
    id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
    description:
      "Implementar uma lista duplamente encadeada genérica em Java que possa armazenar diferentes tipos de dados. Escrever testes unitários abrangentes para verificar a correção de todos os métodos da lista.",
    objective:
      "Consolidar o conhecimento sobre a implementação de listas duplamente encadeadas e a importância dos testes unitários na garantia da qualidade do código.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
  },
  inclusive_adaptation_lesson_plan: {
    id_inclusive_adaptation_lesson_plan: "642780c8-9759-4492-a4c2-514bbc8ea24a",
    id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
    visualImpairment:
      "Fornecer materiais de apoio em formatos acessíveis, como áudio e texto com fonte ampliada. Utilizar IDEs com suporte a leitores de tela para facilitar a programação. Permitir o uso de gravadores de tela durante as aulas para revisão posterior.",
    learningDifficulties:
      "Dividir as tarefas em etapas menores e mais gerenciáveis. Oferecer apoio individualizado durante as atividades práticas. Utilizar recursos visuais e diagramas para explicar os conceitos. Permitir tempo adicional para a conclusão das atividades.",
    highAbilities:
      "Propor desafios adicionais, como a implementação de variações da lista duplamente encadeada (por exemplo, listas circulares duplamente encadeadas). Incentivar a participação em competições de programação. Orientar na pesquisa de tópicos avançados relacionados a estruturas de dados.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
  },
  references_lesson_plan: [
    {
      id_references_lesson_plan: "9bcee07e-ef94-4e23-ba2a-d6faa1504a1e",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentReferencesLessonPlan:
        "Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). Data Structures and Algorithms in Java (6th ed.). Wiley.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_references_lesson_plan: "f1287648-54a7-436c-bfae-f548ecb72bec",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentReferencesLessonPlan:
        "Sedgewick, R., & Wayne, K. (2011). Algorithms (4th ed.). Addison-Wesley Professional.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
    {
      id_references_lesson_plan: "eb0a33c0-95c7-48ee-8fd2-c99f87ef3680",
      id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
      contentReferencesLessonPlan:
        "Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to Algorithms (3rd ed.). MIT Press.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  ],
  closure_lesson_plan: {
    id_closure_lesson_plan: "8e43e362-7ed0-4c02-9d51-a5ec4e287171",
    id_lesson_plan: "1173f87e-c844-47cb-9f56-6470df4dfff4",
    summary:
      "Revisão dos principais conceitos abordados na aula, incluindo a estrutura de listas duplamente encadeadas, sua implementação em Java, aplicações práticas e análise de desempenho.",
    reflection:
      "Discussão sobre a importância das estruturas de dados na resolução de problemas de programação e a relevância das listas duplamente encadeadas em contextos específicos.",
    nextSteps:
      "Introdução a outras estruturas de dados avançadas, como árvores e grafos, e sua aplicação em problemas mais complexos.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
  },
};
