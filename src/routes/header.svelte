
<script>
</script>

<header class="header">
  <nav>
    <!-- Left side logo -->
    <a href="/" class="logo-link">
      <img class="logo" src="pics/logos/eye_logo.png" alt="Logo">
    </a>

    <!-- Navbar to the right -->
    <ul class="navbar">
      <li>
        <a href="/" class="nav-link special-link active">
          <p>Accueil</p>
        </a>
      </li>

      <li>
        <a href="/equipe" class="nav-link">
          <p>Equipe</p>
        </a>
      </li>

      <li>
        <a href="/allo" class="nav-link">
          <p>Allo</p>
        </a>
      </li>

      <li>
        <a href="/partenaires" class="nav-link">
          <p>Partenaires</p>
        </a>
      </li>

      <li>
        <a href="/video" class="nav-link">
          <p>Video</p>
        </a>    
      </li>

      <li>
        <a href="/jeu" class="nav-link">
          <p>Jeux</p>
        </a>
      </li>
    </ul>
  </nav>
</header>


<style lang="scss">
:root {
  --header-background-color: rgba(50, 50, 50, 255);
}


/* For the logo */
.logo {
  width: 80px;
}

header {
  width: 100vw;
}


/* Header */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  gap: 1em;

  background-color: var(--header-background-color);
  padding: 1em 2em;
}


/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.5em 0;
  margin: 0;

  background-color: var(--header-background-color);

  /* remove items list icon */
  li {
    list-style: none;
  }

  /* Navbar links style */
  .nav-link {
    text-decoration: none;
    padding: .5em 1.1em;

    position: relative;
    display: inline-block;

    p {
      font-size: 1.5em;

      color: rgba(255, 255, 255, 1);
      text-decoration: none;

      position: relative;
      line-height: 0;

      display: inline-block;

      transition: color 0.3s, transform .3s, background-color 0.3s, border 0.3s;
    }

    &::before {
      content: "";

      position: absolute;

      left: 0;
      bottom: 10%;

      width: 100%;
      height: 5%;

      border-radius: 4px;

      transform: scaleX(0);
      background-color: red;
      transition: transform 0.3s;
    }

    /*
      Nice visual effects
    */
    &:hover p {
      color: rgba(255, 73, 1, 1);
      background-color: rgba(255, 255, 255, 0);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
}


/* To let the border on the link */
/*
.special-link {
  border: 2px solid rgba(255, 255, 255, 1);
}


.special-link.active {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 1); 
}
*/
</style>
