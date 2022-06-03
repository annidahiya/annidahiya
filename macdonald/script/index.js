const order = document.querySelector("#form");
const menu =document.querySelector("#food");
const see = document.querySelector(".see");
const items = document.querySelector(".items");
const reject = document.querySelector(".reject");
const ready = document.querySelector("#ready");
const times = document.querySelector('#times');
const date = new Date();
let hours = date.getHours();
console.log(hours)

order.addEventListener("submit",food_order);


function food_order(event){
    event.preventDefault();
    let fries = document.querySelector("#fries").checked;
    let burger = document.querySelector("#burger").checked;
    let nugget = document.querySelector("#nugget").checked;
    let coke = document.querySelector("#coke").checked;   
    let sandwich = document.querySelector("#sandwich").checked;     
    let meal = document.querySelector("#meal").checked;
    let chickenwrap = document.querySelector("#chickenwrap").checked;
  
   
    if(fries|| burger || nugget  || coke  || sandwich || meal || chickenwrap){

        let checked_value = document.querySelectorAll(".check");
        let item_array=[];
        for(let i=0;i<checked_value.length;i++){
            if(checked_value[i].checked){
                item_array.push(checked_value[i].value);
                
            }
         }

         console.log("item_array",item_array)

         let status;
         if(hours>=24 || hours<=8){
             status= "close";
         }else{
             status="open";
         }
        let order_id = Math.floor(Math.random()*5000);
        menu.style.display="none";
        
        let food_promise = new Promise(function(resolve,reject){
            let time =Math.floor(Math.random() * 6000) +2000;
            
    
            if(status==="close"){
                reject("We are not taking orders right now!");
            }else{
                see.innerHTML = `<h3>Thanks for order</h3><p>Your order id is ${order_id}</p><p>Please Wait, We are processing your order</p>`;
                see.style.transform="scale(1)";
                setTimeout(function(){
                    resolve(item_array);
                },time);
            }
        });
    
        food_promise.then(function (res){
            see.style.display="none";
            items.style.transform="scale(1)";
            ready.innerHTML = "<h2>Your order is ready</h2>";
            res.map(function(el){
                switch(el){
                    case "fries":
                        let div = document.createElement("div");

                        let img = document.createElement("img");
                        img.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F09%2Fmcdonalds-french-fries-FT-BLOG0818.jpg&q=60";
                        let p = document.createElement("p");
                        p.innerText=`Order id : ${order_id}`;

                        div.append(img,p);
                        items.append(div);
                        break;
                    case "burger":
                        let div_burger = document.createElement("div");

                        let img_burger = document.createElement("img");
                        img_burger.src="https://qph.fs.quoracdn.net/main-qimg-fc9aeaf5883b9392d9c413dbd8fbd595-pjlq";
                        let p_burger = document.createElement("p");
                        p_burger.innerText=`Order id : ${order_id}`;

                        div_burger.append(img_burger,p_burger);
                        items.append(div_burger);
                        break;
                    case "nuggets":
                        let div_nuggets = document.createElement("div");

                        let img_nuggets = document.createElement("img");
                        img_nuggets.src="https://www.kindpng.com/picc/m/670-6706168_mcdonalds-20er-nuggets-mcdonalds-chicken-mcnuggets-hd-png.png";
                        let p_nuggets = document.createElement("p");
                        p_nuggets.innerText=`Order id : ${order_id}`;

                        div_nuggets.append(img_nuggets,p_nuggets);
                        items.append(div_nuggets);
                        break;
                    
                    case "coke":
                        let div_coke = document.createElement("div");

                        let img_coke = document.createElement("img");
                        img_coke.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HWF_rX4hwxkWY1MBHSIzKV2t7vqLm-S2D45HcwlBV_3FCwwEbXkGUuZA0LQxcxlJbdQ&usqp=CAU";
                        let p_coke = document.createElement("p");
                        p_coke.innerText=`Order id : ${order_id}`;

                        div_coke.append(img_coke,p_coke);
                        items.append(div_coke);
                        break;

                      
                    


                    case "sandwich":
                        let div_sandwich = document.createElement("div");

                        let img_sandwich = document.createElement("img");
                        img_sandwich.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdonalds-singapore-chick-n-cheese-1619816941.jpg?resize=640:*";
                        let p_sandwich = document.createElement("p");
                        p_sandwich.innerText=`Order id : ${order_id}`;

                        div_sandwich.append(img_sandwich,p_sandwich);
                        items.append(div_sandwich);
                        break;
                    case "meal":
                        let div_meal = document.createElement("div");

                        let img_meal = document.createElement("img");
                        img_meal.src="https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-3-product-tile-desktop?wid=830&hei=516&dpr=off";
                        let p_meal = document.createElement("p");
                        p_meal.innerText=`Order id : ${order_id}`;

                        div_meal.append(img_meal,p_meal);
                        items.append(div_meal);
                        break;
                    case "chickenwrap":
                        let div_chickenwrap = document.createElement("div");

                        let img_chickenwrap = document.createElement("img");
                        img_chickenwrap.src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130321/1C6558480-fast_food_chicken-241439307_v2.jpg";
                        let p_chickenwrap = document.createElement("p");
                        p_chickenwrap.innerText=`Order id : ${order_id}`;

                        div_chickenwrap.append(img_chickenwrap,p_chickenwrap);
                        items.append(div_chickenwrap);
                        break;
                }
            })
        });
    
        food_promise.catch(function(error){
                        reject.style.transform="scale(1)";
                        times.innerText="We will be open at 9:00AM. Thanks!";
                        let div = document.createElement("div");
                        let img = document.createElement("img");
                        img.src="https://images.cdn4.stockunlimited.net/preview1300/sorry-we-are-closed-text_1520926.jpg";
                        let p = document.createElement("p");
                        p.innerText=`We are not taking orders right now`;

                        div.append(img,p);
                        reject.append(div); 
                        console.log(error);
        });
        resetForm();

    }
    else{
        alert("Please choose atleast One Item:");
    }

}


function resetForm(){
document.querySelector("#fries").checked = false; 
document.querySelector("#burger").checked = false; 
document.querySelector("#nugget").checked = false;
document.querySelector("#coke").checked = false;  
document.querySelector("#sandwich").checked = false;
document.querySelector("#meal").checked = false;
document.querySelector("#chickenwrap").checked = false;
    
}
