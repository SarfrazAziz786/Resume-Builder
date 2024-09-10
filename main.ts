document.getElementById("form")?.addEventListener('submit', function (event){
    event.preventDefault(); 

    let nameElement=document.getElementById('name') as HTMLInputElement
    let emailElement=document.getElementById('email') as HTMLInputElement
    let phoneElement=document.getElementById('phone') as HTMLInputElement
    let educationElement=document.getElementById('edu') as HTMLInputElement
    let experienceElement=document.getElementById('experience') as HTMLInputElement
    let skillElement=document.getElementById('skill') as HTMLInputElement

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement ){
        const name= nameElement.value;
        const email= emailElement.value;
        const phone= phoneElement.value;
        const edu= educationElement.value;
        const experience= experienceElement.value;
        const skill= skillElement.value;

    




    // const resumeOutput = `
   
   const resumeOutput =` <h2>Resume</h2>
   <p> <strong> Name: </strong> ${name}</p>   
    <p> <strong> Email: </strong> ${email}</p>   
    <p> <strong> Phone: </strong> ${phone}</p>

    <h3> Education </h3>
    <p> ${edu}</p>

    <h3> Experience </h3>
    <p> ${experience}</p>

    <h3> Skill </h3>
    <p> ${skill}</p>
    
    `;

    const resumeOutputElement= document.getElementById('resumeOutput')

    if (resumeOutputElement) {
        resumeOutputElement.innerHTML= resumeOutput  
    }else {
        console.error(`the resume output element are missing`);
        
    }
    

  


















    }
})

