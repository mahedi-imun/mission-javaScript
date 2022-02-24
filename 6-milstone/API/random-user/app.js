const getRandomBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))

}
getRandomBuddy()
const displayBuddy = (buddy) => {
    const buddies = buddy.results
    const buddiesContainer = document.getElementById('buddy-container');
    for (const myBuddy of buddies) {
        console.log(myBuddy)
        const p = document.createElement('p');
        p.innerText = `
        name:${myBuddy.name.first} ${myBuddy.name.last}
        email:${myBuddy.email}
        phone:${myBuddy.phone}
        city:${myBuddy.location.city}
        
        `
        buddiesContainer.appendChild(p)

    }
}