{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeansGR: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeansGR < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("😰 Not enough coffee beans! 🫘");
    }
    coffeeBeansGR -= BEANS_GRAMM_PER_SHOT * shots;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  coffeeBeansGR += BEANS_GRAMM_PER_SHOT * 2;
  console.log(coffeeBeansGR);
  const coffee = makeCoffee(3);
  console.log(coffee);
}
