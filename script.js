let clients = [
  {
    nom: "Mouhamed",
    prenom: "Fall",
    telephone: "77 903 28 91",
    DateNaissance: "22/07/2001",
    MontantDette: "230000",
  },
  {
    nom: "Ismaila",
    prenom: "Diop",
    telephone: "78 938 01 37",
    DateNaissance: "02/07/2004",
    MontantDette: "289000",
  },
  {
    nom: "Ousmane",
    prenom: "Ndione",
    telephone: "77 829 01 91",
    DateNaissance: "22/07/2001",
    MontantDette: "18390",
  },
];

let tbody = document.getElementById("tbody");

function afficherTableau(donnees) {
  tbody.innerHTML = "";
  donnees.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td class="px-6 py-4">${element.nom}</td>
          <td class="px-6 py-4">${element.prenom}</td>
          <td class="px-6 py-4">${element.telephone}</td>
          <td class="px-6 py-4">${element.DateNaissance}</td>
          <td class="px-6 py-4">${element.MontantDette}</td>
          <td class="px-6 py-4"><a type="link" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voir</a>
</td>
        `;
    tbody.appendChild(tr);
  });
}

afficherTableau(clients);

function ajouterClient() {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const telephone = document.getElementById("telephone").value;
  const DateNaissance = document.getElementById("DateNaissance").value;
  const MontantDette = document.getElementById("MontantDette").value;

  const nouveauClient = {
    nom: nom,
    prenom: prenom,
    telephone: telephone,
    DateNaissance: DateNaissance,
    MontantDette: MontantDette,
  };

  clients.push(nouveauClient);
  afficherTableau(clients);

  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("DateNaissance").value = "";
  document.getElementById("MontantDette").value = "";
}

document
  .getElementById("bouton-ajouter")
  .addEventListener("click", ajouterClient);
