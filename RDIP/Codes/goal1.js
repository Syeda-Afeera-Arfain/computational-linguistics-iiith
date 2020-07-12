var S1=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]
var S2=["some students like to study in the night","at night some students like to study"]
var S3=["John and Mary went to church","Mary and John went to church"]
var S4=["John went to church after eating",	"after eating John went to church","John after eating went to church"]
var S5=["did he go to market","he did go to market"]
var S6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var S7=["John goes to the library and studies","John studies and goes to the library"]
var S8=["John ate an apple so did she","she ate an apple so did John"]
var S9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var S10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]
var v1=["John goes to the library and studies","Mary and John went to church","some students like to study in the night","John ate an apple before afternoon","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var H1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var H2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var H3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var H4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var H5=["बिल्लियों को मारकर कुत्ता सो गया" ,"मारकर बिल्लियों को कुत्ता सो गया" ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var H6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var H7=["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"] 
var v2=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]


function func()
{
	document.getElementById("p1").innerHTML=""
	document.getElementById("p2").innerHTML=""
    document.getElementById("p3").innerHTML=""
    document.getElementById("sen2").style.visibility="hidden";
	count=0
if(document.getElementById("english").selected)
{
	document.getElementById("line1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("line2").innerHTML="(select the buttons in proper order)"
	var eng=v1[Math.floor(Math.random() * v1.length)];
	let body = document.getElementsByTagName("p")[2];
    e1=eng.split(" ");
    
	for(i=0;i<e1.length;i++)
    {
	    j=Math.floor(Math.random()*e1.length)
	    e=e1[i];
	    e1[i]=e1[j]
	    e1[j]=e;
    }
    for(i=0;i<e1.length;i++)
    {
		let button = document.createElement("button");
        button.innerHTML = e1[i]
        body.appendChild(button);

         button.addEventListener ("click",function()
        {
            document.getElementById("p2").innerHTML="Formed Sentences" 
            document.getElementById("p4").innerHTML="(after selecting words):"
            document.getElementById("p3").innerHTML+=this.innerHTML+" ";
            this.style.visibility="hidden";
            count=count+1;
            if(count == 1)
            {
                document.getElementById("sen2").style.visibility="visible";
            }
        
        });
    }
}
else if (document.getElementById("hindi").selected) 
{
	document.getElementById("line1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("line2").innerHTML="(select the buttons in proper order)"
	var hin=v2[Math.floor(Math.random() * v2.length)];
    h1=hin.split(" ");
	let body = document.getElementsByTagName("p")[2];
	for(i=0;i<h1.length;i++)
    {
	    j=Math.floor(Math.random()*h1.length)
	    e=h1[i];
	    h1[i]=h1[j]
	    h1[j]=e;
    }
    for(i=0;i<h1.length;i++)
    {
        let button = document.createElement("button");
        button.innerHTML = h1[i]
        body.appendChild(button)
         button.addEventListener ("click",function()
        {
            document.getElementById("p2").innerHTML="Formed Sentences" 
            document.getElementById("p4").innerHTML="(after selecting words)"
            document.getElementById("p3").innerHTML+=this.innerHTML+" ";
            this.style.visibility="hidden";
            count=count+1;
            if(count == 1)
            {
                document.getElementById("sen2").style.visibility="visible";
            }
        
        });

    }
}
else
{
	alert("Select Language")
	document.getElementById("p1").innerHTML=""
}
}  