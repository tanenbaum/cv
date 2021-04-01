{{#with personal}}

# CV: {{name}}

Joe is a professional full-stack software engineer and DevOps enthusiast with a passion for clean code and software design. He is proactive in identifying new trends and strategies to inform implementation, integration and delivery.

<table id="personal">
<tr><td>email - <a href="mailto:{{email}}">{{email}}</a></td><td>location - <a href="https://maps.google.co.uk/?q={{encode location}}">{{location}}</a></td></tr>
<tr><td>phone - <a href="tel:{{phone}}">{{phone}}</a></td><td>url - <a href="{{url}}">{{url}}</a></td></tr>
</table>

{{/with}}

## Technical Skills

### Software Design

Planning and design of a range of systems, from DevOps tools to multi-tenant eHealth products.

- Using agile methods to iterate requirements with continuous improvement: {{#keys}}Kanban, Scrum{{/keys}}.
- Applying well-established patterns for scalable and resilient applications: {{#keys}}12-Factor, Cloud-Native{{/keys}}.
- Architect of various services including robust web APIs to facilitate simple third-party integration: {{#keys}}REST, RPC, OpenID, OpenAPI{{/keys}}.
- Designing relational schemas and NoSQL models for large and complex data sets: {{#keys}}PostgreSQL, MariaDB, MongoDB, InfluxDB{{/keys}}.
- Messaging and caching strategies for scalable loosely coupled services: {{#keys}}Kafka, ZeroMQ, Redis{{/keys}}.

### Development
#### Languages

A proficient developer in a variety of programming languages.

{{#with languages}}
  - Primary: {{#keys}}{{primary}}{{/keys}}.
  - Familiar: {{#keys}}{{familiar}}{{/keys}}.
{{/with}}

#### Platforms and Tooling

- Comfortable using a variety of operating systems and typical development environments: {{#keys}}Linux, Windows, macOS{{/keys}}.
- Implementing cross-platform back-end services and workers: {{#keys}}Golang, Node.js, Express, ASP.NET Core, gRPC{{/keys}}.
- Good working knowledge of web technologies, for both traditional sites and single page apps: {{#keys}}HTML5, CSS3, React, Vue.js{{/keys}}.
- Published and maintained libraries via package management systems: {{#keys}}NuGet, npm{{/keys}}.
- Automated testing of applications, from core unit tests, regression and end-to-end tests: {{#keys}}Selenium, WebdriverIO{{/keys}}.
- Never without source control: {{#keys}}Git, Mercurial, SVN{{/keys}}.

### Delivery

Actively engaged in delivery, maintenance and support, chiefly using the Kubernetes platform.

- Leveraged cloud hosting for SaaS and hybrid cloud deployments: {{#keys}}Google Cloud, Microsoft Azure{{/keys}}.
- Versioned release artifact creation to allow rapid deployment and feedback: {{#keys}}Container Images, Helm Packages{{/keys}}.
- Instrumentation of apps and management of monitoring/logging infrastructure: {{#keys}}Prometheus, Grafana, Fluentd, Elastic Stack{{/keys}}.
- Configured and maintained continuous integration tools to automate builds, static analysis, testing and releases: {{#keys}}GitLab CI, Jenkins, TeamCity{{/keys}}.

## Employment

{{#each employment}}

### {{title}} | {{where}} <span class="when"> {{when}} </span>

{{list detail}}

{{/each}}

## Education

{{#each education}}

### {{where}} <span class="when"> {{when}} </span>
#### {{type}}: {{grade}}
{{list detail}}

{{/each}}

## Achievements

{{#each achievements}}

### {{what}} | {{where}} <span class="when"> {{when}} </span>

{{detail}}

{{/each}}

## Personal

DoB: 17th August 1988.

Joe is married to his long term partner of 15+ years. They have a young daughter and two cats.

His interests include history, particularly in podcast form; travel, to various locales but especially European cities (for the history and architecture); 
bike rides and walks, around the countryside and coast; and reading science fiction, notably that of Iain M. Banks and Dan Simmons.

Time permitting, he also enjoys video games (short ones, that can be finished) and watching films.
