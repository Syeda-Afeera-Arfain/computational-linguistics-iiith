//English Sentences
var S1=["John ate an apple before afternoon",
"before afternoon John ate an apple",
"John before afternoon ate an apple"]

var S2=["some students like to study in the night",
"at night some students like to study"]

var S3=["John and Mary went to church",
"Mary and John went to church"]

var S4=["John went to church after eating",
	"after eating John went to church",
    "John after eating went to church"]

var S5=["did he go to market",
"he did go to market"]

var S6=["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"]

var S7=["John goes to the library and studies",
"John studies and goes to the library"]

var S8=["John ate an apple so did she",
"she ate an apple so did John"]

var S9=["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"]

var S10=["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her"	,
"yesterday I bought a book that I told her"]

var v1=["John goes to the library and studies",
"Mary and John went to church",
"some students like to study in the night",
"John ate an apple before afternoon",
"John went to church after eating",
"did he go to market",
"the woman who called my sister sells cosmetics",
"the teacher returned the book after she noticed the error",
"I told her that I bought a book yesterday",
"John ate an apple so did she"]



//hindi sentences
var H1=["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"]

var H2=["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"]


var H3=["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"]


var H4=["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम"]


var H5=["बिल्लियों को मारकर कुत्ता सो गया",
"मारकर बिल्लियों को कुत्ता सो गया" ,
"बिल्लियों को मारकर सो गया कुत्ता",
"मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर",
"कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"]


var H6=["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"]


var H7=["एक बड़ी सी किताब वहाँ है",
"एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है",
"बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब",
"वहाँ है बड़ी सी एक किताब",
" है वहाँ एक बड़ी सी किताब",
"है वहाँ बड़ी सी एक किताब"] 


var v2=["राम और श्याम गयें बाजार",
"श्याम सोया और राम भी",
"मैंने उसे बताया कि राम सो रहा है",
"राम सोया खाकर",
"बिल्लियों को मारकर कुत्ता सो गया",
"एक लाल किताब वहाँ है",
"एक बड़ी सी किताब वहाँ है"]


let corpuseng=[["John ate an apple before afternoon",
"before afternoon John ate an apple",
"John before afternoon ate an apple"],
["some students like to study in the night",
"at night some students like to study"],
["John and Mary went to church",
"Mary and John went to church"],
["John went to church after eating",
"after eating John went to church",
"John after eating went to church"],
["did he go to market",
"he did go to market"],
["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"],
["John goes to the library and studies",
"John studies and goes to the library"],
["John ate an apple so did she",
"she ate an apple so did John"],
["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"yesterday I bought a book that I told her",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her"]];

let corpushin=[["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया",
"मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता",
"मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर",
"कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है",
"एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है",
"बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब",
"वहाँ है बड़ी सी एक किताब",
" है वहाँ एक बड़ी सी किताब",
"है वहाँ बड़ी सी एक किताब"]];




