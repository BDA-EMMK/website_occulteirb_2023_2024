
<script lang="ts">
export let url: string = "/error_url_not_set";
export let text: string = "NOT SET !";
export let active: boolean;

</script>

<a href="{url}">
  <div class="hover_effect" class:active/>
  <p>{text}</p>
</a>

<style lang="scss">

  /* Navbar links style */
a {
  text-decoration: none;
  padding: .5em 1.5em;

  position: relative;
  display: block;

  p {
    font-size: 1.5em;

    color: rgba(255, 255, 255, 1);
    text-decoration: none;

    position: relative;
    line-height: 0;

    display: inline-block;

    transition: color 0.3s cubic-bezier(.22, .61, .36, 1), transform .3s, background-color 0.3s, border 0.3s;
  }

  .hover_effect {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    &::before {
      content: "";

      position: absolute;

      left: 0%;
      bottom: 20%;

      width: 95%;
      height: 1%;

      border-radius: 4px;

      transform: translateX(-150%);
      filter: opacity(0);
      background-color: red;
      transition: transform 0.4s cubic-bezier(.22,.61,.36,1), filter 0.3s cubic-bezier(.22,.61,.36,1);
    }

    &.active::before {
      transform: translateX(.5em);
      filter: opacity(1);
    }

    &.active::after {
      transform: translateY(10%);
      filter: opacity(1);
    }

    &::after {
      content: "";

      position: absolute;

      left: 1em;
      top: 0%;

      width: .2em;
      height: 100%;

      border-radius: 1px;

      transform: translateY(-150%);
      filter: opacity(0);
      background-color: red;
      transition: transform 0.4s cubic-bezier(.22,.61,.36,1), filter 0.3s cubic-bezier(.22,.61,.36,1);
    }
  }


  /*
    Nice visual effects on hover
  */
  &:hover {
    .hover_effect:not(.active)::before {
      transform: translateX(0);
      filter: opacity(1);
    }

    .hover_effect:not(.active):after {
      transform: translateY(0);
      filter: opacity(1);
    }

    p {
      color: rgba(255, 73, 1, 1);
      background-color: rgba(255, 255, 255, 0);
    }
  }
}

</style>

