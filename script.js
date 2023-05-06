
const main = document.querySelector('.main')

// let notes = []
// let myNotes = JSON.parse(localStorage.getItem('nota'))

// if (myNotes) {
    
// }

function createNotes() {

    const notesContainer = document.createElement('div')
    notesContainer.id = 'dsff'
    notesContainer.innerHTML = `
        <div class="notes-Container">
            <input id="title" type="text" placeholder="Title" autocomplete='off'>
            <textarea class="textarea" cols="30" rows="10" placeholder="Type here..."></textarea>
            <p class="text"></p>
            <i class="fa-solid fa-lock" style="display: none;"></i>
                <div class="btnContainer">
                    <button class="editBtn">Lock/Edit</button>
                    <button class="deleteBtn">Delete</button>
                </div>
        </div>
        `
    main.appendChild(notesContainer)

    // Show buttons when hovering
    const btnContainer = notesContainer.querySelector('.btnContainer')
    const editBtn = notesContainer.querySelector('.editBtn')
    const deleteBtn = notesContainer.querySelector('.deleteBtn')

    notesContainer.addEventListener('mouseover', () => {
        btnContainer.classList.add('showBtn')
    })
    notesContainer.addEventListener('mouseout', () => {
        btnContainer.classList.remove('showBtn')
    })

    // Buttons functionality
    let title = notesContainer.querySelector('#title')
    let textarea = notesContainer.querySelector('.textarea')
    let textEl = notesContainer.querySelector('.text')
    let lockIcon = notesContainer.querySelector('.fa-solid')
    
    editBtn.addEventListener('click', () => {
        textEl.classList.toggle('open')
        textarea.classList.toggle('hidetextarea')
        lockIcon.classList.toggle('locked')

        const textareaValue = textarea.value
        textEl.textContent = textareaValue

        // Save to local storage

        // const textValue = textEl.textContent
        // notes.push({
        //     title: title.value,
        //     text: textValue
        // })

        // localStorage.setItem('nota', JSON.stringify(notes))
        // console.log(notes)
    })
    
    deleteBtn.addEventListener('click', () => {
        notesContainer.remove()
        // localStorage.removeItem('nota')
    })
}

function logout() {
    const confirmation = confirm("Bạn có muốn đăng xuất?");
    if (confirmation) {
      window.location.href = "login.html";
    }
  }
  