function disp(){
    document.getElementById("line1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
    document.getElementById("line2").innerHTML="(select the buttons in proper order)"
}
function func3(){

if (selection.value === "english") {

        document.getElementById("p1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("p2").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
}
}

function resetfunc2()
{
  for(i=0 ;i<s1.length || i<t1.length;i++)
    
    {
        if(document.getElementById('button'+i).style.display=="none")
    {
        document.getElementById('button'+i).style.display="inline";
        document.getElementById('p2').innerHTML=""
        document.getElementById('p3').innerHTML=""
        document.getElementById('p4').innerHTML=""
        document.getElementById("ans").innerHTML=""
         document.getElementById('btn1').style.visibility="hidden"
        document.getElementById('btn2').style.visibility="hidden"
       
    }
    } 

 }
function rightorwrong(){
    n1=n2=0;
    var v5=String(document.getElementById("p3").innerHTML).replace(/\s+$/,"");
    
    if(document.getElementById("english").selected)
    {
        for(i=0;i<10;i++)
        {
            for(j=0;j<corpuseng[i].length;j++)
            {
                if(v5 == corpuseng[i][j])
                    n1++;}}
        if(n1 == 1)
        {
        document.getElementById("ans").innerHTML = "Right answer!!!"
            document.getElementById("ans").style.color = "green"
            return document.getElementById("ans").innerHTML = "Right answer!!!"}
        else
        document.getElementById("ans").innerHTML = "Wrong answer!!!"
        document.getElementById("ans").style.color = "red"}

    else if(document.getElementById("hindi").selected){
    for(i=0;i<7;i++)
        {
            for(j=0;j<corpushin[i].length;j++)
            {if(v5==corpushin[i][j])
                n2++;}  }
        
        if(n2== 1){
        
         document.getElementById("ans").innerHTML = "Right answer!!!"
            document.getElementById("ans").style.color = "green"
            return document.getElementById("ans").innerHTML = "Right answer!!!"}
        else
        
            document.getElementById("ans").innerHTML = "Wrong answer!!!"
        document.getElementById("ans").style.color = "red"}
        
    
}

function func1()
{
    cnt=0
	document.getElementById("p1").innerHTML=""
	document.getElementById("p2").innerHTML=""
    document.getElementById("p3").innerHTML=""
    document.getElementById("p4").innerHTML=""
    document.getElementById("ans").innerHTML=""
    document.getElementById("btn1").style.visibility="hidden";
    document.getElementById("btn2").style.visibility="hidden";


	//Splitting the english sentences 
    s=v1[Math.floor(Math.random() * v1.length)];
    s1=s.split(" ");

    //Splitting the hindi sentences
    t=v2[Math.floor(Math.random() * v2.length)];
    t1=t.split(" ");


    //for english sentence
if(document.getElementById("english").selected)
{
	document.getElementById("line1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("line2").innerHTML="(select the buttons in proper order)"
	let body = document.getElementsByTagName("p")[2];

    
	for(i=0;i<s1.length;i++)
    {
	    j=Math.floor(Math.random()*s1.length)
	    e=s1[i];
	    s1[i]=s1[j]
	    s1[j]=e;
    }
    for(i=0;i<s1.length;i++)
    {
		let button = document.createElement("button");
		button.id='button'+i;
        button.innerHTML = s1[i]
        body.appendChild(button);

         button.addEventListener ("click",function()
        {document.getElementById("p2").innerHTML="Formed Sentences" 
        document.getElementById("p4").innerHTML="(after selecting words):"
         document.getElementById("p3").innerHTML+=this.innerHTML+" ";this.style.display="none";
            cnt+=1;
            if(cnt>0)
            {document.getElementById("btn1").style.visibility="visible";}
            
            var d=String(document.getElementById("p3").innerHTML).replace(/\s+$/,"");
            d1=d.split(" ");
            if(s1.length == d1.length)
                document.getElementById("btn2").style.visibility="visible";
            
        });
    }
}
//for hindi sentence
else if (document.getElementById("hindi").selected) 
{
	document.getElementById("line1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("line2").innerHTML="(select the buttons in proper order)"
	
	let body = document.getElementsByTagName("p")[2];


            for(i=0;i<t1.length;i++)
    {
	    j=Math.floor(Math.random()*t1.length)
	    e=t1[i];
	    t1[i]=t1[j]
	    t1[j]=e;
    }
              for(i=0;i<t1.length;i++)
    {
let button = document.createElement("button");
 button.id='button'+i;
 button.innerHTML = t1[i]
 body.appendChild(button)



  button.addEventListener ("click",function()
 { document.getElementById("p2").innerHTML="Formed Sentences" 
document.getElementById("p4").innerHTML="(after selecting words)"
        document.getElementById("p3").innerHTML+=this.innerHTML+" ";this.style.display="none";
            cnt+=1;
            if(cnt>0)
            {document.getElementById("btn1").style.visibility="visible";}
            var b=String(document.getElementById("p3").innerHTML).replace(/\s+$/,"");
            b1=b.split(" ");
            if(t1.length == b1.length)
                document.getElementById("btn2").style.visibility="visible";
        });

    }
}
else
{
	alert("Select Language")
}
} 
