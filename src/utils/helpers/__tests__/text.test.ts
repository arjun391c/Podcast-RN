import {truncate} from '../text'

describe('Text helpers', () => {
    describe('truncate', () => {
        it('Should truncate longer text than 7', () => {
            const expected = 'hello w...'
            expect(truncate('hello world', 7, '...')).toBe(expected)
        })
    })
})
