import average from '../src/average.js'

describe('average', () => {
    it('should return the average of the array', () => {
        expect(average([1, 2, 3])).toBe(2)
    })

    it('should throw an error if the array is empty', () => {
        expect(() => average([])).toThrow('Array must not be empty')
    })

    it('should throw an error if the array contains non-numeric values', () => {
        expect(() => average([1, 2, 'three'])).toThrow('Array must only contain numbers')
    })

    it('should throw an error if the input is not an array', () => {
        expect(() => average('not an array')).toThrow('Input must be an array')
    })
})
