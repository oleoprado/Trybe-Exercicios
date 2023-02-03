import IPizza from './Pizza';
import { TCommon } from './PizzaFlavorsTypes';

export default interface IPizzaCommon extends IPizza {
  flavor: TCommon;
}
