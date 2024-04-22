{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeansGR: number = 0;

    constructor(coffeeBeansGR: number) {
      this.coffeeBeansGR = coffeeBeansGR;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGR < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("😰 Not enough coffee beans! 🫘");
      }
      this.coffeeBeansGR -= this.BEANS_GRAMM_PER_SHOT * shots;
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
}
