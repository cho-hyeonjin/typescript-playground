{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /** Class Lv Property --- 인스턴스마다 만들어지지 않음 ∴ 메모리 낭비 방지 */
    static BEANS_GRAMM_PER_SHOT: number = 7;
    /** Instance Lv (member) Property */
    coffeeBeansGR: number = 0;

    constructor(coffeeBeansGR: number) {
      this.coffeeBeansGR = coffeeBeansGR;
    }

    /** Class Lv Method */
    static makeCoffeeMaker(coffeeBeansGR: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGR);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGR < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("😰 Not enough coffee beans! 🫘");
      }
      this.coffeeBeansGR -= CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMakerA = new CoffeeMaker(100);
  const coffeeMakerB = new CoffeeMaker(200);
  console.log(coffeeMakerA);
  console.log(coffeeMakerB);

  const coffeeMakerC = CoffeeMaker.makeCoffeeMaker(300);
  console.log(coffeeMakerC);
}
