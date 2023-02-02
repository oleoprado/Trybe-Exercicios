const convertMass = (value: number, fromUnit: string, toUnit: string): string => {
  const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

  const converted = value * Math.pow(10, units.indexOf(toUnit) - units.indexOf(fromUnit));

  return `${value}${fromUnit} equivale a: ${converted} ${toUnit}`;
}