# Reproduction of error for GraphQL Codegen and graphql-import

When using graphql-codegen-typescript-mongodb you are required to with with directive. 
This works as long as you don't use the import feature. That's a pity because importing schema files make
your code so much tidier and scalable.

## How to reproduce:
First install dependencies
```
yarn
```
#### First run the success path, which is using schema-no-import.graphql
```
yarn codegen-no-import
```

This runs graphql-codegen with the typescript-mongodb plugin successfully.


#### Then run the failing case, which is using the import feature
```
yarn codegen-with-import
```
