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

    addReportToList(report);
    saveReport(report);

    this.reset();
});

function addReportToList(report) {
    const reportList = document.getElementById('reportList');
    const listItem = document.createElement('li');
    listItem.textContent = `Spielername: ${report.playerName} | Plattform: ${report.platform} | Cheat: ${report.cheatDescription} | Datum: ${report.date}`;
    reportList.appendChild(listItem);
}

function saveReport(report) {
    let reports = JSON.parse(localStorage.getItem('cheaterReports')) || [];
    reports.push(report);
    localStorage.setItem('cheaterReports', JSON.stringify(reports));
}

function loadReports() {
    const reports = JSON.parse(localStorage.getItem('cheaterReports')) || [];
    reports.forEach(report => addReportToList(report));
}

document.addEventListener('DOMContentLoaded', loadReports);

const translations = {
    de: {
        title: "Dead by Daylight Cheater melden",
        reportTitle: "Cheater melden",
        playerNameLabel: "Spielername:",
        platformLabel: "Plattform:",
        cheatDescriptionLabel: "Beschreibung des Cheats:",
        submitButton: "Melden",
        reportsTitle: "Gemeldete Cheater",
        thankYouText: "Thank YOU Kuriboh and MakerErbauer2!"
    },
    en: {
        title: "Report Dead by Daylight Cheater",
        reportTitle: "Report Cheater",
        playerNameLabel: "Player Name:",
        platformLabel: "Platform:",
        cheatDescriptionLabel: "Cheat Description:",
        submitButton: "Report",
        reportsTitle: "Reported Cheaters",
        thankYouText: "Thank YOU Kuriboh and MakerErbauer2!"
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
