{numPizzas > 0 ? (
        <>
          {/* Above is a react fragment */}
          <p>
            Pizza Hut has had several slogans and taglines throughout its
            history. (the early 1980s)“You’re the boss” (the mid-1980s)
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu . Appreciate your patience</p>
      )}