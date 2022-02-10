import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Support Us");
    }

    async getHtml() {
        return `

            <style>

            .container {
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 420px auto;
                width: 1600px;
                height: 340px;
            }

            .container .box {
                position: relative;
                width: calc(400px - 30px);
                height: calc(340px - 30px);
                background: #1f0000;
                float: left;
                margin: 15px;
                box-sizing: border-box;
                overflow: hidden;
                border-radius: 5px;
                
            }

            .container .box .icon {
                transition: 0.3s;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #410000;
                z-index: 1;
            }

            .container .box:hover .icon {
                transition: 0.3s;
                top: 20px;
                left: calc(50% - 40px);
                width: 80px;
                height: 80px;
                border-radius: 50%;

            }

            .container .box .icon .image {
                background-image: url(https://cdn.discordapp.com/attachments/748924844753551381/939682859541757992/backdrop.png);
                background-size: 180px 180px;
                position: absolute;
                transition: 0.3s;
                height: 180px;
                width: 180px
                top: 30%;
                left: 50%;
                transform: translate(-50%, 30%);
                color: black;
            }

            .container .box:hover .icon .image {
                background-size: 50px 50px;
                transition: 0.3s;
                height: 50px;
            }

            .container .box .content {
                position: absolute;
                top: 120px;
                height: calc(100% - 120px);
                text-align: center;
                padding: 20px;
                box-sizing: border-box;
                transition: 0.3s;
                opacity: 0;
            }

            .container .box:hover .content {
                top: 100px;
                opacity: 1;
            }

            .container .box .content h3 {
                margin: 0 0 10px;
                padding: 0;
                color: white;
                font-size: 24px;
            }

            .container .box .content p {
                margin: 0;
                padding: 0;
                color: white;
            }

            .intro {
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 670px auto;
                text-align: left;
                width: 1600px;
                height: 150px;
                padding: 10px 20px;
                position: fixed;
                color: white;
                background-color: #202020;
                box-sizing: border-box;
                border-radius: 30px;
            }

            .patreonbutton {
                position: absolute;
                margin: 820px auto;
                padding: 15px auto;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 80px;
                width: 300px;
                text-decoration: none;
                border-radius: 5px;
                background: #410000;
                color: white;
                border-style: solid;
                border-color: black;
                text-align: center;
                font-size: 24px;
            }

            </style>

            <body>

            <!--Invisible container with the content boxes of different tiers-->
            <div class="container">

            <!--======Content boxes containing patron tiers======-->
                <!--Legacy Tier-->
                <div class="box"><div class="icon"><img class="image" aria-hidden="true"
                src="https://cdn.discordapp.com/attachments/748924844753551381/940039563651469342/legacy.png"></img></div>
                    <div class="content">
                        <h3>Legacy Tier: $2</h3>
                        <p>You will receive the exclusive role in our discord server and gain access to the patron lounge.</p>
                    </div>
                </div>

                <!--Inscription Tier-->
                <div class="box"><div class="icon"><img class="image" aria-hidden="true"
                src="https://cdn.discordapp.com/attachments/748924844753551381/939677498051018823/inscription.png"></img></div>
                    <div class="content">
                        <h3>Inscription Tier: $5</h3>
                        <p>Your name will be in the credits and other media of Aethon Collective products.</p>
                    </div>
                </div>

                <!--Follower Tier-->
                <div class="box"><div class="icon"><img class="image" aria-hidden="true"
                src="https://cdn.discordapp.com/attachments/748924844753551381/939677497736429638/follower.png"></img></div>
                    <div class="content">
                        <h3>Follower Tier: $10</h3>
                        <p>You will gain access to developer polls and blog posts.</p>
                    </div>
                </div>

                <!--Witness Tier-->
                <div class="box"><div class="icon"><img class="image" aria-hidden="true"
                src="https://cdn.discordapp.com/attachments/748924844753551381/939677498306879548/witness.png"></img></div>
                    <div class="content">
                        <h3>Witness Tier: $20</h3>
                        <p>You will gain access to developer Q&A's and behind-the-scenes streams.</p>
                    </div>
                </div>

            </div>

            <!--A block of text describing the benefits of becoming a patron-->
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

            <!--The button to link to the patreon-->
            <a class="patreonbutton" href="https://www.patreon.com/projectaethon">
                Click here to become a member!
            </a>

            </body>

        `;
    }
}