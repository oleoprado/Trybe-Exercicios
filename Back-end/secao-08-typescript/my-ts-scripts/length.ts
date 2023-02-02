const convert = (value: number, base: string, convertion: string): string => {
  const units = [ 'km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm' ]

  const converted = value * Math.pow(10, units.indexOf(convertion) - units.indexOf(base))
  
  return `${value}${base} equivale a: ${converted}${convertion}`;
}

