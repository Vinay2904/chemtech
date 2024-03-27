
//Delete the image-div for Req-Div;
function Delete_The_Component(Req_Div)
{
   ///Container get
    const Div=document.getElementById(Req_Div);
    //first child
    const Div_child=Div.firstChild;   
    //check the container
    if(Div_child)
        Div.removeChild(Div_child);
} 

//The Function  give the molecular formula of compound by  using name wih help of  api; 
async function getMolecularformula(hydrocarbonName)
{
  //Api Url 
  const apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${hydrocarbonName}/JSON`;

  //Handling exception;
  try {
    //waiting for response;
    const response = await fetch(apiUrl);
    const data = await response.json(); 
    const res=data.PC_Compounds[0].props[16].value.sval;
    return res;
  } catch (error) {
    return null;
  }
}



//Function  for  Image of compound Api
const fetchChemicalStructure10 = async (compoundName,Req_div) =>{

//Api url present;
  const apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compoundName}/PNG`;
  
  //try catch handling for expection
  try {
    //calling api 
    const response = await fetch(apiUrl);
    //awiting for repsonse;;
    const blob = await response.blob();
   
    //creating  a element;
    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(blob);
    
    // Apply CSS styling to reduce the size of the image
    imgElement.style.maxWidth = '300px';  // Adjust the maximum width as needed
    imgElement.style.maxHeight = '300px'; // Adjust the maximum height as needed
    

    //Adding image to Html Div;
    const shreeDiv = document.getElementById(Req_div);

    //prepend to div
    shreeDiv.prepend(imgElement);  
    document.getElementById("Compound-Image").style.display="block";
    getMolecularformula(compoundName).then((res)=>{
      document.getElementById("Molecular-formula").innerHTML=res;
    })
    console.log("Proccess is compeleted");

  } catch (error) {  
      //Exception  handling 
      alert("Enter the Valid Compound Name");
  }
}; 



// After the click submit button
function OnSubmit() 
{
     //Data for Input text getting 
     console.log("submit");
      const compoundName=document.getElementById("namestart").value;
      //Structre Provider API 
      
      fetchChemicalStructure10(compoundName,"Molecular-Div");
}

//Download the image
function Download_Image() 
{
const compoundName=document.getElementById("namestart").value;
const imageUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compoundName}/PNG`;
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compound.png';
      a.click();
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading image:', error);
    });
}