const insertPortfolio = document.getElementById('insert-portfolio')

insertPortfolio.innerHTML = `<section id="portfolio"  style="display: flex; flex-direction: column; margin: 1rem 0; height:70px; width: 100%; border: 1px solid white; border-radius: 1rem;">
    <div id="insert-here">
        <button onclick="switchModeThree()" style="width: 100%; font-weight: 700; font-size: 1.5rem; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 1rem; padding: 1rem 2rem; background-color: transparent; color: white; border: none;">
            <span>portfolio </span>
            <img src="images/Group 482294.png" alt="arrow" style="display: inline-block;">
        </button>
    </div>
</section>
`

function switchModeThree() {
    const portfolio = document.getElementById('portfolio')

    portfolio.remove()

    insertPortfolio.innerHTML= `<div id="projects"  onclick="backPortfolio()" style="font-family: Arial, sans-serif; max-width: 800px; margin: 20px auto; padding: 30px; background-color: #55569E; border-radius: 15px; color: white; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
    <!-- Cabeçalho com seta -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px dashed rgba(255,255,255,0.3);">
        <h1 style="margin: 0; font-size: 28px;">Portfolio</h1>
        <img src="images/Group 482294.png" alt="seta" style="width: 50px; height: 40px; transform: rotate(180deg);">
    </div>

    <!-- Lista de projetos -->
    <ul id="projects" onclick="backPortfolio()" style="list-style: none; padding: 0; margin: 0;">
        <!-- Projeto 1 -->
        <li style="margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; display: flex; align-items: center;">
            <img src="images/mini-git.png" alt="GitHub" style="width: 30px; height: 30px; margin-right: 15px;">
            <div style="flex: 1;">
                <a href="https://github.com/teuzowebdeveloper9/two-feautures-on-your-terminal" style="color: white; text-decoration: none; font-weight: bold; font-size: 18px; display: block; margin-bottom: 5px;">
                    two feautures on your terminal
                </a>
                <span style="font-size: 14px; opacity: 0.8; display: block;">https://github.com/teuzowebdeveloper9/two-feautures-on-your-terminal</span>
            </div>
        </li>

        <!-- Projeto 2 -->
        <li style="margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; display: flex; align-items: center;">
            <img src="images/mini-git.png" alt="GitHub" style="width: 30px; height: 30px; margin-right: 15px;">
            <div style="flex: 1;">
                <a href="https://github.com/teuzowebdeveloper9/wallet-with-mongo" style="color: white; text-decoration: none; font-weight: bold; font-size: 18px; display: block; margin-bottom: 5px;">
                    wallet backend with mongo-db
                </a>
                <span style="font-size: 14px; opacity: 0.8; display: block;">https://github.com/teuzowebdeveloper9/wallet-with-mongo</span>
            </div>
        </li>

        <!-- Projeto 3 -->
        <li  onclick="backPortfolio()" style="margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; display: flex; align-items: center;">
            <img src="images/mini-git.png" alt="GitHub" style="width: 30px; height: 30px; margin-right: 15px;">
            <div style="flex: 1;">
                <a href="https://github.com/teuzowebdeveloper9/wiki-git" style="color: white; text-decoration: none; font-weight: bold; font-size: 18px; display: block; margin-bottom: 5px;">
                    descubra sobre os repositorios github com uma pesquisa simples
                </a>
                <span style="font-size: 14px; opacity: 0.8; display: block;">https://github.com/teuzowebdeveloper9/wiki-git</span>
            </div>
        </li>
         <!-- Projeto 4 -->
        <li style="margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; display: flex; align-items: center;">
            <img src="images/mini-git.png" alt="GitHub" style="width: 30px; height: 30px; margin-right: 15px;">
            <div style="flex: 1;">
                <a href="https://github.com/teuzowebdeveloper9/api-champions" style="color: white; text-decoration: none; font-weight: bold; font-size: 18px; display: block; margin-bottom: 5px;">
                    uma api interativa da champions com varios dados armazenados em um json
                </a>
                <span style="font-size: 14px; opacity: 0.8; display: block;">https://github.com/teuzowebdeveloper9/api-champions</span>
            </div>
        </li>
          <!-- Projeto 5 -->
        <li style="margin-bottom: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; display: flex; align-items: center;">
            <img src="images/mini-git.png" alt="GitHub" style="width: 30px; height: 30px; margin-right: 15px;">
            <div style="flex: 1;">
                <a href="https://github.com/teuzowebdeveloper9/crud" style="color: white; text-decoration: none; font-weight: bold; font-size: 18px; display: block; margin-bottom: 5px;">
                    um crud com uma interface elegante e agradavel e com o backend funcional
                </a>
                <span style="font-size: 14px; opacity: 0.8; display: block;">https://github.com/teuzowebdeveloper9/crud</span>
            </div>
        </li>
    </ul>

</div>
    `
  }

  

  function backPortfolio(){
    const projects = document.getElementById('projects')

    projects.remove()

    insertPortfolio.innerHTML = `<section id="portfolio"  style="display: flex; flex-direction: column; margin: 1rem 0; height:70px; width: 100%; border: 1px solid white; border-radius: 1rem;">
    <div id="insert-here">
        <button onclick="switchModeThree()" style="width: 100%; font-weight: 700; font-size: 1.5rem; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 1rem; padding: 1rem 2rem; background-color: transparent; color: white; border: none;">
            <span>portfolio </span>
            <img src="images/Group 482294.png" alt="arrow" style="display: inline-block;">
        </button>
    </div>
</section>
    `

    console.log("back portfolios")
  }