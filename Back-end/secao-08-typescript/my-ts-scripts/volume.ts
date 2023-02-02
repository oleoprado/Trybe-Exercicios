const convertVolume = (value: number, fromUnit: string, toUnit: string): string => {
  const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

  const converted = value * Math.pow(10, units.indexOf(toUnit) - units.indexOf(fromUnit));

  return `${value}${fromUnit} equivale a: ${converted}${toUnit}`;
}