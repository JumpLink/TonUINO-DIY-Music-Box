/**
 * Transform number to `digits` digits
 * @param num 
 * @param digits 
 * @returns 
 */
export function pad(num: number, digits: number): string {
    return num.toString().padStart(digits, "0");
}

/**
 * Method to get a range of numbers from `start` to `end`
 * @param start 
 * @param end 
 * @returns 
 */
export function range(start = 1, end = 99): number[] {
    return Array.from({ length: (end - start) + 1 }, (_, i) => start + i);
}