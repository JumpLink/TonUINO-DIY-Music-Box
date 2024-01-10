export async function sortAsyncIterable<T>(iterable: AsyncIterableIterator<T>, compareFn?: (a: T, b: T) => number): Promise<T[]> {
    const array: T[] = [];
    for await (const item of iterable) {
        array.push(item);
    }
    return array.sort(compareFn);
}