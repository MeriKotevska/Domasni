 const VonredniBtn= document.getElementById("btn")
 const StrP= document.getElementById("StrP")
 const WebP= document.getElementById("WebP")
 const OOP= document.getElementById("OOP")
 
 let sp = 110;
 let vp = 50;
 let oop = 5;

 StrP.innerHTML=`Strukturno Programiranje: ${sp}`
 WebP.innerHTML=`Web Programiranje: ${vp}`
 OOP.innerHTML=`OOP: ${oop}`

VonredniBtn.addEventListener("click",()=>{
sp=sp-5
vp=vp-5
oop=oop-5

if(sp>0){
    StrP.innerHTML=`Strukturno Programiranje: ${sp}`
}else if(sp<0||sp===0){
    StrP.innerHTML=`Site studenti se prefrlija vonredno.`
}

if(vp>0){
    WebP.innerHTML=`Strukturno Programiranje: ${vp}`
}else if(vp<0||vp===0){
    WebP.innerHTML=`Site studenti se prefrlija vonredno.`
}

if(oop>0){
    OOP.innerHTML=`OOP: ${oop}`
}else if(oop<0||oop===0){
    OOP.innerHTML="OOP: Site studenti se prefrlija vonredno."
}
 
sp = 110;
vp = 50;
oop = 5;
})
