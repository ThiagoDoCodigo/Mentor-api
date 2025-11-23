import {
  LessonPlanRequest,
  LessonPlanResponse,
  patchLessonPlan,
  patchLessonPlanResponse,
  patchObjective,
  patchObjectiveResponse,
  patchCompetencies,
  patchCompetenciesResponse,
  patchTheme,
  patchThemeResponse,
  patchTeachingMethodology,
  patchTeachingMethodologyResponse,
  patchTopic,
  patchTopicResponse,
  patchHomework,
  patchHomeworkResponse,
  patchInclusiveAdaptation,
  patchInclusiveAdaptationResponse,
  patchReferences,
  patchReferencesResponse,
  patchClosure,
  patchClosureResponse,
  patchExamplesTopics,
  patchExamplesTopicsResponse,
  patchActivitiesTopics,
  patchActivitiesTopicsResponse,
  patchConnectionsTopics,
  patchConnectionsTopicsResponse,
} from "../../../modules/lesson_plans/lesson_plan.interface";
import { CustomError } from "../../../erros/CustomError";
import { LessonPlanService } from "../../../modules/lesson_plans/lesson_plan.service";
import { inputCreate } from "./lesson_plan.mock";
import { responseCreate } from "./lesson_plan.mock";

describe("LessonPlanService - createLessonPlan", () => {
  const mockCreateLessonPlan = jest.fn<
    Promise<LessonPlanResponse | null>,
    [LessonPlanRequest, string]
  >();

  const mockRepository = {
    createLessonPlan: mockCreateLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const input: LessonPlanRequest = inputCreate;
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const response: LessonPlanResponse = responseCreate;

  it("Deve criar o plano de aula com sucesso", async () => {
    mockCreateLessonPlan.mockResolvedValue(response);

    const result = await service.createLessonPlan(input, id_user);

    expect(result).toEqual(response);
    expect(mockCreateLessonPlan).toHaveBeenCalledWith(input, id_user);
  });

  it("Deve lançar um erro se o retorno do DB for vazio", async () => {
    mockCreateLessonPlan.mockResolvedValue(null);

    mockCreateLessonPlan.mockRejectedValue(
      new CustomError("Erro ao criar plano de aula", 400, "GenericError")
    );

    await expect(service.createLessonPlan(input, id_user)).rejects.toThrow(
      "Erro ao criar plano de aula"
    );
    expect(mockCreateLessonPlan).toHaveBeenCalledWith(input, id_user);
  });
});

describe("LessonPlanService - updateLessonPlan", () => {
  const mockUpdateLessonPlan = jest.fn<
    Promise<patchLessonPlanResponse>,
    [string, string, patchLessonPlan]
  >();

  const mockRepository = {
    updateLessonPlan: mockUpdateLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_lesson_plan = "92261020-0381-49e3-8e82-e623eade192a";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchLessonPlan = {
    descriptionLessonPlan:
      "Plano de aula de Parasitologia para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
  };

  const response: patchLessonPlanResponse = {
    id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
    id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
    subjectLessonPlan: "Estrutura de Dados em Java novo",
    descriptionLessonPlan:
      "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
    gradeLevelLessonPlan: "Ensino Superior",
    complexityLevelLessonPlan: "Avançado",
    durationMinutesLessonPlan: 120,
    generalObjective:
      "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
  };

  it("Deve atualizar o plano de aula com sucesso", async () => {
    mockUpdateLessonPlan.mockResolvedValue(response);

    const result = await service.updateLessonPlan(
      id_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateLessonPlan).toHaveBeenCalledWith(
      id_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateObjetivesLessonPlan", () => {
  const mockUpdateObjetivesLessonPlan = jest.fn<
    Promise<patchObjectiveResponse>,
    [string, string, patchObjective]
  >();

  const mockRepository = {
    updateObjetivesLessonPlan: mockUpdateObjetivesLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_objetives_lesson_plan = "0b13200a-9467-4007-9593-6eaa8b16213e";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchObjective = {
    titleObjetivesLessonPlan: "Identificar ectoparasitas",
    contentObjetivesLessonPlan:
      "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
  };

  const response: patchObjectiveResponse = {
    id_objetives_lesson_plan: "0b13200a-9467-4007-9593-6eaa8b16213e",
    id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
    titleObjetivesLessonPlan:
      "Compreender o conceito de lista duplamente encadeada",
    contentObjetivesLessonPlan:
      "Entender a estrutura, os nós e os ponteiros anterior e próximo que compõem uma lista duplamente encadeada.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
    },
  };

  it("Deve atualizar o objetivo do plano de aula com sucesso", async () => {
    mockUpdateObjetivesLessonPlan.mockResolvedValue(response);

    const result = await service.updateObjetivesLessonPlan(
      id_objetives_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateObjetivesLessonPlan).toHaveBeenCalledWith(
      id_objetives_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateCompetenciesLessonPlan", () => {
  const mockUpdateCompetenciesLessonPlan = jest.fn<
    Promise<patchCompetenciesResponse>,
    [string, string, patchCompetencies]
  >();

  const mockRepository = {
    updateCompetenciesLessonPlan: mockUpdateCompetenciesLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_competencies_lesson_plan = "9f44ecb4-d174-4e32-894f-5ea1d416306a";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchCompetencies = {
    contentCompetenciesLessonPlan:
      "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
  };

  const response: patchCompetenciesResponse = {
    id_competencies_lesson_plan: "9f44ecb4-d174-4e32-894f-5ea1d416306a",
    id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
    contentCompetenciesLessonPlan:
      "Desenvolver a capacidade de abstração e modelagem de problemas utilizando estruturas de dados avançadas.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
    },
  };

  it("Deve atualizar a competência do plano de aula com sucesso", async () => {
    mockUpdateCompetenciesLessonPlan.mockResolvedValue(response);

    const result = await service.updateCompetenciesLessonPlan(
      id_competencies_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateCompetenciesLessonPlan).toHaveBeenCalledWith(
      id_competencies_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateThemesLessonPlan", () => {
  const mockUpdateThemesLessonPlan = jest.fn<
    Promise<patchThemeResponse>,
    [string, string, patchTheme]
  >();

  const mockRepository = {
    updateThemesLessonPlan: mockUpdateThemesLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_theme_lesson_plan = "b6597a5a-946d-4dff-80bc-4728fd20128a";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchTheme = {
    titleThemesLessonPlan: "Introdução às listas duplamente encadeadas",
  };

  const response: patchThemeResponse = {
    id_themes_lesson_plan: "b6597a5a-946d-4dff-80bc-4728fd20128a",
    id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
    titleThemesLessonPlan: "Introdução às listas duplamente encadeadas2",
    contentThemesLessonPlan:
      "Diferenças entre listas simples e duplas; estrutura de nós e referências anteriores e posteriores.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
    },
  };

  it("Deve atualizar o tema do plano de aula com sucesso", async () => {
    mockUpdateThemesLessonPlan.mockResolvedValue(response);

    const result = await service.updateThemesLessonPlan(
      id_theme_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateThemesLessonPlan).toHaveBeenCalledWith(
      id_theme_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateMethodologyLessonPlan", () => {
  const mockUpdateMethodologyLessonPlan = jest.fn<
    Promise<patchTeachingMethodologyResponse>,
    [string, string, patchTeachingMethodology]
  >();

  const mockRepository = {
    updateMethodologyLessonPlan: mockUpdateMethodologyLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_methodology_lesson_plan = "33f2fa8f-c9d6-49a1-9894-bbd68ad7f479";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchTeachingMethodology = {
    titleMethodologyLessonPlan: "Introdução às listas duplamente encadeadas",
  };

  const response: patchTeachingMethodologyResponse = {
    id_methodology_lesson_plan: "33f2fa8f-c9d6-49a1-9894-bbd68ad7f479",
    id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
    titleMethodologyLessonPlan: "Introdução às listas duplamente encadeadas",
    contentMethodologyLessonPlan:
      "O professor apresentará os conceitos teóricos e em seguida os alunos implementarão exemplos práticos em Java utilizando uma IDE como Eclipse ou IntelliJ.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectLessonPlan: "Estrutura de Dados em Java novo",
      descriptionLessonPlan:
        "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
      gradeLevelLessonPlan: "Ensino Superior",
      complexityLevelLessonPlan: "Avançado",
      durationMinutesLessonPlan: 120,
      generalObjective:
        "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  };

  it("Deve atualizar a metodologia do plano de aula com sucesso", async () => {
    mockUpdateMethodologyLessonPlan.mockResolvedValue(response);

    const result = await service.updateMethodologyLessonPlan(
      id_methodology_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateMethodologyLessonPlan).toHaveBeenCalledWith(
      id_methodology_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateTopicsLessonPlan", () => {
  const mockUpdateTopicsLessonPlan = jest.fn<
    Promise<patchTopicResponse>,
    [string, string, patchTopic]
  >();

  const mockRepository = {
    updateTopicsLessonPlan: mockUpdateTopicsLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_topics_lesson_plan = "211f79ee-7add-4423-b189-2039227be869";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchTopic = {
    titleTopicsLessonPlan: "Introdução às listas duplamente encadeadas",
  };

  const response: patchTopicResponse = {
    id_topics_lesson_plan: "211f79ee-7add-4423-b189-2039227be869",
    id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
    titleTopicsLessonPlan: "Introdução às Listas Encadeadas e suas Variações",
    contentTopicsLessonPlan:
      "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
    detailed_explanation_topic_lesson_plan:
      "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectLessonPlan: "Estrutura de Dados em Java novo",
      descriptionLessonPlan:
        "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
      gradeLevelLessonPlan: "Ensino Superior",
      complexityLevelLessonPlan: "Avançado",
      durationMinutesLessonPlan: 120,
      generalObjective:
        "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  };

  it("Deve atualizar o tópico do plano de aula com sucesso", async () => {
    mockUpdateTopicsLessonPlan.mockResolvedValue(response);

    const result = await service.updateTopicsLessonPlan(
      id_topics_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateTopicsLessonPlan).toHaveBeenCalledWith(
      id_topics_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateExamplesTopics", () => {
  const mockUpdateExamplesTopics = jest.fn<
    Promise<patchExamplesTopicsResponse>,
    [string, string, patchExamplesTopics]
  >();

  const mockRepository = {
    updateExamplesTopics: mockUpdateExamplesTopics,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_examples_topics = "137eefa6-387e-4bca-917a-40d74faf7b33";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchExamplesTopics = {
    contentExamplesTopicLessonPlan: "Exemplo de lista duplamente encadeada",
  };

  const response: patchExamplesTopicsResponse = {
    id_examples_topics: "137eefa6-387e-4bca-917a-40d74faf7b33",
    id_topics_lesson_plan: "211f79ee-7add-4423-b189-2039227be869",
    titleExamplesTopicLessonPlan: "Editor de texto",
    contentExamplesTopicLessonPlan:
      "O histórico de páginas visitadas em um navegador web pode ser implementado usando uma lista duplamente encadeada, permitindo ao usuário navegar para frente e para trás facilmente.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    topics_lesson_plan: {
      id_topics_lesson_plan: "211f79ee-7add-4423-b189-2039227be869",
      id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
      titleTopicsLessonPlan: "Introdução às Listas Encadeadas e suas Variações",
      contentTopicsLessonPlan:
        "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
      detailed_explanation_topic_lesson_plan:
        "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      lesson_plan: {
        id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
        id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
        subjectLessonPlan: "Estrutura de Dados em Java novo",
        descriptionLessonPlan:
          "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
        gradeLevelLessonPlan: "Ensino Superior",
        complexityLevelLessonPlan: "Avançado",
        durationMinutesLessonPlan: 120,
        generalObjective:
          "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
        createdAt: new Date("2025-11-16T14:50:18.336Z"),
        updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      },
    },
  };

  it("Deve atualizar o exemplo do tópico do plano de aula com sucesso", async () => {
    mockUpdateExamplesTopics.mockResolvedValue(response);

    const result = await service.updateExamplesTopics(
      id_examples_topics,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateExamplesTopics).toHaveBeenCalledWith(
      id_examples_topics,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateHomeworkLessonPlan", () => {
  const mockUpdateHomeworkLessonPlan = jest.fn<
    Promise<patchHomeworkResponse>,
    [string, string, patchHomework]
  >();
  const mockRepository = {
    updateHomeworkLessonPlan: mockUpdateHomeworkLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_homework = "ee88a594-7ee3-4073-a19d-334c58111cac";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchHomework = {
    description:
      "Implementar uma lista duplamente encadeada genérica em Java que possa armazenar diferentes tipos de dados. Escrever testes unitários abrangentes para verificar a correção de todos os métodos da lista.",
  };

  const response: patchHomeworkResponse = {
    id_homework_lesson_plan: "ee88a594-7ee3-4073-a19d-334c58111cac",
    id_lesson_plan: "ccd71d66-e8ca-4c99-b302-69a40b655638",
    description:
      "Implementar uma lista duplamente encadeada genérica em Java que possa armazenar diferentes tipos de dados. Escrever testes unitários abrangentes para verificar a correção de todos os métodos da lista.",
    objective:
      "Consolidar o conhecimento sobre a implementação de listas duplamente encadeadas e a importância dos testes unitários na garantia da qualidade do código.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "ccd71d66-e8ca-4c99-b302-69a40b655638",
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
    },
  };

  it("Deve atualizar o trabalho do plano de aula com sucesso", async () => {
    mockUpdateHomeworkLessonPlan.mockResolvedValue(response);

    const result = await service.updateHomeworkLessonPlan(
      id_homework,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateHomeworkLessonPlan).toHaveBeenCalledWith(
      id_homework,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateActivitiesTopics", () => {
  const mockUpdateActivitiesTopics = jest.fn<
    Promise<patchActivitiesTopicsResponse>,
    [string, string, patchActivitiesTopics]
  >();
  const mockRepository = {
    updateActivitiesTopics: mockUpdateActivitiesTopics,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_activities_topics = "33fbfe88-d9b9-46aa-bbdd-818af9952101";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchActivitiesTopics = {
    contentActivitiesTopicLessonPlan: "Exemplo de lista duplamente encadeada",
  };

  const response: patchActivitiesTopicsResponse = {
    id_activities_topics: "33fbfe88-d9b9-46aa-bbdd-818af9952101",
    id_topics_lesson_plan: "a02f3878-b3ff-4182-ba7c-b7a2eade9041",
    titleActivitiesTopicLessonPlan: "Discussão em Grupo",
    contentActivitiesTopicLessonPlan:
      "Divida a turma em grupos e peça para discutirem cenários onde uma lista duplamente encadeada seria mais vantajosa que um array ou uma lista simplesmente encadeada.",
    explicationActivitiesTopicLessonPlan:
      "Fomenta a colaboração, a argumentação e a aplicação dos conhecimentos em diferentes contextos.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    topics_lesson_plan: {
      id_topics_lesson_plan: "a02f3878-b3ff-4182-ba7c-b7a2eade9041",
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
      titleTopicsLessonPlan: "Introdução às Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
      detailed_explanation_topic_lesson_plan:
        "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      lesson_plan: {
        id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
      },
    },
  };

  it("Deve atualizar a atividade do tópico do plano de aula com sucesso", async () => {
    mockUpdateActivitiesTopics.mockResolvedValue(response);

    const result = await service.updateActivitiesTopics(
      id_activities_topics,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateActivitiesTopics).toHaveBeenCalledWith(
      id_activities_topics,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateConnectionsTopics", () => {
  const mockUpdateConnectionsTopics = jest.fn<
    Promise<patchConnectionsTopicsResponse>,
    [string, string, patchConnectionsTopics]
  >();
  const mockRepository = {
    updateConnectionsTopics: mockUpdateConnectionsTopics,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_connections_topics = "7ac51d93-eb05-4c33-a14b-3ee2713d5118";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchConnectionsTopics = {
    titleConnectionsTopics: "Editores de Texto",
  };

  const response: patchConnectionsTopicsResponse = {
    id_connections_topics: "7ac51d93-eb05-4c33-a14b-3ee2713d5118",
    id_topics_lesson_plan: "a02f3878-b3ff-4182-ba7c-b7a2eade9041",
    titleConnectionsTopics: "Editores de Texto",
    contentConnectionsTopics:
      "Em interfaces gráficas, podem ser utilizadas para implementar funcionalidades como a pilha de desfazer/refazer em editores de texto ou imagens.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    topics_lesson_plan: {
      id_topics_lesson_plan: "a02f3878-b3ff-4182-ba7c-b7a2eade9041",
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
      titleTopicsLessonPlan: "Introdução às Listas Duplamente Encadeadas",
      contentTopicsLessonPlan:
        "Listas duplamente encadeadas são estruturas de dados lineares onde cada elemento (nó) contém um dado e dois ponteiros: um para o próximo elemento e outro para o elemento anterior. Essa estrutura permite percorrer a lista em ambas as direções, o que pode ser útil em diversas aplicações. Discutiremos a diferença entre listas simples e duplamente encadeadas, destacando as vantagens e desvantagens de cada uma.",
      detailed_explanation_topic_lesson_plan:
        "Uma lista duplamente encadeada consiste em nós, cada um contendo três campos: o dado (informação a ser armazenada), um ponteiro 'próximo' que aponta para o próximo nó na lista, e um ponteiro 'anterior' que aponta para o nó anterior. O primeiro nó da lista é chamado de 'cabeça' (head) e o último nó tem seu ponteiro 'próximo' apontando para nulo (null). Da mesma forma, o ponteiro 'anterior' do primeiro nó também aponta para nulo. Esta estrutura permite iteração bidirecional e facilita operações de inserção e remoção em qualquer posição.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
      lesson_plan: {
        id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
      },
    },
  };

  it("Deve atualizar a conexão com o tema do plano de aula com sucesso", async () => {
    mockUpdateConnectionsTopics.mockResolvedValue(response);

    const result = await service.updateConnectionsTopics(
      id_connections_topics,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateConnectionsTopics).toHaveBeenCalledWith(
      id_connections_topics,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateInclusiveAdaptationLessonPlan", () => {
  const mockUpdateInclusiveAdaptationLessonPlan = jest.fn<
    Promise<patchInclusiveAdaptationResponse>,
    [string, string, patchInclusiveAdaptation]
  >();

  const mockRepository = {
    updateInclusiveAdaptationLessonPlan:
      mockUpdateInclusiveAdaptationLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_inclusive_adaptation_lesson_plan =
    "10a0b2b7-f7ab-4e01-8214-ee616bb04379";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchInclusiveAdaptation = {
    visualImpairment:
      "Disponibilizar o material didático em formato acessível (HTML, PDF com texto selecionável), utilizar fontes grandes e cores contrastantes nas apresentações, e fornecer audiodescrição das imagens e diagramas.",
  };

  const response: patchInclusiveAdaptationResponse = {
    id_inclusive_adaptation_lesson_plan: "10a0b2b7-f7ab-4e01-8214-ee616bb04379",
    id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
    visualImpairment:
      "Disponibilizar o material didático em formato acessível (HTML, PDF com texto selecionável), utilizar fontes grandes e cores contrastantes nas apresentações, e fornecer audiodescrição das imagens e diagramas.",
    learningDifficulties:
      "Dividir as tarefas em etapas menores e mais gerenciáveis. Oferecer apoio individualizado durante as atividades práticas. Utilizar recursos visuais e diagramas para explicar os conceitos. Permitir tempo adicional para a conclusão das atividades.",
    highAbilities:
      "Propor desafios adicionais, como a implementação de variações da lista duplamente encadeada (por exemplo, listas circulares duplamente encadeadas). Incentivar a participação em competições de programação. Orientar na pesquisa de tópicos avançados relacionados a estruturas de dados.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "a5b6c122-f932-41e7-90b2-9db2fbacad2f",
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
    },
  };

  it("Deve atualizar a adaptação inclusiva do plano de aula com sucesso", async () => {
    mockUpdateInclusiveAdaptationLessonPlan.mockResolvedValue(response);

    const result = await service.updateInclusiveAdaptationLessonPlan(
      id_inclusive_adaptation_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateInclusiveAdaptationLessonPlan).toHaveBeenCalledWith(
      id_inclusive_adaptation_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateReferencesLessonPlan", () => {
  const mockUpdateReferencesLessonPlan = jest.fn<
    Promise<patchReferencesResponse>,
    [string, string, patchReferences]
  >();
  const mockRepository = {
    updateReferencesLessonPlan: mockUpdateReferencesLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_references_lesson_plan = "a7d934e1-1773-4497-901e-6363c65da278";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchReferences = {
    contentReferencesLessonPlan:
      "Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). Data Structures and Algorithms in Java (6th ed.). Wiley.",
  };

  const response: patchReferencesResponse = {
    id_references_lesson_plan: "a7d934e1-1773-4497-901e-6363c65da278",
    id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
    contentReferencesLessonPlan:
      "Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). Data Structures and Algorithms in Java (6th ed.). Wiley.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectLessonPlan: "Estrutura de Dados em Java novo",
      descriptionLessonPlan:
        "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
      gradeLevelLessonPlan: "Ensino Superior",
      complexityLevelLessonPlan: "Avançado",
      durationMinutesLessonPlan: 120,
      generalObjective:
        "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  };

  it("Deve atualizar a referência do plano de aula com sucesso", async () => {
    mockUpdateReferencesLessonPlan.mockResolvedValue(response);

    const result = await service.updateReferencesLessonPlan(
      id_references_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateReferencesLessonPlan).toHaveBeenCalledWith(
      id_references_lesson_plan,
      id_user,
      input
    );
  });
});

describe("LessonPlanService - updateClosureLessonPlan", () => {
  const mockUpdateClosureLessonPlan = jest.fn<
    Promise<patchClosureResponse>,
    [string, string, patchClosure]
  >();
  const mockRepository = {
    updateClosureLessonPlan: mockUpdateClosureLessonPlan,
  };

  const service = new LessonPlanService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_closure_lesson_plan = "a984c931-62e3-4eef-b358-1d26c0d24acd";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchClosure = {
    reflection:
      "Incentivar os alunos a refletir sobre a importância das estruturas de dados na resolução de problemas de programação e sobre as vantagens e desvantagens das listas duplamente encadeadas em relação a outras estruturas.",
  };

  const response: patchClosureResponse = {
    id_closure_lesson_plan: "a984c931-62e3-4eef-b358-1d26c0d24acd",
    id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
    summary:
      "Revisão dos principais conceitos abordados na aula, incluindo a estrutura de listas duplamente encadeadas, sua implementação em Java, aplicações práticas e análise de desempenho.",
    reflection:
      "Incentivar os alunos a refletir sobre a importância das estruturas de dados na resolução de problemas de programação e sobre as vantagens e desvantagens das listas duplamente encadeadas em relação a outras estruturas.",
    nextSteps:
      "Introdução a outras estruturas de dados avançadas, como árvores e grafos, e sua aplicação em problemas mais complexos.",
    createdAt: new Date("2025-11-16T14:50:18.336Z"),
    updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    lesson_plan: {
      id_lesson_plan: "92261020-0381-49e3-8e82-e623eade192a",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectLessonPlan: "Estrutura de Dados em Java novo",
      descriptionLessonPlan:
        "Aula sobre o funcionamento, implementação e manipulação de listas duplamente encadeadas em Java.",
      gradeLevelLessonPlan: "Ensino Superior",
      complexityLevelLessonPlan: "Avançado",
      durationMinutesLessonPlan: 120,
      generalObjective:
        "Capacitar os alunos a compreender, implementar e utilizar listas duplamente encadeadas em Java, desenvolvendo habilidades de análise e aplicação prática na resolução de problemas.",
      createdAt: new Date("2025-11-16T14:50:18.336Z"),
      updatedAt: new Date("2025-11-16T14:50:18.336Z"),
    },
  };

  it("Deve atualizar o fechamento do plano de aula com sucesso", async () => {
    mockUpdateClosureLessonPlan.mockResolvedValue(response);

    const result = await service.updateClosureLessonPlan(
      id_closure_lesson_plan,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateClosureLessonPlan).toHaveBeenCalledWith(
      id_closure_lesson_plan,
      id_user,
      input
    );
  });
});
