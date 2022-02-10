import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Download");
    }

    async getHtml() {
        return `

        <style>

        .time-image {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 390px auto;
            height: 300px;
            width: 300px;
        }

        .intro {
            position: absolute;
            margin: 580px auto;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 1200px;
            height: 150px;
            padding: 10px 20px;
            color: white;
            background-color: #202020;
            box-sizing: border-box;
            border-radius: 30px;
            font-size: 24;
        }

        </style>

        <body>

        <!--"Irrelevant Time Frame" image to symbolize the wait-->
        <img class="time-image" src="https://cdn.discordapp.com/attachments/802397943402332221/937532509862912031/time_warning_white.png">

        <!--Block of text describing how the game isn't out yet but to stay tuned-->
        <div class="intro">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, 
             quis nostrud exercitation ullamco laboris nisi 
             ut aliquip ex ea commodo consequat. Duis aute 
             irure dolor in reprehenderit in voluptate velit 
             esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim 
             id est laborum.</p>
        </div>

        </body>

        `;
    }
}