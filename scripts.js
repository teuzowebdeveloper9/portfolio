const button = document.querySelector('.trigger')
const insert = document.getElementById('insert-here')
const insertEdu = document.getElementById('insert-edu')

insertEdu.innerHTML = `<section id="education"  style="display: flex; flex-direction: column; margin: 1rem 0; height:70px; width: 100%; border: 1px solid white; border-radius: 1rem;">
    <div id="insert-here">
        <button onclick="switchModeTwo()" style="width: 100%; font-weight: 700; font-size: 1.5rem; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 1rem; padding: 1rem 2rem; background-color: transparent; color: white; border: none;">
            <span>educação</span>
            <img src="images/Group 482294.png" alt="arrow" style="display: inline-block;">
        </button>
    </div>
</section>`

function switchMode(){
    button.remove()
   
  const nosy =  insert.innerHTML = `<div  id="nosy" onclick="switchAgain()" style="background-color: #4f4fa3; color: white; border-radius: 1rem; padding: 2rem; width: 100%; font-family: sans-serif; box-sizing: border-box;">
  <div style="display: flex; align-items: center; background-color: #6174ff; width: 100%; padding: 0.5rem 1rem; border-radius: 4px;">
    <h2 style="font-size: 1.5rem; font-weight: bold; margin: 0;">Skills</h2>
   <img src="images/Group 482294.png" alt="seta" style="margin-left: auto; width: 50px; height: 40px; transform: rotate(180deg);">
  </div>

  <div style="display: flex; justify-content: space-between; margin-top: 2rem; flex-wrap: wrap; gap: 2rem;">
    
    <div style="flex: 1; min-width: 300px;">
      <h3 style="font-size: 1rem; font-weight: bold; margin-bottom: 1rem;">Habilidades profissionais:</h3>
      <div style="display: flex; justify-content: space-around; align-items: center; border: 1px solid white; padding: 1rem; border-radius: 1rem; height: 220px;">
        <img src="images/Group 484841.png" alt="js"  style="width: 60px; height: 60px;  border-radius: 8px;"> 
        <img src="images/node.js.png" alt="js"  style="width: 60px; height: 60px;  border-radius: 8px;"> 
        <img src="images/mongo-db.png" alt="js"  style="width: 20px; height: 60px;  border-radius: 8px;"> 
         <img src="images/react.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 
         <img src="images/spring.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 
          <img src="images/gituzin.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 
          <img src="images/typescript.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 
          <img src="images/vue.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 
          <img src="images/java.png" alt="js"  style="width: 50px; height: 60px;  border-radius: 8px;"> 

       
      </div>
    </div>

    <div style="flex: 1; min-width: 300px;">
      <h3 style="font-size: 1rem; font-weight: bold; margin-bottom: 1rem;">Habilidades pessoais:</h3>
      <div style="display: flex; justify-content: space-between; border: 1px solid white; border-radius: 1rem; padding: 1rem;">
        <ul style="list-style: disc; padding-left: 1.5rem;">
          <li>proatividade</li>
          <li>Comunicação</li>
          <li>Trabalho em Equipe</li>
        </ul>
        <ul style="list-style: disc; padding-left: 1.5rem;">
          <li>Organização</li>
          <li>Comprometimento </li>
          <li>muito esforço todos os dias. </li>
        </ul>
      </div>
    </div>

  </div>
</div>

`
 console.log('switch')
}

