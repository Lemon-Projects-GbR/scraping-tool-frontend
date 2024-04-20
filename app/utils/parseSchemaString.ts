function removeTrailingComma(str: string): string {
  return str.replace(/,\s*$/, "");
}

export function parseSchemaString(
  str: string
): Record<string, string | object> {
  let lines = str.split("\n");
  lines = lines.filter((line) => line !== "");

  const stack: number[] = [];

  let jsonFormattedString: string = "";

  lines.forEach((line, index) => {
    const spaces = line.search(/\S/);
    const currentLevel = spaces / 2;

    if (line.trim().endsWith(":")) {
      jsonFormattedString +=
        '"' + line.trim().slice(0, line.length - 1) + '":' + " {";
      stack.push(currentLevel);
    } else if (currentLevel === stack[stack.length - 1]) {
      jsonFormattedString =
        removeTrailingComma(jsonFormattedString) +
        "}," +
        '"' +
        line.trim().split(": ")[0] +
        '": "' +
        line.trim().split(": ")[1] +
        '",';
      stack.pop();
    } else {
      jsonFormattedString +=
        '"' +
        line.trim().split(": ")[0] +
        '": "' +
        line.trim().split(": ")[1] +
        '",';

      if (lines[index + 1] == undefined) {
        jsonFormattedString = removeTrailingComma(jsonFormattedString) + "},";
      }
    }
  });
  // Close all open objects
  while (stack.length > 1) {
    jsonFormattedString = removeTrailingComma(jsonFormattedString) + "}";
    stack.pop();
  }

  console.log(`{${removeTrailingComma(jsonFormattedString)}}`);

  return JSON.parse(`{${removeTrailingComma(jsonFormattedString)}}`);
}
