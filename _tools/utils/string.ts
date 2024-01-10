import { extname } from "https://deno.land/std/path/mod.ts";

export function replaceUmlauts(str: string): string {
  const umlautMap: { [key: string]: string } = {
      'ü': 'ue',
      'Ü': 'Ue',
      'ä': 'ae',
      'Ä': 'Ae',
      'ö': 'oe',
      'Ö': 'Oe',
      'ß': 'ss'
  }
  return str.split('').map((char) => umlautMap[char] || char).join('');
}

/**
 * Slugify a string
 * @param str 
 * @param maxLength 
 * @returns 
 */
export function slugify(str: string, maxLength = 0): string {
    str = str.toLowerCase()

    str = replaceUmlauts(str);
    
    str = str.replace(/\s+/g, '-');
    
    str = str.replace(/[^a-z0-9-]/g, '');
  
    // Remove double dashes
    str = str.replace(/--+/g, '-');
  
    if(maxLength > 0) str = str.slice(0, maxLength);
  
    // Remove trailing -
    if (str.endsWith('-')) {
      str = str.slice(0, -1);
    }
  
    return str;
}

export function renameToNumbersOnly(filename: string, numbersLength = 0): string {
    const ext = extname(filename);
    filename = numbersLength ? filename.slice(0, numbersLength) : filename;
  
    if(ext) {
      filename = filename + ext;
    }
  
    return filename;
  }