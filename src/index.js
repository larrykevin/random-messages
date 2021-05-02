const messages = [
    "Larry",
    "Caycho",
    "Francia",
    "Kevin",
    "Enrique",
    "Dafne",
    "Sayuri",
    "Erika"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
