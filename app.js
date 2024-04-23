let gameSeq=[];
let userSeq=[];
let level=0;
let score=0;
let btns =['yellow','green','red','purple'];
let started = false;
let h2 = document.querySelector('h2');
let highScore=0;
document.addEventListener('keypress',()=>{
   if(started==false)
   {
       levelUp();
       started=true;
   }
});
function levelUp()
{
   userSeq=[];
   level++;
   h2.innerText=`level ${level}`;
   let rand=Math.floor(Math.random()*4);
   let randColor=btns[rand];
   let btn = document.querySelector(`.${randColor}`);
   gameFlash(btn);
   gameSeq.push(randColor);
   console.log(gameSeq);
}
function btnPress()
{
    let btn = this;
    userFlash(btn);
    let selection = btn.getAttribute('id');
    userSeq.push(selection);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
function gameFlash(btn)
{
   btn.classList.add('flash');
   setTimeout(()=>{
       btn.classList.remove('flash');
   },250);
}
function userFlash(btn)
{
   btn.classList.add('user-flash');
   setTimeout(()=>{
    btn.classList.remove('user-flash');
   },250);
}
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
            score++;
        }
    }
    else{
            if(score>highScore)
            {
                highScore=score;
                h2.innerHTML=`Game Over! your score was : ${score} <br> New High Score : ${highScore} <br> press any key to start`;
                let body = document.querySelector('body');
                body.classList.add('change');
                setTimeout(()=>{
                body.classList.remove('change');
                },150);
                reset();
            }
            else if(highScore>score)
            {
                h2.innerHTML=`Game Over! your score was : ${score} <br>  High Score : ${highScore} <br> press any key to start `;
                let body = document.querySelector('body');
                body.classList.add('change');
                setTimeout(()=>{
                body.classList.remove('change');
                },150);
                reset();
            }
            else if(score==0 && highScore==0)
            {
                
                h2.innerHTML=`Game Over! your score was : ${score} <br> press any key to start `;
                let body = document.querySelector('body');
                body.classList.add('change');
                setTimeout(()=>{
                body.classList.remove('change');
                },150);
                reset();
            }
            else
            {
                h2.innerHTML=`Game Over! your score was : ${score} <br> High Score : ${highScore}  <br> press any key to start `;
                let body = document.querySelector('body');
                body.classList.add('change');
                setTimeout(()=>{
                body.classList.remove('change');
                },150);
                reset();
            }    
    }
}
let allbtn =document.querySelectorAll('.btn');
for(btn of allbtn)
{
    btn.addEventListener('click',btnPress);
}
function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
    score=0;
}
// function saveToDb(data)
// {
//     return new Promise((resolve, reject) => {
//         let intSpeed = Math.floor(Math.random()*11);
//         if(intSpeed>4)
//         {
//             resolve("Success: data was uploaded");
//         }
//         else
//         {
//             reject("Reject: internet connection is weak");
//         }
//     })
// }
// saveToDb('ibrahim').then((result)=>{
//     console.log("Promise is fulfilled");
//     console.log(result);
//     return saveToDb('ibrahim');
// })
// .then((result)=>{
//     console.log('data 2 is saved');
//     console.log(result);
//     return saveToDb('hasan');
// })
// .then((result)=>{
//     console.log('data 3 is saved');
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);
// });
let hed = document.querySelector('h1');
function colorChange (color,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
    {
        hed.style.color=color;
        resolve("color changed");
    },delay);
    });
}
async function demo()
{
        await colorChange('red',250);
        await colorChange('green',250);
        await colorChange('yellow',250);
        await colorChange('gold',250);
        await colorChange('pink',250);
        await colorChange('orange',250);
}
setInterval(()=>{demo()},1500);
let jsonData='{"fact":"There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.","length":162}';
let validate=JSON.parse(jsonData);
console.log(validate.fact);