# Install
````
npm i babel-plugin-transform-empty-statement
````
# Use
````js
{
  "plugins": [ "transform-empty-statement" ]
}
````
## in
````js
// next line is EmptyStatement
;
foo('bar');
````

## out
````js
// next line is EmptyStatement
( function (a) { return a; } )();
foo('bar');
````
