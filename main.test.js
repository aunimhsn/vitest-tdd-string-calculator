import { describe, expect, it } from 'vitest'
import { add } from './main'

describe('test of the function add()', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0)
    })
    
    it('returns 1 for "1"', () => {
        expect(add('1')).toBe(1)
    })

    it('returns 3 for "1,2"', () => {
        expect(add('1,2')).toBe(3)
    })

    it('returns 10 for "3,7"', () => {
        expect(add('3,7')).toBe(10)
    })

    it('returns 17 for "3,7,7"', () => {
        expect(add('3,7,7')).toBe(17)
    })

    it('returns 5 for "2,2,0,1"', () => {
        expect(add('2,2,0,1')).toBe(5)
    })

    it('returns 6 for "1\n2,3"', () => {
        expect(add('1\n2,3')).toBe(6)
    })

    it('returns 3 for "//;\n1;2"', () => {
        expect(add('//;\n1;2')).toBe(3)
    })

    it('returns 3 for "//;\n1;-2"', () => {
        expect(() => add('//;\n1;-2')).toThrowError('Negatives not allowed. [-2]')
    })

    it('returns 3 for "//;\n1;-2;-3"', () => {
        expect(() => add('//;\n1;-2;-3')).toThrowError('Negatives not allowed. [-2,-3]')
    })

    it('returns 3 for "//;\n1;2;1002"', () => {
        expect(add('//;\n1;2;1002')).toBe(3)
    })
    
    it('returns 3 for "//;\n1;2;1002,5000"', () => {
        expect(add('//;\n1;2;1002,5000')).toBe(3)
    })

    it('returns 6 for "//[***]\n1***2***3"', () => {
        expect(add('//[***]\n1***2***3')).toBe(6)
    })

    it('returns 6 for "//[**][%%]\n1**2%%33"', () => {
        expect(add('//[**][%%]\n1**2%%3')).toBe(6)
    })

})
