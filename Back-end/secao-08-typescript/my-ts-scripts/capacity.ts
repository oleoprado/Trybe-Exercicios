const capacity = (value: number, fromUnit: string, toUnit: string): string => {
  const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

  const converted = value * Math.pow(10, units.indexOf(toUnit) - units.indexOf(fromUnit));

  return `${value}${fromUnit} equivale a: ${converted}${toUnit}`;
}