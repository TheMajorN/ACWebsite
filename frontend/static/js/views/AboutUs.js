import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About Us");
    }

    async getHtml() {
        return `

            <h1>About Us Page</h1>

        `;
    }
}
