//make add book button show and hide book form
const addbk = document.getElementById('addbk')
addbk.addEventListener('click', () => {
    var a = 1;
    var form = document.querySelector('#addForm')
    form.classList.toggle('dis')

})


const tbody = document.getElementById('tbody')
tbody.addEventListener('click', (e) => {
    //console.log(e.target.className)
    //delete input
    if(e.target.textContent === 'Delete') {
       const tr = e.target.parentNode  
       tbody.removeChild(tr)
    } 
    //toggling the value of read
    else if (e.target.className === 'btn-primary'){
        e.target.textContent === 'Yes' ? e.target.textContent = "No" : e.target.textContent === 'No' ? e.target.textContent = "On it" : e.target.textContent = "Yes"
    }else{
        console.log(e.target.className)
    }
})


//get information in input field and append the information into the table
const addForm = document.forms['addForm']
addForm.addEventListener('submit', (e) => {
    //stop default behaviour
    e.preventDefault()
    
    //create elememnt
    const overalltr = document.createElement('tr')
    const title = document.createElement('td')
    const author = document.createElement('td')
    const pages = document.createElement('td')
    const read = document.createElement('td')
    const edit = document.createElement('td')

    // access the value of input
    const titleValue = document.querySelector('#title').value
    const authorValue = document.querySelector('#author').value
    const pageValue =  document.querySelector('#pages').value
    const readValue = document.querySelector('input[type="radio"]:checked').value
    const editValue = 'Delete' 
    
    
    // linking the value to the created elements
    title.textContent = titleValue
    author.textContent = authorValue
    pages.textContent = pageValue
    read.textContent = readValue
    edit.textContent = editValue


    //setting default values for input
    title.setAttribute("value", "Title Not Specified")  


    //adding class
    //title.setAttribute('class', 'title') - This method is not working, i don't know why
    title.classList.add('title')
    read.classList.add('btn-primary')
    edit.classList.add('btn')
    edit.classList.add('btn-success')


    //inserting into DOM
    tbody.appendChild(overalltr)
    overalltr.appendChild(title)
    overalltr.appendChild(author)
    overalltr.appendChild(pages)
    overalltr.appendChild(read)
    overalltr.appendChild(edit)


})



//Clear Input Field on Focus




//add a search button





