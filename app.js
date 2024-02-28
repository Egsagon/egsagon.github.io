const api = 'https://api.github.com/users/Egsagon/repos?per_page=100&sort=updated'
const template = $('template').html()

const repl = (tem, dict) => {
    for (let [key, value] of Object.entries(dict)) {
        tem = tem.replace(`{{ ${key} }}`, value)
    }
    return tem
}

$('#ds').on('click', () => {
    navigator.clipboard.writeText('Egsagon')
    alert('Discord: Egsagon (copied)')
})

$.getJSON(api, data => {
    data.forEach(repo => {
        if (repo.description) {

            if (repo.id === 761968911) {
                repo.html_url = 'https://github.com/EchterAlsFake/PHUB'
                repo.stargazers_count = '30+'
            }
            repo.stars = repo.stargazers_count ? '[' + repo.stargazers_count + '★]' : ''

            $('#projects').append(repl(template, repo))
    }})

    clearInterval(loader)
    $('#loader').css('display', 'none')
})

var i = 0
var loader = setInterval(() => {
    i++
    $('#load').html('/-\\|'[i % 4])
}, 300)

// EOF