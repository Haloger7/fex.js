<div align="center">
<br />
<p>
    <a href="https://fex.js.org"><img src="https://cdn.discordapp.com/attachments/800435248751181893/807313506352234536/fexjs.png" width="546" alt="fex.js" /></a>
</p>
<br />
<p>
<div align="center">
<a href="https://discord.gg/6gcCWRnghX"><img src="https://img.shields.io/discord/714911198306369566?color=green&logo=FexHub" alt="Discord server" /></a>
</div>
</p>
</div>

# Menu

- [About](#About)
- [Installation](#Installation)
    - [Requirements](#Requirements)
- [Example Usage](#Example-Usage)
- [Developers](#Developers)

## About

**Fex.js** is lightweight but comfortable [Node.js](https://nodejs.org/en/) module which has unique features!
- Fahrenheit to Celsius
- Celsius to Fahrenheit
- Air humidity

## Installation
```js
npm install fex.js
```

### Requirements
**Node.js > 14.0.0 is required.**

## Example Usage
```js
const fex = require('fex.js')
fex.CtoF(100) // 100 Celsius = 212 Fahrenheit
fex.FtoC(50) // 50 Fahrenheit = 10 Celsius
fex.Ah(10, 20) // 10 gr/m³ (absolute) and 20 g/m³ (maximum) = 50%
```

## Developers
**Nazuna.#2021** - Code, design.
