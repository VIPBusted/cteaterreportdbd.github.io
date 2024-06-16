const translations = {
    de: {
        title: "Dead by Daylight Cheater melden",
        reportTitle: "Cheater melden",
        playerNameLabel: "Spielername:",
        platformLabel: "Plattform:",
        cheatDescriptionLabel: "Beschreibung des Cheats:",
        submitButton: "Melden",
        reportsTitle: "Gemeldete Cheater",
        thankYouText: "Special thanks to the only Real Kuriboh And MakerErbauer2!"
    },
    en: {
        title: "Report Dead by Daylight Cheater",
        reportTitle: "Report Cheater",
        playerNameLabel: "Player Name:",
        platformLabel: "Platform:",
        cheatDescriptionLabel: "Cheat Description:",
        submitButton: "Report",
        reportsTitle: "Reported Cheaters",
        thankYouText: "Special thanks to the only Real Kuriboh And MakerErbauer2"
    },
    es: {
        title: "Reportar tramposo de Dead by Daylight",
        reportTitle: "Reportar tramposo",
        playerNameLabel: "Nombre del jugador:",
        platformLabel: "Plataforma:",
        cheatDescriptionLabel: "Descripción del truco:",
        submitButton: "Reportar",
        reportsTitle: "Tramposos reportados",
        thankYouText: "Special thanks to the only Real Kuriboh And MakerErbauer2"
    },
    fr: {
        title: "Signaler un tricheur de Dead by Daylight",
        reportTitle: "Signaler un tricheur",
        playerNameLabel: "Nom du joueur:",
        platformLabel: "Plateforme:",
        cheatDescriptionLabel: "Description de la triche:",
        submitButton: "Signaler",
        reportsTitle: "Tricheurs signalés",
        thankYouText: "Special thanks to the only Real Kuriboh And MakerErbauer2"
    }
};

document.getElementById('languageSelect').addEventListener('change', function(event) {
    const language = event.target.value;
    const texts = translations[language];

    document.getElementById('title').textContent = texts.title;
    document.getElementById('reportTitle').textContent = texts.reportTitle;
    document.getElementById('playerNameLabel').textContent = texts.playerNameLabel;
    document.getElementById('platformLabel').textContent = texts.platformLabel;
    document.getElementById('cheatDescriptionLabel').textContent = texts.cheatDescriptionLabel;
    document.getElementById('submitButton').textContent = texts.submitButton;
    document.getElementById('reportsTitle').textContent = texts.reportsTitle;
    document.getElementById('thankYouText').textContent = texts.thankYouText;
});
