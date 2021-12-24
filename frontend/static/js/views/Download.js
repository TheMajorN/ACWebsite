import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Download");
    }

    async getHtml() {
        return `

            <h1>Download Page</h1>

        `;
    }
}
