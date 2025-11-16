**Documentação** **da** **API:** **Mentor-api**

**Esta** **documentação** **descreve** **os** **endpoints** **da**
**coleção** **Postman** **"Mentor-api",** **agrupados** **por** **suas**
**funcionalidades** **(Users,** **Auth,** **exercises** **e**
**lesson_plans).**

**Variáveis** **de** **Ambiente** **Necessárias:**

> **●**
>
> **●**

||
||
||
||

**:** **URL** **base** **da** **API** **(ex:**
**https://api.mentor.com.br)**

> **Token** **de** **acesso** **JWT** **(Bearer** **Token)** **para**
> **endpoints** **autenticados.**

**1.** **Users**

**Endpoints** **para** **gerenciamento** **de** **usuários.**

**1.1.** **add** **user**

**Cria** **um** **novo** **usuário** **no** **sistema.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||
||
||

**Response** **(Status** **201** **-** **Created):**

||
||
||
||
||
||
||

||
||
||
||
||
||

**1.2.** **get** **users**

**Retorna** **a** **lista** **de** **todos** **os** **usuários.**

||
||
||
||

**Response** **(Status** **200** **-** **OK):**

||
||
||
||
||
||
||
||
||
||
||
||
||

**1.3.** **patch** **user**

**Atualiza** **dados** **do** **usuário** **(usuário** **pode**
**atualizar** **seus** **próprios** **dados).**

||
||
||

||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

||
||
||
||
||
||
||
||
||
||
||
||

**1.4.** **patch** **user** **admin**

**Atualiza** **dados** **de** **qualquer** **usuário** **(acesso**
**de** **administrador).**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||

**}**

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **user** **com** **os**
**dados** **atualizados.**

**2.** **Auth**

**Endpoints** **para** **autenticação** **e** **gerenciamento** **de**
**tokens.**

**2.1.** **login**

**Realiza** **o** **login** **e** **retorna** **os** **tokens** **de**
**acesso.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**{**

> **"tokens":** **{**
>
> **"accessToken":** **"jwt_token_string",** **"refreshToken":**
> **"jwt_token_string"**
>
> **},** **"user":** **{**
>
> **"id_user":** **"uuid",** **"name_user":** **"string",**
> **"email_user":** **"string",** **"cpf_user":** **"string",**
> **"role_user":** **"string"**

**}** **}**

**2.2.** **refresh** **token**

**Gera** **novos** **tokens** **de** **acesso** **e** **refresh**
**usando** **o** **refreshToken** **expirado.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**{**

> **"tokens":** **{**
>
> **"accessToken":** **"new_jwt_token_string",** **"refreshToken":**
> **"new_jwt_token_string"**
>
> **},** **"user":** **{**
>
> **"id_user":** **"uuid",** **"role_user":** **"string"**

**}** **}**

**3.** **exercises**

**Endpoints** **para** **gerenciamento** **de** **exercícios**
**criados** **por** **IA** **ou** **manualmente.**

**3.1.** **add** **exercise**

**Cria** **um** **novo** **conjunto** **de** **exercícios.**

||
||
||

||
||
||

**Estrutura** **do** **Body** **(Apenas** **atributos** **principais):**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**Response** **(Status** **201** **-** **Created):**

**Retorna** **a** **estrutura** **completa** **do** **exercício**
**criado,** **incluindo** **todos** **os** **campos** **e**

**sub-objetos** **enviados** **no** **Body,** **junto** **com** **IDs**
**gerados** **(id_exercise,** **id_exercise_item,** **etc.)** **e**
**timestamps.**

