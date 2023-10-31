<img
  src="https://github-production-user-asset-6210df.s3.amazonaws.com/30063455/279376780-28358cd9-710e-419b-ab7a-1e83c45cf94e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231031T123949Z&X-Amz-Expires=300&X-Amz-Signature=74a0938dd5e1a7c98b7a9adac326370a88573d80b8a27b50dfc3bd056215da7c&X-Amz-SignedHeaders=host&actor_id=30063455&key_id=0&repo_id=711589056">
<h1>Front-end Exercise | Ayrton Souza & e-core</h1>
<p>This repository stores the project used in the technical challenge stage of the selection process for the front-end
  developer position.</p>

<h2>About the project</h2>
<p>The project consists of a simple application that loads a list of teams, and each team has its own users that we can
  see in detail by clicking on the team name.</p>

<h1>How to run</h1>
<p>We splitted the running instructions in two, the first one is our personal recommendation to run in local
  environment, that way we can share a common environment and avoid exceptions that could be caused by different
  environments. The second one is the basic configuration, assuming that you already
  have a good relationship with the default settings of your machine.</p>
<h2>Recommended settings</h2>
<p>It is recommended to use <a href="">Docker</a> to run this project in a local environment. There is no <strong>"it's
    working on my machine"</strong> in this team.</p>
<h3>Requirements</h3>
<ul>
  <li><a href="https://code.visualstudio.com/download">Visual Studio Code</a></li>
  <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">Dev
      Containers Extension</a></li>
  <li><a href="https://docs.docker.com/get-docker/">Docker</a></li>
  <li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li>
</ul>
<h3>Steps</h3>
<ol>
  <li>Clone this repository</li>
  <p>Open your terminal and clone this repository by running the following command:</p>

  ```bash
  # Using HTTPS
  git clone https://github.com/ayrtonbsouza/souza_fe_ayrton_exercise.git

  # Using SSH
  git clone git@github.com:ayrtonbsouza/souza_fe_ayrton_exercise.git
  ```
  <li>Open the project folder on your terminal</li>
  <p>Use the <code>cd</code> command to open the folder in terminal</p>

  ```bash
  cd souza_fe_ayrton_exercise
  ```

  <li>Open the project folder on Visual Studio Code</li>
  <p>You'll need to enable the option <code>Shell Command: Install 'code' command in PATH</code> in your Visual Studio Code command palette, then you can type the following command on your terminal:</p>

  ```bash
  code .
  ```
  <li>Open project in container</li>
  <p>After opening the project in Visual Studio Code, you'll see a notification asking you to open the project in a
    container, click on the notification and wait for the container to be built.</p>
  <p>If Visual Studio Code doesn't show the notification, you can open the command palette by pressing <code>Ctrl +
      Shift + P</code> (<code>Cmd + Shift + P</code> in Mac) and type
    <code>Remote-Containers: Reopen in Container</code>.
  </p>

  <li>Install dependencies</li>
  <p>You'll need to install dependencies before running the project, you can do that by running the following command
    on your terminal:</p>

  ```bash
  yarn
  ```

  <p>Wait until the container is built, it may take a while. Then you can go to the <strong>commands</strong> section of
    this documentation.</p>
</ol>

<h2>Basic settings</h2>
<p>These are the basic settings to run the project.</p>

<h3>Requirements</h3>
<ul>
  <li><a href="https://nodejs.org/en/download/">Node.js</a></li>
  <li><a href="https://classic.yarnpkg.com/en/docs/install/#debian-stable">Yarn</a></li>
</ul>

<h3>Steps</h3>

<ol>
  <li>Clone this repository</li>
  <p>Open your terminal and clone this repository by running the following command:</p>

  ```bash
  # Using HTTPS
  git clone https://github.com/ayrtonbsouza/souza_fe_ayrton_exercise.git

  # Using SSH
  git clone git@github.com:ayrtonbsouza/souza_fe_ayrton_exercise.git
  ```
  <li>Open the project folder on your terminal</li>
  <p>Use the <code>cd</code> command to open the folder in terminal</p>

  ```bash
  cd souza_fe_ayrton_exercise
  ```

  <li>Open the project folder on Visual Studio Code</li>
  <p>You'll need to enable the option <code>Shell Command: Install 'code' command in PATH</code> in your Visual Studio
    Code, then you can type the following command on your terminal:</p>

  ```bash
  code .
  ```
  <li>Install dependencies</li>
  <p>You'll need to install dependencies before running the project, you can do that by running the following command
    on your terminal:</p>

  ```bash
  yarn
  ```
</ol>

<h2>Commands</h2>

<h3>Run the project</h3>
<p>After opening the project in Visual Studio Code, you can run the project by running the following command on your
  terminal:</p>

```bash
yarn start
```

<h3>Run tests</h3>
<p>You can run the tests by running the following command on your terminal:</p>

```bash
yarn test
```

<h3>Run linter and prettier checks</h3>
<p>You have a few options to run prettier and linter checks and fixes:</p>

```bash
# Run prettier check
yarn prettier:check

# Run linter check
yarn lint:check

# Run linter fix
yarn lint:fix
```
<br />

____

<br />
<br />
<footer>
  <p>Made with ❤️ by <a href="https://github.com/ayrtonbsouza">Ayrton Souza</a></p>
</footer>
