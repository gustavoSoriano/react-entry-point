import { Server } from "miragejs";
import fixtures from "./fixtures";
import factories from "./factories";
import models from "./models";
import seeds from "./seeds";
import routes from "./routes";
import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function makeServer(environment = "development") {
    return new Server({
        namespace: "mock",
        environment,
        models,
        factories,
        fixtures,
        seeds,
        routes,
    });
}
