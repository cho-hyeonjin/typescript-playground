{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMachine {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMaker implements ICoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeansGR: number = 0;

    private constructor(coffeeBeansGR: number) {
      this.coffeeBeansGR = coffeeBeansGR;
    }

    static makeCoffeeMaker(coffeeBeansGR: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGR);
    }

    fillHopper(beansGR: number) {
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

  const CoffeeMakerA: CoffeeMaker = CoffeeMaker.makeCoffeeMaker(100);
  CoffeeMakerA.fillHopper(100);
  CoffeeMakerA.makeCoffee(2);

  const CoffeeMakerB: ICoffeeMachine = CoffeeMaker.makeCoffeeMaker(200);
  CoffeeMakerB.fillHopper(200); // 여기엔 fillHopper 메서드가 없음
  CoffeeMakerB.makeCoffee(2);
}
