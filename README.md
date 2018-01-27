
# getty v0.0.1

```js
const {getty, setty, petty} = require('getty')

function Pokemon() {}

// Prototype.
petty(Pokemon, {
  attack() {},
  defend() {},
})

// Property getters.
getty(Pokemon, {
  health() {},
  mana() {},
})

// Property setters.
setty(Pokemon, {
  health() {},
  mana() {},
})
```
