import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Discord");
    }

    async getHtml() {
        return `

        <style>
            .button {
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 26px;
                margin: 140px 250px;
                cursor: pointer;
            }

            .button1 {
                background-color: #2887DA;
            } 
        </style>

        <button class="button button1" type = "button" onclick = "alert('Discord Button Clicked')"> 
        Click Here to Join the Discord!
        </button> 

        `;
    }
}