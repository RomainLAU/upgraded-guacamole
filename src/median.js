/**
 * Calculates the median of an array of numbers
 * @param {number[]} array - The input array
 * @returns {number} - The median of the array
 */
export default function median(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array')
    }
    if (array.length === 0) {
        throw new Error('Array must not be empty')
    }
    if (array.some((value) => typeof value !== 'number')) {
        throw new Error('Array must only contain numbers')
    }
    array.sort((a, b) => a - b)
    const middle = Math.floor(array.length / 2)
    return array.length % 2 === 0 ? (array[middle - 1] + array[middle]) / 2 : array[middle]
}
