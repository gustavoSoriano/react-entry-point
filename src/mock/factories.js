import { Factory } from "miragejs";
import faker from "faker";

export default {
    user: Factory.extend({
        name: faker.fake("{{name.findName}}"),
        email: faker.fake("{{internet.email}}"),
        active: faker.fake("{{datatype.boolean}}"),
    }),
};
