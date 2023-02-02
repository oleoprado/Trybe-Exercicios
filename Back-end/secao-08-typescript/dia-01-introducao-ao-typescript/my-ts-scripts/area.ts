const convertArea = (value: number, fromUnit: string, toUnit: string): string => {
  const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

  const converted = value * Math.pow(10, units.indexOf(toUnit) - units.indexOf(fromUnit));

  return `${value}${fromUnit} equivale a: ${converted}${toUnit}`;
}