[![npm](https://img.shields.io/npm/v/limitor.svg)](http://npm.im/limitor)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/rametta/limitor/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# ⏱ Limitor

A [Future](https://github.com/fluture-js/Fluture) based rate limiter utility.

Use in combination with `parallel` to ensure rate limits are not exceeded.

## Install

`yarn add limitor`

## Usage

```js
import limitor from 'limitor'
import { of, parallel } from 'fluture'

/**
 * This example demonstrates how to group an array
 * of futures and ensure only the limit is executed
 * every second.
 * 
 * Below, the first 2 futures will resolve instantly
 * and 1 second later the next 2 will resolve.
 */

const futures = [of(1), of(1), of(2), of(2)]
const limit = 2 // max 2 per second

const limited = limitor (futures) (limit)

parallel(Infinity, limited).fork(console.error, console.log)
```