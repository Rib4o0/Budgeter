const cover = document.querySelector('[data-cover]')
const fade = document.querySelector('[data-fade]')
const link = document.querySelectorAll('[data-link]')

const settingsBtn = document.querySelector('[data-settings-btn]')
const settingsContainer = document.querySelector('[data-settings-container]')
const resetSettingsBtn = document.querySelector('[data-reset-settings-btn]')
const closeSettingsBtn = document.querySelector('[data-close-settings-btn]')
const darkModeToggle = document.querySelector('[data-dark-mode-toggle]')
const mainColorInput = document.querySelector('[data-main-color-input]')
const accColorInput = document.querySelector('[data-acc-color-input]')
const deleteDataBtn = document.querySelector('[data-delete-data-btn]')


const summaryContainer = document.querySelector('[data-summary-container]')
const closeSummaryBtn = document.querySelector('[data-close-summary-btn]')
const totalSpendingsSummary = document.querySelector('[data-total-spendings-summary]')
const totalSavingsSummary = document.querySelector('[data-total-savings-summary]')
const totalProfitSummary = document.querySelector('[data-total-profit-summary]')
const totalProfitSummaryNum = document.querySelector('[data-total-profit-summary-num]')

if (localStorage.getItem('redirecting') == 'false') openSummary();
if (!localStorage.getItem('lastVisited')) localStorage.setItem('lastVisited', 'Statistics');
if (localStorage.getItem('lastVisited') != 'Statistics' && localStorage.getItem('redirecting') == 'false') window.location.href = `/${localStorage.getItem('lastVisited')}/index.html`
addEventListeners()
initialize()
fadein()

function fadein() {
    setTimeout(() => {
        localStorage.setItem('redirecting', false);
        localStorage.setItem('lastVisited', 'Statistics')
        fade.classList.add('fade')
    }, 100);
}

function fadeout() {
    setTimeout(() => {
        fade.classList.remove('fade')
    }, 100);
}

function openSummary() {
    totalSpendingsSummary.textContent = localStorage.getItem('totalExpenses') + '$'
    totalSavingsSummary.textContent = '0$'
    totalProfitSummary.textContent = 'Total amount spent this month:'
    totalProfitSummaryNum.textContent = '-' +  localStorage.getItem('totalExpenses') + '$'
    totalProfitSummaryNum.classList.add('negative')
    summaryContainer.classList.add('show')
    cover.classList.add('show')
}

function initialize() {
    if(!localStorage.getItem("numofbudget"))
    {
        localStorage.setItem("numofbudget", 0)
    }
    if(!localStorage.getItem("darkMode?")) {
        localStorage.setItem("darkMode?", 0)
    }
    if(!localStorage.getItem("mainColor")) {
        localStorage.setItem("mainColor", '#0C5DD8')
    }
    if(!localStorage.getItem("accColor")) {
        localStorage.setItem("accColor", '#0954c5')
    }
    darkMode = localStorage.getItem("darkMode?")
    mainColor = localStorage.getItem("mainColor")
    mainColorInput.value = mainColor
    accColor = localStorage.getItem("accColor")
    accColorInput.value = accColor
    ApplySettings()
}

function addEventListeners() {
    link.forEach(link => {
        link.addEventListener('click', () => {
            localStorage.setItem('redirecting', true)
            fadeout()
            setTimeout(() => {
                window.location.href = link.dataset.link.toString()
            }, 600);
        })
    })
    deleteDataBtn.addEventListener('click', DeleteData)

    darkModeToggle.addEventListener('click', () => {
        if (darkMode == 1) {
            darkMode = 0;
            ApplySettings();
        } else if (darkMode == 0) {
            darkMode = 1;
            ApplySettings();
        }
        localStorage.setItem("darkMode?", darkMode);
        
        // --main-color: #111; /*#fff*/
        // --font-color: #fff; /* #000 */
        // --main-blue: #f6ff00; /*0C5DD8 */
        // --acc-blue: #e9ff27; /*#0954c5*/
        // --lighter-shade: #222;/*#d8d8d8*/
        // --total-color: #111; /*#ecebeb*/
        // --nav-hover-color: #222;/* #ddebff*/
    });

    mainColorInput.addEventListener("input", () => {
       mainColor = mainColorInput.value 
       ApplySettings()
       localStorage.setItem("mainColor", mainColor)
    });

    accColorInput.addEventListener("input", () => {
        accColor = accColorInput.value 
        ApplySettings()
        localStorage.setItem("accColor", accColor)
     });

    settingsBtn.addEventListener('click', () => {
        settingsContainer.classList.add('show')
        cover.classList.add('show')
    })

    resetSettingsBtn.addEventListener('click', () => {
        let reset = "Are you sure you want to reset your settings?"
        if (confirm(reset)) {
            darkMode = 0;
            mainColor = "#0C5DD8"
            accColor = "#0954c5"
            mainColorInput.value = mainColor
            accColorInput.value = accColor
            localStorage.setItem("mainColor", mainColor)
            localStorage.setItem("accColor", accColor)
            localStorage.setItem("darkMode?", darkMode);
            ApplySettings();
            // resetSettings();
            settingsContainer.classList.remove('show')
            cover.classList.remove('show')
        }
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsContainer.classList.remove('show')
        cover.classList.remove('show')
    });

    closeSummaryBtn.addEventListener('click', () => {
        summaryContainer.classList.remove('show')
        cover.classList.remove('show')
    });
}

function ApplySettings() {
    if (darkMode == 1) {
        document.documentElement.style.setProperty('--main-color', '#121212');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--lighter-shade', '#222');
        document.documentElement.style.setProperty('--total-color', '#111');
        document.documentElement.style.setProperty('--nav-hover-color', '#222');
        document.documentElement.style.setProperty('--overbudget-color', '#3b0505')
        document.documentElement.style.setProperty('--overbudget-text-color', '#fff')
    } else if (darkMode == 0) {
        document.documentElement.style.setProperty('--main-color', '#fff');
        document.documentElement.style.setProperty('--font-color', '#000');
        document.documentElement.style.setProperty('--lighter-shade', '#d8d8d8');
        document.documentElement.style.setProperty('--total-color', '#ecebeb');
        document.documentElement.style.setProperty('--nav-hover-color', '#ddebff');
        document.documentElement.style.setProperty('--overbudget-color', '#ecacac')
        document.documentElement.style.setProperty('--overbudget-text-color', '#db4848')
    }
    document.documentElement.style.setProperty('--main-blue', mainColor)
    document.documentElement.style.setProperty('--acc-blue', accColor)
}

function DeleteData() {
    let deleteData = "Are you sure you want to delete you data?"
    if (confirm(deleteData)) {
         localStorage.clear()
        location.reload()
    }
}