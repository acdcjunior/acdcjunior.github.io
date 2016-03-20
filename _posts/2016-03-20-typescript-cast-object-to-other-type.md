Typescript: cast an object to other type. How?

Use `<>`:

```typescript

var objectA: TypeA;
var objectX: TypeX;

objectA = <TypeA> objectX;

```
