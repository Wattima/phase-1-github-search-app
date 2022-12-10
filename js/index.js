let form = document.querySelector("#myForm")
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById("search").value 

    let originalName = search.split(" ").join("")
    

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("user-list").innerHTML =`
           <li>Username: ${data.login}</li> 
           <img src="${data.avatar_url}">
        `
        document.getElementById("repos-list").innerHTML =`
            <a  target="_blank" href="https://api.github.com/users/${originalName}/repos"><li>${data.repos_url}</li></a>
        `
    })
})