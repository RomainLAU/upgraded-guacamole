import median from '../src/median'

describe('median', () => {
    it('should return the median of the array', () => {
        expect(median([1, 2, 3])).toBe(2)
    })

    it('should return the median of the array', () => {
        expect(median([1, 2, 3, 4])).toBe(2.5)
    })

    it('should throw an error if the array is empty', () => {
        expect(() => median([])).toThrow('Array must not be empty')
    })

    it('should throw an error if the array contains non-numeric values', () => {
        expect(() => median([1, 2, 'three'])).toThrow('Array must only contain numbers')
    })

    it('should throw an error if the input is not an array', () => {
        expect(() => median('not an array')).toThrow('Input must be an array')
    })
})
