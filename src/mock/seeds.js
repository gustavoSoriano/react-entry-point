export default (server) => {
    server.loadFixtures();
    server.createList("user", 200);
};
