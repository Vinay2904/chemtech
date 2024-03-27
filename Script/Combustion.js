var volumeInput = document.getElementById("volume");
var volumeOutput = document.getElementById("volumeOutput");
volumeOutput.textContent = volumeInput.value + " ml";

volumeInput.oninput = function() {
  volumeOutput.textContent = this.value + " ml";
     document.getElementById("d2").style.display="none";
     document.getElementById("s4").style.display="none";
     remove_all("p1");
     remove_all("p2");
     remove_all("p3");
};  
const option=document.getElementById("hydrocarbon"); 
option.onchange=function(){
     document.getElementById("d2").style.display="none";
     document.getElementById("s4").style.display="none";
     remove_all("p1");
     remove_all("p2");
     remove_all("p3");
    }

const fetchChemicalStructure = async (compoundName,p1) =>{
const apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compoundName}/PNG`;

try {
const response = await fetch(apiUrl);
const blob = await response.blob();

const imgElement = document.createElement('img');
imgElement.src = URL.createObjectURL(blob);

// Apply CSS styling to reduce the size of the image
imgElement.style.maxWidth = '200px';  // Adjust the maximum width as needed
imgElement.style.maxHeight = '200px'; // Adjust the maximum height as needed

const shreeDiv = document.getElementById(p1);
shreeDiv.prepend(imgElement);  

} catch (error) {
console.error(error);
}
};  


function remove_all(c)
{
const shreeDiv = document.getElementById(c);
const child=shreeDiv.firstChild;
shreeDiv.removeChild(child);  
}

function Cal(n,m)
{
document.getElementsByClassName("s1")[0].innerHTML=n+" ";
document.getElementsByClassName("s2")[0].innerHTML=m/2+" ";
document.getElementsByClassName("s1")[1].innerHTML=n+" ";
document.getElementsByClassName("s2")[1].innerHTML=m/2+" ";
var rangeValue = document.getElementById("volume").value;
document.getElementById("s3").innerHTML=rangeValue*((4*n + m)/4)+"ml"
}
function combust()
{   
  document.getElementById("res-product").style.display="block";
  const compoundName=document.getElementById("hydrocarbon").value;
  no_ofcarbon=hydrocarbon.hydrocarbons[`${compoundName}`].carbon;
  no_ofhydrogen=hydrocarbon.hydrocarbons[`${compoundName}`].hydrogen;
  document.getElementById("s5").innerHTML=compoundName;
  Cal(no_ofcarbon,no_ofhydrogen);
  fetchChemicalStructure(compoundName,"p1").then((res)=>{
    fetchChemicalStructure("carbondioxide","p2"); 
    fetchChemicalStructure("water","p3"); 
    getMolecularformula(compoundName).then((res)=>{
      document.getElementById("s10").innerHTML=res;
    }).catch();
    setTimeout(()=>{
      document.getElementById("res-product").style.display="none";
      document.getElementById("d2").style.display="flex"; 
    document.getElementById("s4").style.display="block";
    },300);
  }) 

 
 
}   

// Function to fetch the count of hydrogen in a hydrocarbon using PubChem API
async function getMolecularformula(hydrocarbonName) {
// Construct the API URL
const apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${hydrocarbonName}/JSON`;

try {
// Make the API request
const response = await fetch(apiUrl);
const data = await response.json();

 const molecular_formula=data.PC_Compounds[0].props[16].value.sval;
 return  molecular_formula;
} catch (error) {
console.log("Error:", error);
return null;
}
}

const hydrocarbon={
"hydrocarbons": {
  "methane": {
    "hydrogen": 4,
    "carbon": 1
  },
  "ethane": {
    "hydrogen": 6,
    "carbon": 2
  },
  "propane": {
    "hydrogen": 8,
    "carbon": 3
  },
  "butane": {
    "hydrogen": 10,
    "carbon": 4
  },
  "pentane": {
    "hydrogen": 12,
    "carbon": 5
  },
  "hexane": {
    "hydrogen": 14,
    "carbon": 6
  },
  "heptane": {
    "hydrogen": 16,
    "carbon": 7
  },
  "octane": {
    "hydrogen": 18,
    "carbon": 8
  },
  "nonane": {
    "hydrogen": 20,
    "carbon": 9
  },
  "decane": {
    "hydrogen": 22,
    "carbon": 10
  },
  "undecane": {
    "hydrogen": 24,
    "carbon": 11
  },
  "dodecane": {
    "hydrogen": 26,
    "carbon": 12
  },
  "tridecane": {
    "hydrogen": 28,
    "carbon": 13
  },
  "tetradecane": {
    "hydrogen": 30,
    "carbon": 14
  },
  "pentadecane": {
    "hydrogen": 32,
    "carbon": 15
  },
  "hexadecane": {
    "hydrogen": 34,
    "carbon": 16
  },
  "heptadecane": {
    "hydrogen": 36,
    "carbon": 17
  },
  "octadecane": {
    "hydrogen": 38,
    "carbon": 18
  },
  "nonadecane": {
    "hydrogen": 40,
    "carbon": 19
  },
  "icosane": {
    "hydrogen": 42,
    "carbon": 20
  },
  "heneicosane": {
    "hydrogen": 44,
    "carbon": 21
  },
  "docosane": {
    "hydrogen": 46,
    "carbon": 22
  },
  "tricosane": {
    "hydrogen": 48,
    "carbon": 23
  },
  "tetracosane": {
    "hydrogen": 50,
    "carbon": 24
  },
  "pentacosane": {
    "hydrogen": 52,
    "carbon": 25
  },
  "hexacosane": {
    "hydrogen": 54,
    "carbon": 26
  },
  "heptacosane": {
    "hydrogen": 56,
    "carbon": 27
  },
  "octacosane": {
    "hydrogen": 58,
    "carbon": 28
  },
  "nonacosane": {
    "hydrogen": 60,
    "carbon": 29
  },
  "triacontane": {
    "hydrogen": 62,
    "carbon": 30
  },
"hydrocarbons": {
  "icosane": {
    "hydrogen": 42,
    "carbon": 20
  },
  "heneicosane": {
    "hydrogen": 44,
    "carbon": 21
  },
  "docosane": {
    "hydrogen": 46,
    "carbon": 22
  },
  "tricosane": {
    "hydrogen": 48,
    "carbon": 23
  },
  "tetracosane": {
    "hydrogen": 50,
    "carbon": 24
  },
  "pentacosane": {
    "hydrogen": 52,
    "carbon": 25
  },
  "hexacosane": {
    "hydrogen": 54,
    "carbon": 26
  },
  "heptacosane": {
    "hydrogen": 56,
    "carbon": 27
  },
  "octacosane": {
    "hydrogen": 58,
    "carbon": 28
  },
  "nonacosane": {
    "hydrogen": 60,
    "carbon": 29
  },
  "triacontane": {
    "hydrogen": 62,
    "carbon": 30
  }
}
}
}

