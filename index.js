const chalk = require('chalk');
const figlet = require('figlet');

const message = "Hello, Figlet!";
const asciiArt = figlet.textSync(message, {
  font: 'Big Chief',
  horizontalLayout: 'full',
  verticalLayout: 'full',
});

// Eine Liste von Farben, die Sie verwenden möchten
const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

// Verwenden Sie eine Schleife und setTimeout, um die Farben zu ändern
function displayWithChangingColors(index) {
  if (index >= colors.length) {
    index = 0;
  }

  const currentColor = colors[index];
  const formattedText = currentColor(asciiArt);

  console.clear(); // Löschen Sie die Konsole, um den Text zu aktualisieren
  console.log(formattedText);

  setTimeout(() => {
    displayWithChangingColors(index + 1);
  }, 1000); // Ändern Sie die Farbe alle 1 Sekunde (1000 Millisekunden)
}

// Starten Sie die Schleife
displayWithChangingColors(0);
