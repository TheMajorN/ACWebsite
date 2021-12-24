import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Support Us");
    }

    async getHtml() {
        return `

            <h1>Support Us Page!</h1>

        `;
    }
}
