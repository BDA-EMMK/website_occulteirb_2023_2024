
<script lang="ts" context="module">
export type Partner = {
  
}

</script>

<!-- The part -->
<h1>
  Les partenaires !
</h1>

<section class="pole-section">
  <div class="partners">

    <!-- Member 1 -->
    <div class="team-member">
      <img src="/img/troll/openai.png" alt="Membre 1" id="image1">
    </div>

    <!-- Member 2 -->
    <div class="team-member">
      <img src="/img/troll/the_rock.jpg" alt="Membre 2">
    </div>

 </div>
</section>


<style lang="scss">
/* For the team */
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.team-member {
  width: 250px;
  height: 400px;
  margin: auto;
  text-align: center;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-150px);
}

.team-member::before {
	z-index: -1;
	position: absolute;
	content: '';
	width: 150px;
	height: 500px;
	background: rgba(255, 73, 1, 1);
	transform: rotate(45deg);
}

.team-member:hover::before {
	animation: animate 2s linear infinite;
}

@keyframes animate{
	from {
		transform: rotate(0deg);
	}
	to {

		transform: rotate(362deg);
	}
}

.team-member::after {
	z-index: -1;
	position: absolute;
	content: '';
	inset: 4px;
	border-radius: 8px;
}

.team-member img {
  width: 96%;
  height: 96%;
  object-fit: cover;
  border-radius: 6px;
  transform: translateY(9px);
}

.member-program {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.team-member:hover {
  transform: scale(1.05);
}
</style>

