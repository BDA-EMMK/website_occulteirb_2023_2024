
<footer>
  <h3>Ceci est un footer de qualité !</h3>
  <!-- <img src="/img/portrait_2d.png" alt="Description de l'image" class="bottom-image"> -->
</footer>

<style lang="scss">
@import "$lib/theme.scss";

footer {
  width: 100%;
  height: 1svh;

  h3 {
    margin: 0;
    padding: 0;

    background-color: inherit;
  }

  background-color: $background;
  color: $foreground;

  position: relative;

  img {
    z-index: -1;
    position: relative;
    width: 100%;
  }
}
</style>

