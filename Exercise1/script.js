function myFunction() {
    document.getElementById("demo").innerHTML = `<div>
    <strong>vision</strong>
    <p class="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequuntur eum mollitia voluptate voluptates ab harum, molestias tempora praesentium perferendis dolore hic ex voluptatum ad, quod inventore quas voluptatem sequi laboriosam nemo doloribus facilis possimus ut architecto? Dolores, ullam similique.</p>
    <ul class="hi">
        <li>list item</li>
        <li>list item/li>
        <li>list item</li>
    </ul>  
    </div>`;
    colorFunction();
    backBackground1();
    backBackground2();
}
function colorFunction() {
    document.getElementById("btn-1").style.backgroundColor = "white";
}
function myFunction1() {
    document.getElementById("demo").innerHTML = `<div>
    <strong>Goal</strong>
    <p class="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequuntur eum mollitia voluptate voluptates ab harum, molestias tempora praesentium perferendis dolore hic ex voluptatum ad, quod inventore quas voluptatem sequi laboriosam nemo doloribus facilis possimus ut architecto? Dolores, ullam similique.</p>  
    </div>`;
    colorFunction1();
    backBackground2();
    backBackground();
}
function colorFunction1() {
    document.getElementById("btn-2").style.backgroundColor = "white";
}
function myFunction2() {
    document.getElementById("demo").innerHTML = `<div>
    <strong>History</strong>
    <p class="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequuntur eum mollitia voluptate voluptates ab harum, molestias tempora praesentium perferendis dolore hic ex voluptatum ad, quod inventore quas voluptatem sequi laboriosam nemo doloribus facilis possimus ut architecto? Dolores, ullam similique.</p>  
    </div>`;
    colorFunction2();
    backBackground();
    backBackground1();
}
function colorFunction2() {
    document.getElementById("btn-3").style.backgroundColor = "white";
}
function backBackground(){
    document.getElementById("btn-1").style.backgroundColor = "burlywood"
}
function backBackground1(){
    document.getElementById("btn-2").style.backgroundColor = "burlywood"
}
function backBackground2(){
    document.getElementById("btn-3").style.backgroundColor = "burlywood"
}