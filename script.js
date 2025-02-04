const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  ajouterClient();
});

let clients = [
  {
    nom: "Mouhamed",
    prenom: "Fall",
    telephone: "77 903 28 91",
    DateNaissance: "22/07/2001",
    categorie: "Non solvable",
    MontantDette: "230000",
  },
  {
    nom: "Ismaila",
    prenom: "Diop",
    telephone: "78 938 01 37",
    DateNaissance: "02/07/2004",
    categorie: "Solvable",
    MontantDette: "289000",
  },
  {
    nom: "Ousmane",
    prenom: "Ndione",
    telephone: "77 829 01 91",
    DateNaissance: "22/07/2001",
    categorie: "Fidéle",
    MontantDette: "18390",
  },
];

let tbody = document.getElementById("tbody");

function afficherTableau(donnees) {
  tbody.innerHTML = "";
  donnees.forEach((element) => {
    const tr = document.createElement("tr");
    tr.classList.add(
      "bg-white",
      "border-b",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );
    tr.innerHTML = `
      <td class="px-6 py-4">${element.nom}</td>
      <td class="px-6 py-4">${element.prenom}</td>
      <td class="px-6 py-4">${element.telephone}</td>
      <td class="px-6 py-4">${element.DateNaissance}</td>
     <td class="px-6 py-4">${element.categorie}</td>
      <td class="px-6 py-4">${element.MontantDette}</td>
      <td class="px-6 py-4">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

afficherTableau(clients);

function ajouterClient() {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const DateNaissance = document.getElementById("DateNaissance").value.trim();
  const MontantDette = document.getElementById("MontantDette").value.trim();

  if (nom && prenom && telephone && DateNaissance && MontantDette) {
    const nouveauClient = {
      nom,
      prenom,
      telephone,
      DateNaissance,
      MontantDette,
    };

    clients.push(nouveauClient);
    afficherTableau(clients);

    form.reset();

    const modal = document.getElementById("default-modal");
    modal.classList.add("hidden");
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}
