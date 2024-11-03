function removeTrailingComma(str: string): string {
  return str.replace(/,\s*$/, '');
}

export function parseSchemaString(
  str: string,
): Record<string, string | object> {
  let lines = str.split('\n');
  lines = lines.filter(line => line !== '');

  const stack: number[] = [];

  let jsonFormattedString: string = '';

  lines.forEach((line, index) => {
    const spaces = line.search(/\S/);
    const currentLevel = spaces / 2;

    //Case 1: If the line ends with a colon, it is an object. Open the object
    if (line.trim().endsWith(':')) {
      jsonFormattedString +=
        '"' + line.trim().slice(0, line.length - 1) + '":' + ' {';
      stack.push(currentLevel);
      //Case 2: If it is the last key-value pair in the object. Add the key-value pair and close the object
    } else if (currentLevel === stack[stack.length - 1]) {
      jsonFormattedString =
        removeTrailingComma(jsonFormattedString) +
        '},' +
        '"' +
        line.trim().split(': ')[0] +
        '": "' +
        line
          .trim()
          .split(': ')[1]
          .replace(/^['"`]|['"`]$/g, '') +
        '",';
      stack.pop();
      //Case 3: If it is a key-value pair in the object. Add the key-value pair
    } else {
      jsonFormattedString +=
        '"' +
        line.trim().split(': ')[0] +
        '": "' +
        line
          .trim()
          .split(': ')[1]
          .replace(/^['"`]|['"`]$/g, '') +
        '",';

      console.log(jsonFormattedString);
    }
  });
  // Close all open objects
  while (stack.length > 0) {
    jsonFormattedString = removeTrailingComma(jsonFormattedString) + '}';
    stack.pop();
  }

  return JSON.parse(`{${removeTrailingComma(jsonFormattedString)}}`);
}
