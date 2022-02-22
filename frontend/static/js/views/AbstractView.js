export default class {
    constructor(params) {
        this.params = params;
    }

    // Set abstract title which will fill in with each page
    setTitle(title) {
        document.title = title;
    }

    // Method to get the HTML to fill in the #app div with content
    async getHtml() {
        return "";
    }
}