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
|**Decorator**|-|


|`@Component`| is an Angular Decorator similar to Annotations in Java(selector,templateUrl,styleUrls)|






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
|`ng generate component <required-component-name>`| Create new comonent for the project|


**app.component.html**


1. index.html is the main file  
2. index.html content is --> <app-root></app-root>
3. Where the <app-root> tag is defined?
   1. app-root is some where defined in a component (probably app.component.ts selector:)

**app.module.ts**

1. The Main Component is here `bootstrap: [AppComponent]`


**Basic Development process**
1. Create a new project
2. Update Main template page
3. Generate new component
4. Add New component selector to app template page
5. Generate a SalesPerson class
6. In SalesPersonListComponent, create same data
7. In sales-person-list template file, build HTML table by looping over data
