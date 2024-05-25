<div class="navigation-list">
  <ul>
    <li>
      <a href="/favorites">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Favorites</p>
      </a>
    </li>
    <li>
      <a href="/rice-meals">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Rice Meals</p>
      </a>
    </li>
    <li>
      <a href="/kiddie-meals">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Kiddie Meals</p>
      </a>
    </li>
    <li>
      <a href="/fries">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Fries</p>
      </a>
    </li>
    <li>
      <a href="/burgers">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Burgers</p>
      </a>
    </li>
    <li>
      <a href="/drinks">
        <i class="fa-solid fa-bowl-food"></i>
        <p>Drinks</p>
      </a>
    </li>
  </ul>
</div>

<style lang="scss">
  div.navigation-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 96px;
    max-width: 96px;

    // overflow-y: auto;
    // overflow-x: hidden;

    > ul {
      list-style: none;
      padding: 0px;
      margin: 0px;

      > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px;

          color: inherit;
          text-decoration: none;
          text-align: center;

          > i {
            font-size: 3em;
          }
        }
      }
    }
  }
</style>