function switchAgain() {
    const nosyElement = document.getElementById('nosy');
    if (nosyElement) {
      nosyElement.remove();
    }
    insert.innerHTML = `<section style="display: flex; flex-direction: column; margin: 1rem 0; height:70px; width: 100%; border: 1px solid white; border-radius: 1rem;">
    <div id="insert-here">
        <button onclick="switchMode()" style="width: 100%; font-weight: 700; font-size: 1.5rem; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 1rem; padding: 1rem 2rem; background-color: transparent; color: white; border: none;">
            <span>idiomas</span>
            <img src="images/Group 482294.png" alt="arrow" style="display: inline-block;">
        </button>
    </div>
</section>`
    console.log('switch again')
  }

  function switchModeTwo(){
   const education = document.getElementById('education')

   education.remove()


   insertEdu.innerHTML = `<div style="
    font-family: 'Segoe UI', Arial, sans-serif; 
    max-width: 600px; 
    margin: 20px auto; 
    padding: 25px; 
    background: linear-gradient(135deg, #f9f9ff 0%, #e6f0ff 100%); 
    border-radius: 15px; 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #6a5acd;
">
    <!-- Título principal -->
    <h1 style="
        color: #6a5acd; 
        font-size: 28px; 
        margin-bottom: 10px; 
        padding-bottom: 8px; 
        border-bottom: 2px dashed #9370db;
    ">
        Educação
    </h1>
    
    <!-- Subtítulo -->
    <p style="
        font-size: 16px; 
        color: #9370db; 
        margin-bottom: 20px; 
        font-weight: 500;
    ">
        ✨ Minhas conquistas na DIO ✨
    </p>
    
    <!-- Divisor estilizado -->
    <hr style="
        border: 0; 
        height: 1px; 
        background: linear-gradient(to right, transparent, #9370db, transparent);
        margin: 20px 0;
    ">
    
    <!-- Espaço para sua imagem (agora com fundo gradiente) -->
    <div style="
        margin: 25px 0; 
        background: linear-gradient(45deg, #e0e7ff, #d1d9ff); 
        padding: 20px; 
        text-align: center; 
        border-radius: 10px; 
        border: 2px dashed #6a5acd;
    ">
         <img src="images/javascript- formacao.webp" alt="dio-javascript" style="height:60px; width:50px; ">
         <img src="images/node-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
          <img src="images/react-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
           <img src="images/typescript-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
            <img src="images/java-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
             <img src="images/logica-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
              <img src="images/spring-formacao.webp" alt="dio-javascript" style="height:55px; width:50px; ">
    </div>
    
    <!-- Seção DIO -->
    <h2 style="
        color: #6a5acd; 
        font-size: 22px; 
        margin: 20px 0 10px 0; 
        background: #f0f5ff; 
        padding: 8px 12px; 
        border-radius: 6px; 
        display: inline-block;
    ">
        dio.me
    </h2>
    
    <p style="
        font-size: 15px; 
        color: #5a5a8a; 
        margin-bottom: 20px; 
        font-style: italic; 
        padding-left: 10px;
    ">
        🚀 <strong>Web Development All I need to know in one place</strong>
    </p>
    
    <!-- Formação 1 -->
    <div style="
        background: rgba(106, 90, 205, 0.1); 
        padding: 12px 15px; 
        border-radius: 8px; 
        margin-bottom: 15px;
    ">
        <p style="
            font-size: 17px; 
            color: #6a5acd; 
            margin: 0 0 5px 0; 
            font-weight: bold;
        ">
            🎓 analise e desenvolvimento de sistemas na estacio
        </p>
        <p style="
            font-size: 14px; 
            color: #777; 
            margin: 0;
        ">
            janeiro de 2025 previsão de termino outubro de 2027
        </p>
    </div>
    
    <!-- Formação 2 -->
    <div style="
        background: rgba(106, 90, 205, 0.1); 
        padding: 12px 15px; 
        border-radius: 8px;
    ">
        <p style="
            font-size: 17px; 
            color: #6a5acd; 
            margin: 0 0 5px 0; 
            font-weight: bold;
        ">
            🎨 escola de programação o novo programador 
        </p>
        <p style="
            font-size: 14px; 
            color: #777; 
            margin: 0;
        ">
             de outubro de 2024 á março  de 2025
        </p>
    </div>
     
    <!-- Formação 3 -->
    <div style="
        background: rgba(106, 90, 205, 0.1); 
        padding: 12px 15px; 
        border-radius: 8px;
    ">
        <p style="
            font-size: 17px; 
            color: #6a5acd; 
            margin: 0 0 5px 0; 
            font-weight: bold;
        ">
            🎨 curso logica de programação algusto galego
        </p>
        <p style="
            font-size: 14px; 
            color: #777; 
            margin: 0;
        ">
             de setembro de 2024 á novembro  de 2024
        </p>
    </div>
</div>
 

`


   console.log('switch the education')

  }