{{#with personal}}

# CV: {{name}}

Joe is a keen technologist and full-stack software engineer with a passion for elegant code and software design. He is proactively engaged in identifying new trends and strategies to inform implementation, continuous integration and delivery.

<table>
<tr><td width="33%">email - {{email}}</td><td width="33%">phone - {{phone}}</td><td width="33%">GitHub - {{github}}</td></tr>
</table>

{{/with}}

## Technical Skills
---

### Software Design

Routine involvement in the planning and design of a diverse range of systems, including multi-tenant eHealth products.

  - Used well-established patterns for code modularity and reuse, following DRY/SOLID principles, ensuring testability through abstraction.
  - Architected a number of robust web service APIs to facilitate simple system integration. Ensured auto-generated documentation of operations and authentication methods.
  - Designed polyglot persistence and caching strategies for large and complex data sets.
  - Leveraged Microsoft Azure as a hybrid cloud solution for hosting application components, such as queues, workers, caching layers and web servers.

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
  - Good working knowledge of web technologies: HTML4/5, CSS2/3, client-side JavaScript libraries such as jQuery, Knockout, Backbone.js, Underscore.
  - Use of various persistence and messaging systems: SqlServer, PostgreSQL, MongoDB, Redis, RabbitMQ.
 
#### Tooling

  - Comfortable within a variety of Windows and Linux systems and the usage of typical development environments: Visual Studio, Eclipse, Sublime.
  - Configured and maintained continuous integration tools to automate builds, perform static analysis and linting, automate testing and deployment: Team City, Jenkins, Travis CI.
  - Consumed and created libraries through package management systems: NuGet, npm, bower.
  - Automated testing of applications, from core unit tests and regression testing to full end-to-end integration tests: N/XUnit, Mocha, Chai, Selenium grid with Cabybara, automatic/generative specification testing with FsCheck.
  - Never without source control: Git, SVN.

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

DOB - ...

Interests - {{ interests }}