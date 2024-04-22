{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeansGR: number = 0;

    private constructor(coffeeBeansGR: number) {
      this.coffeeBeansGR = coffeeBeansGR;
    }

    static makeCoffeeMaker(coffeeBeansGR: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGR);
    }

    fillCoffeeMaker(beansGR: number) {
      if (beansGR < 0) {
        throw new Error(
          "🤨 hey, value for 'beansGR' should be greater than '0'."
        );
      }
      this.coffeeBeansGR += beansGR;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeansGR < CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots) {
        throw new Error("😰 Not enough coffee beans! 🫘N");
      }
      this.coffeeBeansGR -= CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots;
    }

    private preheat(): void {
      console.log("♨️heating up the coffee maker♨️");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`☕️ Pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const coffeeMakerA = CoffeeMaker.makeCoffeeMaker(100);
  console.log(coffeeMakerA);
}
