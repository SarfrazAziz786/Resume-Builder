document.getElementById("form")?.addEventListener('submit', function (event){
    event.preventDefault(); 

    let profilePicInput=document.getElementById('profilePic') as HTMLInputElement

    let nameElement=document.getElementById('name') as HTMLInputElement
    let emailElement=document.getElementById('email') as HTMLInputElement
    let phoneElement=document.getElementById('phone') as HTMLInputElement
    let addressElement=document.getElementById('address') as HTMLInputElement

    
    let educationElement=document.getElementById('edu') as HTMLInputElement
    let experienceElement=document.getElementById('experience') as HTMLInputElement
    let skillElement=document.getElementById('skill') as HTMLInputElement

    if(profilePicInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement ){
        const name= nameElement.value;
        const email= emailElement.value;
        const phone= phoneElement.value;
        const address= addressElement.value;
        const edu= educationElement.value;
        const experience= experienceElement.value;
        const skill= skillElement.value;




        const profilePicFile=profilePicInput.files?.[0]

        const profilePicUrl = profilePicFile ?  URL.createObjectURL (profilePicFile) : '';



    // const resumeOutput = `
   
   const resumeOutput =` <h2>Resume</h2>


   ${profilePicUrl ? `<img src = ${profilePicUrl} alt="Profile_Picture" class="profilePic">` : ''}



   <p> <strong> Name: </strong> ${name}</p>   
    <p> <strong> Email: </strong> ${email}</p>   
    <p> <strong> Phone: </strong> ${phone}</p>
    <p> <strong> address: </strong> ${address}</p>

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

