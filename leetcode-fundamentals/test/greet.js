import { test } from 'node:test'
import assert from 'assert'
import greet from '../src/greet'

test('Greet Farrel', _ => {
    assert.strictEqual(greet("farrel"), "hey farrel")
})

test('Greet Jason', _ => {
    assert.strictEqual(greet("jason"), "hey jason")
})

test('Greet', _ => {
    assert.strictEqual(greet("this is the fundamentals of leetcode"), "hey this is the fundamentals of leetcode")
})
