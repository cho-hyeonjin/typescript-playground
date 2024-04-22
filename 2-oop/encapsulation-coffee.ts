{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // pubilc (default)
  // private --- 클래스 외부에서 접근 불가
  // protected --- 해당 클래스를 상속하여 생성된 클래스 내부에서는 접근 가능, 외부에서는 여전히 접근 불가
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // 외부에서 볼 필요 없는 or 봐서는 안되는 정보는 private으로 설정
    protected coffeeBeansGR: number = 0;

    private constructor(coffeeBeansGR: number) {
      this.coffeeBeansGR = coffeeBeansGR;
    }

    static makeCoffeeMaker(coffeeBeansGR: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGR);
    }

    fillCoffeeMaker(beansGR: number) {
      if (beansGR < 0) {
        throw new Error(
          "🙂‍↔️ hey, value for 'beansGR' should be greater than '0'."
        );
      }
      this.coffeeBeansGR += beansGR;
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

  const coffeeMakerA = CoffeeMaker.makeCoffeeMaker(100);
  // CoffeeMakerA.coffeeBeansGR = 100;
  // CoffeeMakerA.coffeeBeansGR = -100; // 😨 콩을 -100개로 만드는건 불가능해..! → private으로 설정!
  coffeeMakerA.fillCoffeeMaker(100);
  console.log(coffeeMakerA);
}
