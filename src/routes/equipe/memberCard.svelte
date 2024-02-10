
<script lang="ts">

import type { Member } from "./+page.svelte";

export let member: Member = {
  name: "unset",
  major: "unset",
  img1URL: "/unset",
  aka: "unset",
  role: "unset",
};

</script>

<div class="team-member">
  <div class="face face1">
    <img src="/img/team/the_rock.jpg" alt="membre" id="image">

    <div class="member-details">
      <p class="name" >{ member.name }</p>
      <p class="major" >{ member.major }</p>
    </div>
  </div>

  <div class="face face2">
    <img src="/img/team/william_sauvage.png" alt="membre" id="image">

    <div class="member-details">
      <p class="name" >{ member.aka }</p>
      <p class="major" >{ member.role }</p>
    </div>
  </div>
</div>


<style lang="scss">

.team-member {
  width: 200px;
  height: 350px;

  background-color: #f8f5f2;
  margin: auto;

  text-align: center;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.team-member img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.member-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #333;
}

.member-name {
  font-weight: bold;
  margin: 0;
}


.face {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  transition: transform 0.5s, filter 0.5s;

  .member-details {
    position: absolute;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    left: 0;
    bottom: 2em;
  }

  p {
    margin: 0;
    font-size: 1.3em;
    text-align: center;
  }

  &.face1 {
    filter: opacity(1);
    transform: translate(0);
  }

  &.face2 {
    filter: opacity(0);
    transform: translateX(-100%);
  }
}


.team-member:hover {
  transform: scale(1.2);

  .face1 {
    filter: opacity(0);
    transform: translateX(100%);
  }

  .face2 {
    filter: opacity(1);
    transform: translate(0%);
  }
}
</style>

