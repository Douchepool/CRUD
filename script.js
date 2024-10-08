const button1 = document.getElementById("button1");
const container = document.getElementById("container");

button1.addEventListener("click", event => {

    if(container.style.display === "none"){
        container.style.display = "flex";
        button1.textContent = "Hide add new form";
    }
    else{
        container.style.display = "none";
        button1.textContent = "Add new form";
    }
});

const container2 = document.querySelector('#container2') 

let dataList = []

const handleAdd = () => {
    const firstName = document.getElementById('firstName')
    const youtubeurl = document.getElementById('youtubeurl')
    const imageUrl = document.getElementById('imageUrl')
    const status = document.getElementById('status')
    const youtubeover = document.getElementById('youtubeover')

    const newData = {
        id: dataList.length + 1,
        firstName: firstName.value,
        channnelurl: youtubeurl.value,
        imageUrl: imageUrl.value,
        status: status.value,
        youtubeover: youtubeover.value,
    }

    dataList = [newData, ...dataList]

    container2.innerHTML=''
    dataList.map(item => {
        return(
            container2.innerHTML += `
            <div id=${item.id}>
                <div id="content">
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href=<h5>${item.youtubeurl}</h5></a>
                <p>
                    ${item.youtubeover}
                </p>
                <button id="removeB" onclick='handleRemove(${item.id})'>EXIT</button>
                <button id="removeB" onclick='handleRemove(${item.id})'>EDIT</button>
                </div>
            </div>`
        )
    })
}

const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', handleAdd)


const handleRemove = (id) => {
    const filteredItems = dataList.filter(item => item.id !== id)
    dataList = filteredItems
    console.log('trigger')
    container2.innerHTML=''
    dataList.map(item => {
        return(
            container2.innerHTML += `
            <div id=${item.id}>
            <div id="content"> 
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href=<h5>${item.youtubeurl}</h5></a>
                <p>
                    ${item.youtubeover}
                </p>
                <button id="removeB" onclick='handleRemove(${item.id})'>EXIT</button>
                <button id="removeB" onclick='handleRemove(${item.id})'>EDIT</button>
            </div>
            </div>`
        )
    })
}

dataList.map(item => {
    return(
        container2.innerHTML += `
        <div id=${item.id}>
            <div id="content">
                <img src=${item.imageUrl}>
                <h3>${item.firstName}</h3>
                <h4>${item.status}</h4>
                <a href=<h5>${item.youtubeurl}</h5></a>
                <p>
                    ${item.youtubeover}
                </p>
            </div    
        </div>`
    )
})













