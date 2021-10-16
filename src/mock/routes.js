export default function () {
    this.passthrough(`${process.env.REACT_APP_API_URL}/**`);
    this.resource("users", (schema) => schema.db.users);
    this.resource("posts", (schema) => schema.db.posts);
}
