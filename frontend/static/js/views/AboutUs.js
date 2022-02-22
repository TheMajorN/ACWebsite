import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About Us");
    }

    async getHtml() {
        return `

        <style>

        .container {
            position: absolute;
            margin: 860px auto;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 580px;
            height: 1200px;
        }

        .container .box {
            position: relative;
            width: 270px;
            height: 190px;
            background: #1f0000;
            float: left;
            margin: 10px;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 5px;
        }

        .container .box .icon {
            margin: 30px 10px;
            font-size: 44px;
            transition: 0.3s;
            text-align: center;
        }

        .container .box .content {
            margin: 0px 10px;
            opacity: 1;
            transition: 0.3s;
            font-size: 14px;
        }

        .container .box .content h3 {
            text-align: center;
            margin: -40px 10px;
            opacity: 1;
            transition: 0.3s;
            font-size: 16px;
        }

        .container .box .content p {
            margin: 150px 10px;
            text-align: center;
            opacity: 1;
            transition: 0.3s;
            font-size: 14px;
        }

        .container .box:hover .icon {
            margin: 4px 10px;
            font-size: 24px;
            transition: 0.3s;
        }

        .container .box:hover .content {
            margin: -10px 10px;
            opacity: 1;
            transition: 0.3s;
        }

        .container .box:hover .content h3 {
            margin: 0px 10px;
            font-size: 16;
            opacity: 1;
            transition: 0.3s;
        }

        .container .box:hover .content p {
            margin: 0px 10px;
            opacity: 1;
            transition: 0.3s;
        }

        @media only screen and (min-width: 769px) {
            .container {
                width: 950px;
                height: 600px;
                margin: 560px auto;
            }

            .container .box {
                position: relative;
                width: 290px;
                height: 190px;
            }

            .container .box .icon {
                margin: 50px 10px;
            }

            .container .box .content h3 {
                margin: -60px 10px;
            }
        }

        @media only screen and (min-width: 1024px) {
            .container {
                width: 960px;
                height: 600px;
                margin: 560px auto;
            }

            .container .box {
                position: relative;
                width: 300px;
                height: 190px;
            }

            .container .box .icon {
                margin: 50px 10px;
            }

            .container .box .content h3 {
                margin: -60px 10px;
            }
        }

        </style>

        <body>

        <!--Invisible container with arranged content boxes-->
        <div class="container">

            <!--======Content boxes containing dev info======-->
            <!--Aruspice-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Aruspice</i></div>
                <div class="content">
                    <h3>3D Generalist</h3>
                    <p>Aruspice is a 3D artist working 
                    in the games industry. Formerly 
                    a 3D artist for SCP Unity.</p>
                </div>
            </div>

            <!--Bjorn Hangel-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Bjorn Hangel</i></div>
                <div class="content">
                    <h3>3D Modeler</h3>
                    <p>Bjorn has been doing 3D since 2017. His main 
                    area is environment and has recently 
                    picked up photogrammetry, and currently
                    uses that in many projects.</p>
                </div>
            </div>

            <!--Corvus-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Corvus B.</i></div>
                <div class="content">
                    <h3>Audio Designer</h3>
                    <p>Dev synopsis</p>
                </div>
            </div>

            <!--Error-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Error</i></div>
                <div class="content">
                    <h3>Programmer</h3>
                    <p>Dev synopsis</p>
                </div>
            </div>

            <!--Festive-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Festive</i></div>
                <div class="content">
                    <h3>3D Modeler</h3>
                    <p>Festive joined the SCP:Unity team late 
                    2019 under QA while self teaching 3D modeling 
                    and texturing. Now in Aethon he continues 
                    creating 3D assets specializing in hard 
                    surface props as well as blueprint integration.</p>
                </div>
            </div>

            <!--Kanf-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Kanf</i></div>
                <div class="content">
                    <h3>3D Generalist</h3>
                    <p>Dev synopsis</p>
                </div>
            </div>

            <!--Pixel Puffin-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Pixel Puffin</i></div>
                <div class="content">
                    <h3>Concept Artist & Design</h3>
                    <p>Dev synopsis</p>
                </div>
            </div>

            <!--Punkie-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Punkie</i></div>
                <div class="content">
                    <h3>Concept Artist</h3>
                    <p>Punkie is a concept artist 
                    who focuses on room blueprints 
                    and level/environmental art design.</p>
                </div>
            </div>

            <!--Shakles-->
            <div class="box"><div class="icon"><i class="fa fa-search" aria-hidden="true">Shakles</i></div>
                <div class="content">
                    <h3>Rigger & Animator</h3>
                    <p>Shakles is a Canadian 
                    indie game developer and freelance animator. 
                    He's developed several small games, such as 
                    Tôtem, and has participated in several larger
                     game development projects during his career.</p>
                </div>
            </div>

        </div>

        </body>

        `;
    }
}