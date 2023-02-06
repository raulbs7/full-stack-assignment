export function readCsv(data: string, columnIndex: number) {
  let values: string[] = [];
  let csvToRowArray = data.split("\n");
  for (let index = 1; index < csvToRowArray.length - 1; index++) {
    let row = csvToRowArray[index].split(",");
    values.push(row[columnIndex]);
  }
  return values;
}
