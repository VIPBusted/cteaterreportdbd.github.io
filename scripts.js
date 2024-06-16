// scripts.js
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
