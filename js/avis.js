const form = document.getElementById('avis-form');
const message = document.getElementById('message');
const listeAvis = document.getElementById('liste-avis');

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  lireAvis();
  form.addEventListener('submit', envoyerAvis);
});

// ---------- APELLE AJAX ICI !!!!!!!!!!----------

async function lireAvis() {
  try {
    const response = await fetch('data/avis.txt');
    if (!response.ok) throw new Error('Erreur AJAX');
    

    console.log('AJAX OK : lecture de avis.txt');

    // récupération et traitement des avis. En .txt mais en json etait possible aussi.

    const text = await response.text();
    const lignes = text.trim().split('\n');

    // Charger les avis existants depuis localStorage aussi
    const avisStockes = JSON.parse(localStorage.getItem('avis')) || [];

    const tousLesAvis = lignes.map(ligne => {
      const [prenom, nom, ville, note, contenu, date] = ligne.split('|');
      return { prenom, nom, ville, note, contenu, date };
    }).concat(avisStockes);

    afficherAvis(tousLesAvis);

  } catch (error) {
    console.error('Erreur lors de la lecture des avis :', error);
    message.textContent = "Impossible de charger les avis.";
    message.className = 'form-message error';
  }
}

// ---------- ENVOI DU FORMULAIRE ----------

function envoyerAvis(e) {
  e.preventDefault();

  // Validation obligatoire
  if (!form.nom.value.trim() || !form.prenom.value.trim() || !form.ville.value.trim() || !form.avis.value.trim() || !form.note.value) {
    message.textContent = "Veuillez remplir tous les champs correctement.";
    message.className = 'form-message error';
    return;
  }

  // Validation email
  const emailValue = form.email.value.trim();
  if (!emailValue || !emailValue.includes("@")) {
    message.textContent = "Veuillez entrer un email valide. (@ manquant)";
    message.className = 'form-message error';
    form.email.focus();
    return;
  }

  const avisData = {
    prenom: form.prenom.value.trim(),
    nom: form.nom.value.trim(),
    ville: form.ville.value.trim(),
    note: form.note.value,
    email: emailValue,
    contenu: form.avis.value.trim(),
    date: new Date().toLocaleDateString()
  };
  try {
    console.log('AJAX OK : envoi simulé vers avis.txt', avisData);

    // Stockage côté client
    const avisExistants = JSON.parse(localStorage.getItem('avis')) || [];
    avisExistants.push(avisData);
    localStorage.setItem('avis', JSON.stringify(avisExistants));

    // Réaffichage des avis
    lireAvis();

    // Message succès
    message.textContent = "Merci pour votre avis !";
    message.className = 'form-message success';

    // Reset formulaire
    form.reset();

  } catch (error) {
    console.error('Erreur lors de l’envoi du formulaire :', error);
    message.textContent = "Erreur lors de l’envoi.";
    message.className = 'form-message error';
  }
}

// ---------- AFFICHAGE DES AVIS ----------

function afficherAvis(avisArray) {
  listeAvis.innerHTML = "";

  avisArray.forEach(avis => {
    const avisItem = document.createElement('avis-item');
    avisItem.setAttribute("prenom", avis.prenom);
    avisItem.setAttribute("nom", avis.nom);
    avisItem.setAttribute("ville", avis.ville);
    avisItem.setAttribute("note", avis.note);
    avisItem.setAttribute("contenu", avis.contenu);
    avisItem.setAttribute("date", avis.date);

    listeAvis.appendChild(avisItem);
  });
}
