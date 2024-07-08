/** 
 * Calculates the average of an array of numbers
 * @param {number[]} array - The input array
 * @returns {number} - The average of the array
 
 */
export default function average(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array')
    }
    if (array.length === 0) {
        throw new Error('Array must not be empty')
    }
    if (array.some((value) => typeof value !== 'number')) {
        throw new Error('Array must only contain numbers')
    }
    return array.reduce((a, b) => a + b) / array.length
}
