{{#with personal}}

# CV: {{name}}

Joe is a full-stack software engineer with a passion for elegant code and software design. He is proactive in identifying new trends and strategies to inform implementation, continuous integration and delivery.

<table>
<tr><td width="33%">email - {{email}}</td><td width="33%">phone - {{phone}}</td><td width="33%">GitHub - {{github}}</td></tr>
</table>

{{/with}}

## Technical Skills
---

### Software Design

Routine involvement in the planning and design of a diverse range of systems, including multi-tenant eHealth products.

  - Using well-established patterns for code modularity and reuse, following DRY/SOLID principles, ensuring testability through abstraction.
  - Architect of many robust web APIs to facilitate simple system integration, providing client SDKs through Swagger.io.
  - Designed polyglot persistence and caching strategies for large and complex data sets.
  - Leveraged Microsoft Azure as a hybrid cloud solution for hosting application components, such as queues, workers, caching layers and web services.

### Software Implementation

#### Languages

A proficient developer in a variety of programming languages.

{{#with languages}}
  - Primary: {{primary}}
  - Secondary: {{secondary}}
  - Familiar: {{familiar}}
{{/with}}

#### Platforms and Libraries

  - Principal use of the .NET Framework and class libraries: LINQ, Entity Framework, Task Parallel, Task-Based Async Models.
  - Implemented and administered web applications through IIS and Apache: ASP.NET MVC, Web API, SignalR, Node.js with Express, socket.io.
  - Good working knowledge of web technologies: HTML4/5, CSS2/3, client-side JavaScript libraries such as Angular, Vue.js, lodash.
  - Use of various persistence and messaging systems: SqlServer, MongoDB, Redis, RabbitMQ.
 
#### Tooling

  - Comfortable using a variety of operating systems and typical development environments.
  - Provisioning of virtual machines and containers: Vagrant, docker, lxc, Powershell DSC.
  - Configured and maintained continuous integration tools to automate builds, perform static analysis and linting, automate testing and deployment: Team City, VSTS, Jenkins, Travis CI, Octopus Deploy.
  - Created and maintained libraries through package management systems: NuGet, npm, bower.
  - Automated testing of applications, from core unit tests and regression testing to full end-to-end integration tests: N/XUnit, Mocha, Chai, Selenium WebDriver, automatic/generative specification testing with FsCheck.
  - Never without source control: Git, Mercurial, SVN, TFVC.

## Employment
---

{{#each employment}}

### {{where}}, {{when}}
#### {{title}}
{{list _meta}}

{{/each}}

## Education
---

{{#each education}}

### {{where}}, {{when}}
#### {{type}}: {{grade}}
{{list _meta}}

{{/each}}

## Achievements
---

{{#each achievements}}

### {{what}}
#### {{where}}, {{when}}
{{_meta}}

{{/each}}

## Personal
---

Born 17/08/1988. Married. Two cats.

Interests include programming, game design, travel, film and reading science fiction.