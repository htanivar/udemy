1. www.angular.io
2. www.madewithangular.com
3. www.luv2code.com/angular-install-guides
4. http://cli.angular.io
5. http://angular.io/guide/file-structure

|Term|Definition|
---|---|
| **Component** |  <p>     Main Player in an angular application, which have 2 parts: </br> 1) View for User Interface </br>2) Class that contains application logic / event handling for the view`</p>|
| **View Template** |The User interface for the component </br> Static HTML with dynamic elements|
| **Directive** |Adds custom behavior to HTML Elements </br> Used for looping, conditionals etc|
| **Service** |Helper class that provides desired functionality </br> Retrieving data from a server, performing a calculation, validation etc|
| **Module** |A collection of related componnents directives, services etc|



|Key Files|Purpose|
---|---|
|angular.json|Angular Workspace configuration & List of execution targets|
|e2e directory|End to End testing|
|node_modules directory|Local repo of the node modules|
|package.json|Project meta data list of node dependencies|
|src directory|Main Source code directory|
|src/app directory|App Components, templates ...etc|
|src/assets|Images web assets|
|src/environments|Profiles for environments ex: dev, test, prod..|
|index.html|Main launch page|
|polyfills.ts| Add Supports to different browser versions|
|test.ts|Unit test|
|tsconfig.json|TypeScript compiler configs|



|ng cli commands|Purpose|
---|---|
|`npm install -g @angular/cli`  | Install Angular CLI Globally|
|`ng version`| NG Version|
|`ng help`|NG help|
|`ng new <your-project-name>`| Create a new angular project|
|`ng serve --open`| deploy web application|
|`ng serve --port 5001 --host 0.0.0.0`| deploy web application on specifi port on remote server|


**app.component.html**
  




