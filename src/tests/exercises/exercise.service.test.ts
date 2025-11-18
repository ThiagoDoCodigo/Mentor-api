import { ExerciseService } from "../../modules/exercises/exercise.service";
import { CustomError } from "../../erros/CustomError";
import {
  ExercisesRequest,
  ExercisesResponse,
  patchExercises,
  patchExercisesResponse,
  patchExerciseItem,
  patchExerciseItemResponse,
  patchThemeExercises,
  patchThemeExercisesResponse,
  patchObjectivesExercises,
  patchObjectivesExercisesResponse,
  patchMultipleOptions,
  patchMultipleOptionsResponse,
  patchTrueOrFalseOptions,
  patchTrueOrFalseOptionsResponse,
} from "../../modules/exercises/exercise.interface";

describe("ExerciseService - createExercise", () => {
  const mockCreateExercise = jest.fn<
    Promise<ExercisesResponse | null>,
    [ExercisesRequest, string]
  >();

  const mockRepository = {
    createExercise: mockCreateExercise,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const input: ExercisesRequest = {
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

  const response: ExercisesResponse = {
    id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
    id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
    subjectExercises: "Parasitologia",
    descriptionExercises:
      "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
    gradeLevelExercises: "Ensino Superior",
    complexityLevelExercises: "Avançado",
    durationMinutesExercises: 90,
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    execiseItems: [
      {
        id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        type_exercise: "verdadeiro-falso",
        title_exercise: "Afirmações sobre Piolhos e sua Biologia",
        content_exercise:
          "Analise as seguintes afirmações sobre piolhos (Pediculus humanus e Pthirus pubis) e indique se são verdadeiras (V) ou falsas (F).",
        correct_answer_exercise: "F, F, V, F, V",
        explanation_exercise:
          "1) Falso: Piolhos da cabeça não são vetores primários de doenças. 2) Falso: A principal forma de transmissão é contato direto. 3) Verdadeiro: Piolhos do corpo são vetores de doenças. 4) Falso: Permetrina tem menor eficácia contra lêndeas. 5) Verdadeiro: Pthirus pubis causa prurido intenso.",
        bloom_level_exercise: "lembrar",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
        optionsMultiple: [],
        optionsTrueOrFalse: [
          {
            id_optionsTrueOrFalse: "021545ed-1442-4ee3-9094-7e227588e34f",
            id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
            option: "V",
            content_option:
              "Os piolhos da cabeça (Pediculus humanus capitis) são vetores de diversas doenças bacterianas e virais.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsTrueOrFalse: "5b5d6d7a-6651-49e1-a14f-532f87fffe57",
            id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
            option: "F",
            content_option:
              "A transmissão de piolhos ocorre principalmente por meio do contato direto com objetos pessoais infestados, como pentes e escovas.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsTrueOrFalse: "868197db-7f14-4c40-a19d-cdc214fc739f",
            id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
            option: "V",
            content_option:
              "Os piolhos do corpo (Pediculus humanus corporis) são importantes vetores de doenças como o tifo exantemático e a febre das trincheiras.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsTrueOrFalse: "69d3b328-9855-4757-b8e1-e9d7de785e9f",
            id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
            option: "F",
            content_option:
              "A permetrina é um inseticida eficaz contra todas as fases do ciclo de vida dos piolhos, incluindo as lêndeas (ovos).",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsTrueOrFalse: "1196732b-9090-4dfc-bf43-cf7f74d40be5",
            id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
            option: "V",
            content_option:
              "O piolho pubiano (Pthirus pubis) geralmente causa prurido intenso na região genital, devido à irritação da pele causada pela picada e saliva do parasita.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
        ],
      },
      {
        id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        type_exercise: "multipla-escolha",
        title_exercise: "Análise comparativa do ciclo de vida de ectoparasitas",
        content_exercise:
          "O ciclo de vida dos ectoparasitas, como pulgas, carrapatos e piolhos, apresenta variações significativas que influenciam diretamente as estratégias de controle e prevenção de infestações. A compreensão detalhada dessas diferenças é crucial para o desenvolvimento de abordagens eficazes.",
        correct_answer_exercise: "C",
        explanation_exercise:
          "A alternativa correta é a C, pois descreve corretamente o ciclo de vida dos piolhos, que apresentam metamorfose gradual com estágios de ovo (lêndea), ninfa e adulto. As ninfas se alimentam de sangue do hospedeiro, ao contrário das pulgas onde a fase larval se alimenta de matéria orgânica.",
        bloom_level_exercise: "analisar",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
        optionsMultiple: [
          {
            id_optionsMultiple: "dcb30502-81fd-4afb-8388-691dc36f085f",
            id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
            option: "E",
            content_option:
              "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsMultiple: "393a77f4-d1d7-495d-aec8-f0fc3d170b1d",
            id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
            option: "D",
            content_option:
              "A longevidade dos carrapatos é uniforme entre as espécies, com um ciclo de vida tipicamente curto, raramente ultrapassando um ano, independente das condições ambientais e do hospedeiro.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsMultiple: "580637e2-4a40-4cf3-8f8c-0e619e722c03",
            id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
            option: "C",
            content_option:
              "Os piolhos apresentam um ciclo de vida com metamorfose gradual, passando pelos estágios de ovo (lêndea), ninfa e adulto, com todas as fases ninfais se alimentando de sangue do hospedeiro.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsMultiple: "66d2fc0c-170c-4abb-9284-eed2c90dc0a2",
            id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
            option: "B",
            content_option:
              "O ciclo de vida das pulgas é caracterizado por uma metamorfose completa, envolvendo os estágios de ovo, larva, pupa e adulto, sendo a fase larval a principal responsável pela alimentação no hospedeiro.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
          {
            id_optionsMultiple: "66403f00-f599-4bf4-b778-a682c9b9a429",
            id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
            option: "A",
            content_option:
              "A metamorfose incompleta é característica exclusiva de carrapatos, com estágios de larva, ninfa e adulto, sem a fase pupal.",
            createdAt: new Date("2025-11-15T20:40:58.819Z"),
            updatedAt: new Date("2025-11-15T20:40:58.819Z"),
          },
        ],
        optionsTrueOrFalse: [],
      },
      {
        id_exercise_item: "70754608-0f14-4673-93b9-47b1fd6caf3f",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        type_exercise: "discursiva",
        title_exercise:
          "Avaliação de Métodos de Controle de Carrapatos em Bovinos",
        content_exercise:
          "Um produtor rural relata altas infestações por carrapatos em seu rebanho bovino, causando prejuízos econômicos significativos devido à perda de peso dos animais e transmissão de doenças. Discuta e avalie criticamente diferentes métodos de controle de carrapatos que podem ser implementados na propriedade, considerando os aspectos de eficácia, custo-benefício, impacto ambiental e resistência parasitária. Justifique sua recomendação para a melhor abordagem a ser adotada pelo produtor.",
        correct_answer_exercise: "",
        explanation_exercise:
          "A resposta ideal deve abordar a análise comparativa de métodos químicos (acaricidas), biológicos (uso de predadores naturais ou fungos entomopatogênicos), manejo de pastagens (rotação de pastos, controle de plantas daninhas) e controle genético (seleção de raças resistentes). O aluno deve avaliar a eficácia de cada método, seus custos, impacto ambiental e o risco de desenvolvimento de resistência por parte dos carrapatos. A recomendação deve ser justificada com base em uma análise integrada desses fatores, considerando as particularidades da propriedade e o contexto local.",
        bloom_level_exercise: "avaliar",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
        optionsMultiple: [],
        optionsTrueOrFalse: [],
      },
    ],
    themesExercises: [
      {
        id_theme_exercise: "14cebec1-9c29-4946-99a5-2537c3d016cb",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleThemeExercises: "Pulgas",
        contentThemeExercises:
          "Estudo do ciclo de vida, hospedagem, transmissão de patógenos e medidas de controle.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
      {
        id_theme_exercise: "a11b203f-0aed-485b-a6cf-642bdbd6f6e0",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleThemeExercises: "Carrapatos",
        contentThemeExercises:
          "Exploração de espécies de carrapatos, doenças transmitidas e prevenção em animais domésticos.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
      {
        id_theme_exercise: "68e83ea7-4248-4a75-9083-0b6393dc9ac1",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleThemeExercises: "Piolhos",
        contentThemeExercises:
          "Análise de diferentes tipos de piolhos, sua morfologia, ciclo de vida e estratégias de combate.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
    ],
    objectivesExercises: [
      {
        id_objective_exercises: "a5cdbe26-bcc5-422b-b3f3-eb93c9953178",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleObjectiveExercises: "Identificar ectoparasitas",
        contentObjectiveExercises:
          "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
      {
        id_objective_exercises: "8dc3b02d-2c76-491f-952d-1abc4760b282",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleObjectiveExercises: "Compreender transmissão de doenças",
        contentObjectiveExercises:
          "O aluno deverá entender como esses ectoparasitas atuam como vetores de doenças e os fatores que influenciam a infestação.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
      {
        id_objective_exercises: "a69716fe-76ea-49b5-b0d4-ab06693eb8ae",
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        titleObjectiveExercises: "Aplicar métodos de controle",
        contentObjectiveExercises:
          "O aluno deverá avaliar técnicas de prevenção, tratamento e manejo ambiental para controlar infestações.",
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
    ],
  };

  const id_user = "92261020-0381-49e3-8e82-e623eade192a";

  it("Deve salvar o exercicio com sucesso", async () => {
    mockCreateExercise.mockResolvedValue(response);

    const result = await service.createExercise(input, id_user);

    expect(result).toEqual(response);
    expect(mockCreateExercise).toHaveBeenCalledWith(input, id_user);
  });

  it("Deve lançar um erro se o retorno do DB for vazio", async () => {
    mockCreateExercise.mockResolvedValue(null);

    mockCreateExercise.mockRejectedValue(
      new CustomError("Erro ao criar exercício", 400, "GenericError")
    );

    await expect(service.createExercise(input, id_user)).rejects.toThrow(
      "Erro ao criar exercício"
    );
    expect(mockCreateExercise).toHaveBeenCalledWith(input, id_user);
  });
});

describe("ExerciseService - updateExercise", () => {
  const mockUpdateExercise = jest.fn<
    Promise<patchExercisesResponse>,
    [string, string, patchExercises]
  >();

  const mockRepository = {
    updateExercise: mockUpdateExercise,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_exercise = "39fd54b5-52be-4e0b-ae54-857bf1d5b962";
  const id_user = "92261020-0381-49e3-8e82-e623eade192a";

  const input: patchExercises = {
    subjectExercises: "Parasitologia",
    descriptionExercises:
      "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
    complexityLevelExercises: "Avançado",
    durationMinutesExercises: 90,
  };

  const response: patchExercisesResponse = {
    id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
    id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
    subjectExercises: "Parasitologia",
    descriptionExercises:
      "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
    gradeLevelExercises: "Ensino Superior",
    complexityLevelExercises: "Avançado",
    durationMinutesExercises: 90,
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
  };

  it("Deve atualizar o exercicio com sucesso", async () => {
    mockUpdateExercise.mockResolvedValue(response);

    const result = await service.updateExercise(id_exercise, id_user, input);

    expect(result).toEqual(response);
    expect(mockUpdateExercise).toHaveBeenCalledWith(
      id_exercise,
      id_user,
      input
    );
  });
});

describe("ExerciseService - updateExerciseItem", () => {
  const mockUpdateExerciseItem = jest.fn<
    Promise<patchExerciseItemResponse>,
    [string, string, patchExerciseItem]
  >();

  const mockRepository = {
    updateExerciseItem: mockUpdateExerciseItem,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_exercise_item = "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchExerciseItem = {
    title_exercise: "Afirmações sobre Piolhos e sua Biologia",
    correct_answer_exercise: "F, F, V, F, V",
  };

  const response: patchExerciseItemResponse = {
    id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
    id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
    type_exercise: "verdadeiro-falso",
    title_exercise: "Afirmações sobre Piolhos e sua Biologia",
    content_exercise:
      "Analise as seguintes afirmações sobre piolhos (Pediculus humanus e Pthirus pubis) e indique se são verdadeiras (V) ou falsas (F).",
    correct_answer_exercise: "F, F, V, F, V",
    explanation_exercise:
      "Piolhos (Pediculus humanus e Pthirus pubis) sao parasitas que se reproduzem por meio da fecundação.",
    bloom_level_exercise: "lembrar",
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    exercise: {
      id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectExercises: "Parasitologia",
      descriptionExercises:
        "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
      gradeLevelExercises: "Ensino Superior",
      complexityLevelExercises: "Avançado",
      durationMinutesExercises: 90,
      createdAt: new Date("2025-11-15T20:40:58.819Z"),
      updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    },
  };

  it("Deve atualizar o exercicio com sucesso", async () => {
    mockUpdateExerciseItem.mockResolvedValue(response);

    const result = await service.updateExerciseItem(
      id_exercise_item,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateExerciseItem).toHaveBeenCalledWith(
      id_exercise_item,
      id_user,
      input
    );
  });
});

describe("ExerciseService - updateThemeExercise", () => {
  const mockUpdateThemeExercise = jest.fn<
    Promise<patchThemeExercisesResponse>,
    [string, string, patchThemeExercises]
  >();

  const mockRepository = {
    updateThemeExercise: mockUpdateThemeExercise,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_theme_exercise = "14cebec1-9c29-4946-99a5-2537c3d016cb";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchThemeExercises = {
    titleThemeExercises: "Pulgas",
    contentThemeExercises:
      "Estudo do ciclo de vida, hospedagem, transmissão de patógenos e medidas de controle.",
  };

  const response: patchThemeExercisesResponse = {
    id_theme_exercise: "14cebec1-9c29-4946-99a5-2537c3d016cb",
    id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
    titleThemeExercises: "Pulgas",
    contentThemeExercises:
      "Estudo do ciclo de vida, hospedagem, transmissão de patógenos e medidas de controle.",
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    exercise: {
      id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectExercises: "Parasitologia",
      descriptionExercises:
        "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
      gradeLevelExercises: "Ensino Superior",
      complexityLevelExercises: "Avançado",
      durationMinutesExercises: 90,
      createdAt: new Date("2025-11-15T20:40:58.819Z"),
      updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    },
  };

  it("Deve atualizar o item do exercicio com sucesso", async () => {
    mockUpdateThemeExercise.mockResolvedValue(response);

    const result = await service.updateThemeExercise(
      id_theme_exercise,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateThemeExercise).toHaveBeenCalledWith(
      id_theme_exercise,
      id_user,
      input
    );
  });
});

describe("ExerciseService - updateObjectiveExercise", () => {
  const mockUpdateObjectiveExercise = jest.fn<
    Promise<patchObjectivesExercisesResponse>,
    [string, string, patchObjectivesExercises]
  >();

  const mockRepository = {
    updateObjectiveExercise: mockUpdateObjectiveExercise,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_objective_exercise = "a5cdbe26-bcc5-422b-b3f3-eb93c9953178";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchObjectivesExercises = {
    titleObjectiveExercises: "Identificar ectoparasitas",
    contentObjectiveExercises:
      "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
  };

  const response: patchObjectivesExercisesResponse = {
    id_objective_exercises: "a5cdbe26-bcc5-422b-b3f3-eb93c9953178",
    id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
    titleObjectiveExercises: "Identificar ectoparasitas",
    contentObjectiveExercises:
      "O aluno deverá reconhecer características morfológicas e biológicas de pulgas, carrapatos e piolhos.",
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    exercise: {
      id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
      id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
      subjectExercises: "Parasitologia",
      descriptionExercises:
        "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
      gradeLevelExercises: "Ensino Superior",
      complexityLevelExercises: "Avançado",
      durationMinutesExercises: 90,
      createdAt: new Date("2025-11-15T20:40:58.819Z"),
      updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    },
  };

  it("Deve atualizar o objetivo do exercicio com sucesso", async () => {
    mockUpdateObjectiveExercise.mockResolvedValue(response);

    const result = await service.updateObjectiveExercise(
      id_objective_exercise,
      id_user,
      input
    );

    expect(result).toEqual(response);
    expect(mockUpdateObjectiveExercise).toHaveBeenCalledWith(
      id_objective_exercise,
      id_user,
      input
    );
  });
});

describe("ExerciseService - updateOptionMultiple", () => {
  const mockUpdateOptionMultiple = jest.fn<
    Promise<patchMultipleOptionsResponse>,
    [string, string, patchMultipleOptions]
  >();

  const mockRepository = {
    updateOptionMultiple: mockUpdateOptionMultiple,
  };

  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_optionsMultiple = "dcb30502-81fd-4afb-8388-691dc36f085f";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchMultipleOptions = {
    content_option:
      "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
  };

  const response: patchMultipleOptionsResponse = {
    id_optionsMultiple: "dcb30502-81fd-4afb-8388-691dc36f085f",
    id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
    option: "E",
    content_option:
      "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    exerciseItem: {
      id_exercise_item: "9a25ccba-3bc5-4cbc-92eb-34313296df42",
      id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
      type_exercise: "verdadeiro-falso",
      title_exercise: "Afirmações sobre Piolhos e sua Biologia",
      content_exercise:
        "Analise as seguintes afirmações sobre piolhos (Pediculus humanus e Pthirus pubis) e indique se são verdadeiras (V) ou falsas (F).",
      correct_answer_exercise: "F, F, V, F, V",
      explanation_exercise:
        "1) Falso: Piolhos da cabeça não são vetores primários de doenças. 2) Falso: A principal forma de transmissão é contato direto. 3) Verdadeiro: Piolhos do corpo são vetores de doenças. 4) Falso: Permetrina tem menor eficácia contra lêndeas. 5) Verdadeiro: Pthirus pubis causa prurido intenso.",
      bloom_level_exercise: "lembrar",
      createdAt: new Date("2025-11-15T20:40:58.819Z"),
      updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      exercise: {
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
        subjectExercises: "Parasitologia",
        descriptionExercises:
          "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
        gradeLevelExercises: "Ensino Superior",
        complexityLevelExercises: "Avançado",
        durationMinutesExercises: 90,
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
    },
  };

  it("Deve atualizar a opcao multipla com sucesso", async () => {
    mockUpdateOptionMultiple.mockResolvedValue(response);

    const result = await service.updateOptionMultiple(
      id_optionsMultiple,
      id_user,
      input
    );

    expect(result).toEqual(response);

    expect(mockUpdateOptionMultiple).toHaveBeenCalledWith(
      id_optionsMultiple,
      id_user,
      input
    );
  });
});

describe("ExerciseService - updateOptionTrueOrFalse", () => {
  const mockUpdateOptionTrueOrFalse = jest.fn<
    Promise<patchTrueOrFalseOptionsResponse>,
    [string, string, patchTrueOrFalseOptions]
  >();
  const mockRepository = {
    updateOptionTrueOrFalse: mockUpdateOptionTrueOrFalse,
  };
  const service = new ExerciseService(mockRepository as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const id_optionsTrueOrFalse = "5b5d6d7a-6651-49e1-a14f-532f87fffe57";
  const id_user = "46a3c73d-16bb-421e-9573-4fa0212c3710";

  const input: patchTrueOrFalseOptions = {
    content_option:
      "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
  };

  const response: patchTrueOrFalseOptionsResponse = {
    id_optionsTrueOrFalse: "5b5d6d7a-6651-49e1-a14f-532f87fffe57",
    id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
    option: "V",
    content_option:
      "A eclosão dos ovos de pulgas é independente das condições ambientais, ocorrendo de forma consistente em qualquer temperatura ou umidade, garantindo a continuidade do ciclo de vida.",
    createdAt: new Date("2025-11-15T20:40:58.819Z"),
    updatedAt: new Date("2025-11-15T20:40:58.819Z"),
    exerciseItem: {
      id_exercise_item: "ab8f99b8-99aa-4ad4-8306-b6f5d2155de6",
      id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
      type_exercise: "verdadeiro-falso",
      title_exercise: "Afirmações sobre Piolhos e sua Biologia",
      content_exercise:
        "Analise as seguintes afirmações sobre piolhos (Pediculus humanus e Pthirus pubis) e indique se são verdadeiras (V) ou falsas (F).",
      correct_answer_exercise: "F, F, V, F, V",
      explanation_exercise:
        "1) Falso: Piolhos da cabeça não são vetores primários de doenças. 2) Falso: A principal forma de transmissão é contato direto. 3) Verdadeiro: Piolhos do corpo são vetores de doenças. 4) Falso: Permetrina tem menor eficácia contra lêndeas. 5) Verdadeiro: Pthirus pubis causa prurido intenso.",
      bloom_level_exercise: "lembrar",
      createdAt: new Date("2025-11-15T20:40:58.819Z"),
      updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      exercise: {
        id_exercise: "39fd54b5-52be-4e0b-ae54-857bf1d5b962",
        id_user: "46a3c73d-16bb-421e-9573-4fa0212c3710",
        subjectExercises: "Parasitologia",
        descriptionExercises:
          "Exercícios para revisão de ectoparasitas como pulgas, carrapatos e piolhos, abordando ciclo de vida, transmissão de doenças, identificação e controle.",
        gradeLevelExercises: "Ensino Superior",
        complexityLevelExercises: "Avançado",
        durationMinutesExercises: 90,
        createdAt: new Date("2025-11-15T20:40:58.819Z"),
        updatedAt: new Date("2025-11-15T20:40:58.819Z"),
      },
    },
  };

  it("Deve atualizar a opcao verdadeiro ou falso com sucesso", async () => {
    mockUpdateOptionTrueOrFalse.mockResolvedValue(response);

    const result = await service.updateOptionTrueOrFalse(
      id_optionsTrueOrFalse,
      id_user,
      input
    );

    expect(result).toEqual(response);

    expect(mockUpdateOptionTrueOrFalse).toHaveBeenCalledWith(
      id_optionsTrueOrFalse,
      id_user,
      input
    );
  });
});
