module.exports = {
  testEnvironment: "jsdom", // Simula un entorno de navegador para pruebas de React
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Usa Babel para transformar archivos JS y JSX
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Evita errores con archivos de estilos
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"], // Ignora pruebas en estas carpetas
};