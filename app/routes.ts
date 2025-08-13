import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("informacoes", "routes/informacoes.tsx"),
    route("lista-presentes", "routes/lista-presentes.tsx"),
    route("rsvp", "routes/rsvp.tsx"),
] satisfies RouteConfig;
