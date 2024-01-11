# REST API with Node.js
This repository for training class REST API with Node.js by [LOXMAN](https://github.com/LOXMAN).

## Preparation
1. Fork this [repository](https://github.com/LOXMAN/rest-api-node-js.git) to [your repository](https://github.com).
2. Install NVM with this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide) each OS and use Node.js LTS version. 
```bash
nvm install --lts
nvm use --lets
```
3. Install [Postman](https://www.postman.com) application for call test API.
4. Les't go in class for REST API with Node.js

---
## Commit Policy
Please commit with this [link](https://dev.to/ishanmakadia/git-commit-message-convention-that-you-can-follow-1709) and [link](http://karma-runner.github.io/1.0/dev/git-commit-msg.html) this project usage commit templates is
```bash
<type>(<scope>): <subject>

<body>

<footer>
```

### Example
```bash
fix(middleware): ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use `range-parser` (Express dependency) to compute
range. It is more well-tested in the wild.

Fixes #2310
```

### Message subject (first line)
The first line cannot be longer than 70 characters, the second line is always blank and other lines should be wrapped at 80 characters. The type and scope should always be lowercase as shown below.
#### Allowed <type> values:
- ```build```: Build related changes (eg: npm related/ adding external dependencies)
- ```chore```: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
- ```feat```: A new feature
- ```fix```: A bug fix
- ```docs```: Documentation related changes
- ```refactor```: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/function name)
- ```perf```: A code that improves performance
- ```style```: A code that is related to styling
- ```test```: Adding new test or making changes to existing test
#### Example <scope> values: #
- ```init```
- ```runner```
- ```watcher```
- ```config```
- ```web-server```
- ```proxy```
- etc.

The <scope> can be empty (e.g. if the change is a global or difficult to assign to a single component), in which case the parentheses are omitted. In smaller projects such as Karma plugins, the <scope> is empty.
#### Message body
- uses the imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behaviour
#### Message footer
##### Referencing issues
Closed issues should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

```Closes #234```

or in the case of multiple issues:

```Closes #123, #245, #992```
##### Breaking changes
All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes.
```bash
BREAKING CHANGE:

`port-runner` command line option has changed to `runner-port`, so that it is
consistent with the configuration file syntax.

To migrate your project, change all the commands, where you use `--port-runner`
to `--runner-port`.
```