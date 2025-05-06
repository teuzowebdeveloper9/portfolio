const button = document.querySelector('.trigger')
const insert = document.getElementById('insert-here')

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