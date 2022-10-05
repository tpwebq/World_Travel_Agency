import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Privacy from "./views/privacy";

const ROUTES = [
    {path: "/",component:<Comingsoon/>},
    {path: "/privacy",component:<Privacy/>},
    {path:"*",component:<Error/>}
];

export {
    ROUTES
};