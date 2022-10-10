const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');


button1.onclick = ()=>{
    const oneID = document.getElementById('mainwrapperID');
    oneID.classList.add("active")
    oneID.classList.remove("active2")
    oneID.classList.remove("active3")
    oneID.classList.remove("active6")
}
button2.onclick = ()=>{
    const oneID = document.getElementById('mainwrapperID');
    oneID.classList.remove("active")
    oneID.classList.remove("active2")
    oneID.classList.remove("active3")
    oneID.classList.remove("active6")
    oneID.classList.add("active2")
   
}
button3.onclick = ()=>{
    const oneID = document.getElementById('mainwrapperID');
    oneID.classList.add("active3")
    oneID.classList.remove("active2")
    oneID.classList.remove("active6")
    oneID.classList.remove("active")
   
}
button4.onclick = ()=>{
    const oneID = document.getElementById('mainwrapperID');
    oneID.classList.add("active6")
    oneID.classList.remove("active")
    oneID.classList.remove("active2")
    oneID.classList.remove("active3")
   
}
