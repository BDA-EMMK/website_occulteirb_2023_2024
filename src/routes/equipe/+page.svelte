
<script lang="ts" context="module">
export type Member = {
  name: string;
  major: string;
  img1URL?: string;
  aka: string;
  role: string;
};

import Team from "./team.svelte";

/*
 * It's teams declaration time !
*/

const deskMembers: Member[] = [
  {
    name: "Nathanaël",
    major: "Elec",
    aka: "Nath",
    role: "Sorcier",
  },
  {
    name: "Florian",
    major: "Elec",
    aka: "Dicaprierb",
    role: "Acteur Studio",
  },
  {
    name: "Guënael",
    major: "Info",
    aka: "Gégé",
    role: "Secrétaire",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
];

const trezMembers: Member[] = [
  {
    name: "Guillaume",
    major: "Elec",
    aka: "Guil",
    role: "C'est la Maaf",
  },
  {
    name: "Guillaume",
    major: "Mmk",
    aka: "Laume",
    role: "Luigi",
  },
  {
    name: "Juluan",
    major: "Mmk",
    aka: "Juju",
    role: "Joker",
  },
];

const eventMembers: Member[] = [
  {
    name: "Louis",
    major: "Elec",
    aka: "Louis le petit",
    role: "Ambianceur",
  },
  {
    name: "Chloé",
    major: "Jsp",
    aka: "La boom",
    role: "Ambianceuse",
  },
  {
    name: "Zhaniya",
    major: "Info",
    aka: "Demandeuse d'asile",
    role: "Ambianceuse",
  },
  {
    name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    name: "Marine",
    major: "Elec",
    aka: "Joker",
    role: "Ambianceuse",
  },
];

const logMembers: Member[] = [
  {
    name: "William",
    major: "Mmk",
    aka: "Wii U",
    role: "Ninja",
  },
  {
    name: "Pierre",
    major: "Mmk",
    aka: "Débranché",
    role: "Musicien",
  },
]

const comMembers: Member[] = [
  {
    name: "Shakty",
    major: "Telecom",
    aka: "Shake tea",
    role: "Poète",
  },
  {
    name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
]

const partMembers: Member[] = [
  {
    name: "Martin",
    major: "Mmk",
    aka: "Martine",
    role: "Parieur",
  },
]

const videoMembers: Member[] = [
  {
    name: "Shakty",
    major: "Telecom",
    aka: "Shake Tea",
    role: "Poète",
  },
  {
    name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
]

const barMembers: Member[] = [
  {
    name: "Juluan",
    major: "Elec",
    aka: "Juju",
    role: "Joker",
  },
]

const webMembers: Member[] = [
  {
    name: "Damien",
    major: "Info",
    aka: "Dams",
    role: "Cineirb",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
]

</script>

<h1>
  Notre Équipe de fous !
</h1>

<Team members="{deskMembers}" desc="Bureau" />
<Team members="{trezMembers}" desc="Trésorerie" />
<Team members="{eventMembers}" desc="Event" />
<Team members="{logMembers}" desc="Logistique" />
<Team members="{comMembers}" desc="Communication" />
<Team members="{partMembers}" desc="Part" />
<Team members="{videoMembers}" desc="Vidéo" />
<Team members="{barMembers}" desc="Bar" />
<Team members="{webMembers}" desc="Web" />


<style lang="scss">
</style>