**{**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**3.2.** **get** **by** **admin**

**Retorna** **uma** **lista** **paginada** **de** **todos** **os**
**exercícios** **(acesso** **de** **administrador).**

||
||
||
||

**Query** **Params:**

> **●** **page:** **Número** **da** **página.**
>
> **●** **limit:** **Limite** **de** **itens** **por** **página.**

**Response** **(Status** **200** **-** **OK):**

**{**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**3.3.** **get** **by** **user**

**Retorna** **uma** **lista** **paginada** **de** **exercícios**
**criados** **pelo** **usuário** **autenticado.**

||
||
||
||

**Query** **Params:**

> **●** **page:** **Número** **da** **página.**
>
> **●** **limit:** **Limite** **de** **itens** **por** **página.**

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **get** **by** **admin,** **mas**
**filtrado** **pelo** **id_user** **do** **token.**

**3.4.** **get** **by** **id**

**Retorna** **um** **exercício** **específico** **pelo** **seu** **ID.**

||
||
||
||

**Path** **Params:**

> **●** **id_exercise:** **ID** **do** **exercício.**

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **de** **exercício** **completo**
**(estrutura** **do** **item** **dentro** **do** **array** **data**
**do** **get** **by** **admin).**

**3.5.** **update** **ExerciseModel**

**Atualiza** **campos** **principais** **do** **exercício.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

||
||
||
||
||
||
||
||
||
||
||
||
||

**3.6.** **update** **ExerciseItem**

**Atualiza** **um** **item/pergunta** **específica** **dentro** **de**
**um** **exercício.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **do** **item** **do** **exercício**
**atualizado,** **aninhado** **com** **o** **objeto** **pai** **do**
**exercício.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**3.7.** **update** **ObjectiveExercise**

**Atualiza** **um** **objetivo** **específico** **do** **exercício.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **do** **objetivo** **atualizado,**
**aninhado** **com** **o** **objeto** **pai** **do** **exercício.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**3.8.** **update** **theme**

**Atualiza** **um** **tema** **específico** **do** **exercício.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **update** **ObjectiveExercise,**
**mas** **com** **o** **objeto** **id_theme_exercise** **atualizado.**

**3.9.** **update** **option-multiple**

**Atualiza** **uma** **opção** **de** **múltipla** **escolha.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **da** **opção** **múltipla**
**atualizado,** **aninhado** **com** **o** **item** **do** **exercício**
**e** **o** **exercício** **pai.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||

**3.10.** **update** **option-true-or-false**

**Atualiza** **uma** **opção** **de** **verdadeiro** **ou** **falso.**

||
||
||

||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **update** **option-multiple,** **mas**
**com** **o** **objeto** **id_optionsTrueOrFalse** **atualizado.**

**4.** **lesson_plans**

**Endpoints** **para** **gerenciamento** **de** **planos** **de**
**aula.**

**4.1.** **add** **lesson_plan**

**Cria** **um** **novo** **plano** **de** **aula.**

||
||
||
||

**Estrutura** **do** **Body** **(Apenas** **atributos** **principais):**

||
||
||
||
||
||
||
||
||
||
||
||

||
||
||
||
||
||
||
||
||

**Response** **(Status** **201** **-** **Created):**

**Retorna** **a** **estrutura** **completa** **do** **plano** **de**
**aula** **criado,** **incluindo** **todos** **os** **campos** **e**
**sub-objetos** **com** **IDs** **e** **timestamps** **gerados.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**4.2.** **get** **by** **admin** **(lesson_plans)**

**Retorna** **uma** **lista** **paginada** **de** **todos** **os**
**planos** **de** **aula** **(acesso** **de** **administrador).**

||
||
||
||

**Query** **Params:**

> **●** **page:** **Número** **da** **página.**
>
> **●** **limit:** **Limite** **de** **itens** **por** **página.**

**Response** **(Status** **200** **-** **OK):**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**4.3.** **get** **by** **user** **(lesson_plans)**

**Retorna** **uma** **lista** **paginada** **de** **planos** **de**
**aula** **criados** **pelo** **usuário** **autenticado.**

||
||
||
||

**Query** **Params:**

> **●** **page:** **Número** **da** **página.**
>
> **●** **limit:** **Limite** **de** **itens** **por** **página.**

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **get** **by** **admin,** **mas**
**filtrado** **pelo** **id_user** **do** **token.**

**4.4.** **get** **by** **id** **(lesson_plans)**

**Retorna** **um** **plano** **de** **aula** **específico** **pelo**
**seu** **ID.**

||
||
||
||

**Path** **Params:**

> **●** **id_lesson_plan:** **ID** **do** **plano** **de** **aula.**

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **de** **plano** **de** **aula**
**completo** **(estrutura** **do** **item** **dentro** **do** **array**
**data** **do** **get** **by** **admin).**

**4.5.** **patch** **lesson**

**Atualiza** **campos** **principais** **do** **plano** **de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

||
||
||
||
||
||
||
||
||
||

**}**

**4.6.** **patch** **objetives**

**Atualiza** **um** **objetivo** **específico** **do** **plano** **de**
**aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **do** **objetivo** **atualizado,**
**aninhado** **com** **o** **objeto** **pai** **do** **plano** **de**
**aula.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**4.7.** **patch** **competencies**

**Atualiza** **uma** **competência** **específica** **do** **plano**
**de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_competencies_lesson_plan** **atualizado.**

**4.8.** **patch** **themes**

**Atualiza** **um** **tema** **específico** **do** **plano** **de**
**aula.**

||
||
||
||

||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_themes_lesson_plan** **atualizado.**

**4.9.** **patch** **methodology**

**Atualiza** **uma** **metodologia** **de** **ensino** **específica**
**do** **plano** **de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_methodology_lesson_plan** **atualizado.**

**4.10.** **patch** **topics**

**Atualiza** **um** **tópico** **principal** **dentro** **do** **plano**
**de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **do** **tópico** **atualizado,**
**aninhado** **com** **o** **objeto** **pai** **do** **plano** **de**
**aula.**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**4.11.** **patch** **topics** **examples**

**Atualiza** **um** **exemplo** **específico** **dentro** **de** **um**
**tópico.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **do** **exemplo** **atualizado,**
**aninhado** **com** **o** **tópico** **e** **o** **plano** **de**
**aula** **pai.**

||
||
||
||
||
||
||
||
||
||
||
||

**4.12.** **patch** **topics** **Activities**

**Atualiza** **uma** **atividade** **específica** **dentro** **de**
**um** **tópico.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **topics** **examples,**
**mas** **com** **o** **objeto** **id_activities_topics**
**atualizado.**

**4.13.** **patch** **topics** **connections**

**Atualiza** **uma** **conexão/relação** **específica** **dentro**
**de** **um** **tópico.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **topics** **examples,**
**mas** **com** **o** **objeto** **id_connections_topics**
**atualizado.**

**4.14.** **patch** **inclusive-adaptation**

**Atualiza** **o** **bloco** **de** **adaptação** **inclusiva** **do**
**plano** **de** **aula.**

||
||
||

||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_inclusive_adaptation_lesson_plan** **atualizado.**

**4.15.** **patch** **references**

**Atualiza** **uma** **referência** **específica** **do** **plano**
**de** **aula.**

||
||
||
||

**Body** **Exemplo:**

**{**

||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_references_lesson_plan** **atualizado.**

**4.16.** **patch** **closure**

**Atualiza** **o** **bloco** **de** **encerramento** **do** **plano**
**de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_closure_lesson_plan** **atualizado.**

**4.17.** **patch** **homework**

**Atualiza** **o** **bloco** **de** **lição** **de** **casa** **do**
**plano** **de** **aula.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorno** **idêntico** **ao** **patch** **objetives,** **mas** **com**
**o** **objeto** **id_homework_lesson_plan** **atualizado.**

**5.** **gemini**

**Endpoints** **para** **criação** **de** **conteúdo** **usando** **IA**
**(Gemini).**

**5.1.** **create** **lesson**

**Cria** **um** **plano** **de** **aula** **usando** **a** **IA.**

||
||
||

||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||
||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **completo** **do** **Plano** **de**
**Aula** **gerado** **pela** **IA,** **com** **a** **mesma**
**estrutura** **aninhada** **de** **sub-objetos** **do** **endpoint**
**add** **lesson_plan** **(exceto** **pelos** **IDs** **e**
**timestamps,** **que** **seriam** **adicionados** **no** **próximo**
**passo,** **que** **é** **salvar** **o** **plano** **no** **sistema).**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**5.2.** **create** **exercises**

**Cria** **exercícios** **usando** **a** **IA.**

||
||
||
||

**Body** **Exemplo:**

||
||
||
||
||
||
||
||
||
||
||
||
||
||
||
||

**Response** **(Status** **200** **-** **OK):**

**Retorna** **o** **objeto** **completo** **do** **Exercício**
**gerado** **pela** **IA,** **com** **a** **mesma** **estrutura**
**aninhada** **de** **sub-objetos** **do** **endpoint** **add**
**exercise** **(exceto** **pelos** **IDs** **e** **timestamps,** **que**
**seriam** **adicionados** **ao** **salvar** **no** **sistema).**

||
||
||
||
||
||
||
||
||
||

||
||
||
||
||
||
||
||
||
||
||
||
||
