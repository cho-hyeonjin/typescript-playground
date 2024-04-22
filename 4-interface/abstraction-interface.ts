{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMachine {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMachine {
    makeCoffee(shots: number): CoffeeCup;
    setPortaFilter(filter: string): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMachine, ICommercialCoffeeMachine {
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
          "🤨hey, value for 'beansGR' should be greater than '0'."
        );
      }
      this.coffeeBeansGR += beansGR;
    }

    setPortaFilter(filter: string): void {
      console.log("🔘", `Portafilter: ${filter}`);
    }

    clean(): void {
      console.log("🧼", "Cleaning the coffee maker✨");
    }

    private grindBeans(shots: number) {
      console.log("🫘 ", `Grinding beans for ${shots} cup`);
      if (this.coffeeBeansGR < CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots) {
        throw new Error("🫘Not enough coffee beans!😰");
      }
      this.coffeeBeansGR -= CoffeeMaker.BEANS_GRAMM_PER_SHOT * shots;
    }

    private preheat(): void {
      console.log("🔥", "Heating up the coffee maker");
    }

    private extract(shots: number): CoffeeCup {
      console.log("🚰", `Pulling ${shots} shots`);
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

  class AmateurUser {
    constructor(private machine: ICoffeeMachine) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log("===== ☕️", coffee, "→ Amateur's coffee =====");
    }
  }

  class ProBarista {
    constructor(private machine: ICommercialCoffeeMachine) {}
    makeCoffee() {
      this.machine.setPortaFilter("Bottomless");
      const coffee = this.machine.makeCoffee(2);
      console.log("===== ☕️", coffee, "→ Pro Barista's coffee =====");
      this.machine.clean();
    }
  }

  // const CoffeeMakerA: CoffeeMaker = CoffeeMaker.makeCoffeeMaker(100);
  // CoffeeMakerA.fillHopper(100);
  // CoffeeMakerA.makeCoffee(2);

  // // prettier-ignore
  // const CoffeeMakerB: ICommercialCoffeeMachine = CoffeeMaker.makeCoffeeMaker(200);
  // // CoffeeMakerB.fillHopper(200); // CoffeeMakerB에는 fillHopper 메서드가 없음
  // CoffeeMakerB.makeCoffee(2);
  // CoffeeMakerB.clean();

  const maker: CoffeeMaker = CoffeeMaker.makeCoffeeMaker(100);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}
