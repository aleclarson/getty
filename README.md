
# getty v1.0.0

```js
import {getty, setty, proto} from 'getty'

// Constructor
function Pokemon() {}

// Prototype
proto(Pokemon, {
  attack() {},
  defend() {},
})

// Property getters
getty(Pokemon, {
  health() {},
  mana() {},
})

// Property setters
setty(Pokemon, {
  health() {},
  mana() {},
})
```

You can use `getty` and `setty` on any object.

```js
let o = {}

getty(o, {
  foo: () => 1
})
setty(o, {
  foo(x) {this._foo = x}
})

o.foo     // => 1
o.foo = 2
o._foo    // => 2
```
