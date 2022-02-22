import Home from "./views/Home.js";
import Download from "./views/Download.js";
import AboutUs from "./views/AboutUs.js";
import SupportUs from "./views/SupportUs.js";
import Discord from "./views/Discord.js";

// Establish the regular expression
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// Method to match the expression with the path created.
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

// Method to navigate to a certain URL.
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Method to allow for navigation throughout the website
const router = async () => {
    // An array of routes to each individual web page.
    const routes = [
        { path: "/", view: Home },
        { path: "/download", view: Download },
        { path: "/about-us", view: AboutUs },
        { path: "/support-us", view: SupportUs },
        { path: "/discord", view: Discord }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    // Establish a potential match
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    // If the potential match doesn't match anything (which should never happen,)
    // then reroute back to the Home Page.
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    // Establish a view from the matched route
    const view = new match.route.view(getParams(match));

    // Get the HTML from the "getHtml" method which will fill the "#app" div
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

// Event listener with lambda method to establish that, when a link
// on the page is clicked, the target will navigate to the data linked
// reference.  This will avoid loading time for a different web page since
// it is part of the singular web page.
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    // Implement router method above
    router();
});