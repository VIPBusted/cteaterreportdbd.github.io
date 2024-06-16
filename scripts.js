// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const initialLanguage = 'de'; // Standardmäßig Deutsch auswählen
    updateTexts(initialLanguage); // Initialisiere die Texte

    // Eventlistener für die Änderung der Sprache hinzufügen
    document.getElementById('languageSelect').addEventListener('change', function(event) {
        const language = event.target.value;
        updateTexts(language); // Aktualisiere die Texte entsprechend der ausgewählten Sprache
    });

    function updateTexts(language) {
        const texts = translations[language];

        // Überprüfen, ob die Sprache im translations-Objekt vorhanden ist
        if (!texts) {
            console.error(`Übersetzung für Sprache '${language}' nicht verfügbar.`);
            return;
        }

        // Elemente im DOM aktualisieren
        document.getElementById('title').textContent = texts.title;
        document.getElementById('reportTitle').textContent = texts.reportTitle;
        document.getElementById('playerNameLabel').textContent = texts.playerNameLabel;
        document.getElementById('platformLabel').textContent = texts.platformLabel;
        document.getElementById('cheatDescriptionLabel').textContent = texts.cheatDescriptionLabel;
        document.getElementById('submitButton').textContent = texts.submitButton;
        document.getElementById('reportsTitle').textContent = texts.reportsTitle;
        document.getElementById('thankYouText').textContent = texts.thankYouText;
    }
});

// Übersetzungen für verschiedene Sprachen
const translations = {
    de: {
        title: "Dead by Daylight Cheater melden",
        reportTitle: "Cheater melden",
        playerNameLabel: "Spielername:",
        platformLabel: "Plattform:",
        cheatDescriptionLabel: "Beschreibung des Cheats:",
        submitButton: "Melden",
        reportsTitle: "Gemeldete Cheater",
        thankYouText: "Vielen Dank für Ihre Hilfe, Dead by Daylight zu einem besseren Spiel zu machen!"
    },
    en: {
        title: "Report Dead by Daylight Cheater",
        reportTitle: "Report Cheater",
        playerNameLabel: "Player Name:",
        platformLabel: "Platform:",
        cheatDescriptionLabel: "Cheat Description:",
        submitButton: "Report",
        reportsTitle: "Reported Cheaters",
        thankYouText: "Thank you for helping us make Dead by Daylight a better game!"
    },
    es: {
        title: "Reportar tramposo de Dead by Daylight",
        reportTitle: "Reportar tramposo",
        playerNameLabel: "Nombre del jugador:",
        platformLabel: "Plataforma:",
        cheatDescriptionLabel: "Descripción del truco:",
        submitButton: "Reportar",
        reportsTitle: "Tramposos reportados",
        thankYouText: "¡Gracias por ayudarnos a mejorar Dead by Daylight!"
    },
    fr: {
        title: "Signaler un tricheur de Dead by Daylight",
        reportTitle: "Signaler un tricheur",
        playerNameLabel: "Nom du joueur:",
        platformLabel: "Plateforme:",
        cheatDescriptionLabel: "Description de la triche:",
        submitButton: "Signaler",
        reportsTitle: "Tricheurs signalés",
        thankYouText: "Merci de nous aider à améliorer Dead by Daylight!"
    }
};

// Eventlistener für das Absenden des Formulars
document.getElementById('cheaterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const platform = document.getElementById('platform').value;
    const cheatDescription = document.getElementById('cheatDescription').value;

    const report = {
        playerName,
        platform,
        cheatDescription,
        date: new Date().toLocaleString()
    };

    addReportToList(report); // Bericht zur Liste hinzufügen
    saveReport(report); // Bericht speichern

    this.reset(); // Formular zurücksetzen
});

// Funktion zum Hinz
