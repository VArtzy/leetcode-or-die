import { test } from 'node:test'
import assert from 'assert'
import maxValue from '../src/max'

test('Decimal', _ => {
    assert.strictEqual(maxValue([4,7,2,8,10,9]), 10)
})

test('Float', _ => {
    assert.strictEqual(maxValue([10, 5, 40, 40.3]), 40.3)
})

test('Negative', _ => {
    assert.strictEqual(maxValue([-5, -2, -1, -11]), -1)
})
