const currentAttendence = document.querySelector(".take_percentage");
const totalClasses = document.querySelector(".total_classes");
const classes = document.querySelector("#new_class");
const newAttendence = document.querySelector(".updatedAttendence");
const skipClass = document.querySelector("#choice1");
const takeClass = document.querySelector("#choice2");
const Submit = document.querySelector(".btn");



function calculateAttendence () {
    const intCurrentAttendence = parseFloat((currentAttendence.value),10);
    const intTotalClasses = parseFloat((totalClasses.value),10);
    const intClasses = parseFloat(classes.value, 10);
    if (isNaN(intCurrentAttendence) || isNaN(intTotalClasses) || isNaN(intClasses))
    {
        newAttendence.style.color = '#EC9B00';
        return "Error 0";
    }
    else {
        
        let currentSkiped = (intTotalClasses*intCurrentAttendence)/100;
    
        if (skipClass.checked)
        {
            let afterSkip = (currentSkiped*100)/(intTotalClasses+intClasses);
            return afterSkip.toFixed(2); 
        }
        else
        {
            let willDo = (currentSkiped+intClasses)*100/ (intTotalClasses+intClasses);
            return willDo.toFixed(2);
        }
    }
   
};

Submit.addEventListener('click', ()=> {
    newAttendence.value = calculateAttendence()+"%";
    newAttendence.classList.add("active");
});

