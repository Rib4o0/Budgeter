const settingsBtn = document.querySelector('[data-settings-btn]')
const settingsContainer = document.querySelector('[data-settings-container]')
const resetSettingsBtn = document.querySelector('[data-reset-settings-btn]')
const closeSettingsBtn = document.querySelector('[data-close-settings-btn]')
const darkModeToggle = document.querySelector('[data-dark-mode-toggle]')
const mainColorInput = document.querySelector('[data-main-color-input]')
const accColorInput = document.querySelector('[data-acc-color-input]')
const deleteDataBtn = document.querySelector('[data-delete-data-btn]')
const immLightsToggle = document.querySelector('[data-imm-lights-toggle]')        

const summaryContainer = document.querySelector('[data-summary-container]')
const closeSummaryBtn = document.querySelector('[data-close-summary-btn]')
const totalSpendingsSummary = document.querySelector('[data-total-spendings-summary]')
const totalSavingsSummary = document.querySelector('[data-total-savings-summary]')
const totalProfitSummary = document.querySelector('[data-total-profit-summary]')
const totalProfitSummaryNum = document.querySelector('[data-total-profit-summary-num]')

const addGoalbtn = document.querySelector('[data-add-goal-btn]')
const addGoalDetails = document.querySelector('[data-details-goal]')
const closeDetails = document.querySelector('[data-close-details]')
const inputNameOfGoal = document.querySelector('[data-detail-name-of-goal]')
const labelfornameofGoal = document.querySelector('[data-labelfordnob]')
const inputGoal = document.querySelector('[data-amount-of-goal]')
const labelforGoal = document.querySelector('[data-labelforaob]')
const addGoalConfirm = document.querySelector('[data-add-goal-confirm]')
const labelpleaseenterallofthem = document.querySelector('[data-alert-for-add-goal]')

const cover = document.querySelector('[data-cover]')
const fade = document.querySelector('[data-fade]')
const link = document.querySelectorAll('[data-link]')
const header = document.querySelector('[data-header]')

const backCircle1 = document.querySelector('[data-circle1]')
const backCircle2 = document.querySelector('[data-circle2]')

var goalName
var goalAmount

var darkMode = 0 // 0 = light mode 1 = dark mode 
var mainColor = '#0C5DD8'
var accColor = '#0954c5'
var immersiveLights = 0;
var timesInARow = 0;

// if (localStorage.getItem('redirectingError') == 'true') pushAlert(localStorage.getItem('redirectingErrorMessage'),0,0,0); localStorage.setItem('redirectingError', false); localStorage.setItem('redirectingErrorMessage', '')
if (!localStorage.getItem('redirecting')) localStorage.setItem('redirecting', false);
if (!localStorage.getItem('totalExpenses')) localStorage.setItem('totalExpenses', '0') 
if (!localStorage.getItem('lastVisited')) localStorage.setItem('lastVisited', 'Goals')
if (localStorage.getItem('lastVisited') != 'Goals' && localStorage.getItem('redirecting') == 'false') window.location.href = `/${localStorage.getItem('lastVisited')}/index.html`
if (localStorage.getItem('redirecting') == 'false') openSummary();

addEventListeners()
initialize()
fadein()

function fadein() {
    setTimeout(() => {
        localStorage.setItem('redirecting', false);
        localStorage.setItem('lastVisited', 'Goals')
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
    if(!localStorage.getItem("immersiveLights")) {
        localStorage.setItem("immersiveLights", 0)
    }
    darkMode = localStorage.getItem("darkMode?")
    mainColor = localStorage.getItem("mainColor")
    mainColorInput.value = mainColor
    accColor = localStorage.getItem("accColor")
    accColorInput.value = accColor
    immersiveLights = localStorage.getItem("immersiveLights")
    if (immersiveLights != '0') {
        immLightsToggle.classList.add("on")
        immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-on"></i>`
        initImmirsiveLights()
    } else {
        immLightsToggle.classList.remove("off")
        backCircle1.style.opacity = 0;
        backCircle2.style.opacity = 0;
    }
    ApplySettings()
}

function initImmirsiveLights() {
    backCircle1.classList.add('show')
    backCircle2.classList.add('show')
    moveImmersiveLights();
    console.log(screen.width)
}

function moveImmersiveLights() {
    backCircle1.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle1.style.top = (Math.random() * 500) + 'px'
    backCircle2.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle2.style.top = (Math.random() * 500) + 'px'
    setInterval(() => {
        if (localStorage.getItem('immersiveLights' == "0")) return 
        backCircle1.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle1.style.top = (Math.random() * 500) + 'px'
        backCircle2.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle2.style.top = (Math.random() * 500) + 'px'
    }, 10000)
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

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY
        var Topthreshold = 1;
        if (scrollPosition < Topthreshold) {
            header.classList.add('lowerOpacity')
        } else {
            header.classList.remove('lowerOpacity')
        }
    });

    deleteDataBtn.addEventListener('click', DeleteData)

    darkModeToggle.addEventListener('click', () => {
        if (darkMode == 1 || darkMode == 2) {
            darkMode = 0;
            ApplySettings();
        } else if (darkMode == 0) {
            darkMode = 1;
            ApplySettings();
        }
        if (timesInARow == 10) {
            darkMode = 2;
            ApplySettings();
            timesInARow = 0;
        }
        localStorage.setItem("darkMode?", darkMode);
        timesInARow = timesInARow + 1;
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
       localStorage.setItem("mainColor", mainColor)
       ApplySettings()
    });

    accColorInput.addEventListener("input", () => {
        accColor = accColorInput.value 
        localStorage.setItem("accColor", accColor)
        ApplySettings()
     });

    immLightsToggle.addEventListener("click", () => {
        if (immersiveLights == 1) {
            immersiveLights = 0;
            immLightsToggle.classList.add("off");
            immLightsToggle.classList.remove("on"); 
            localStorage.setItem("immersiveLights", 0)
            immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-slash"></i>`
            backCircle1.style.opacity = 0;
            backCircle2.style.opacity = 0;
        } else if (immersiveLights == 0) {
            immersiveLights = 1;
            immLightsToggle.classList.add("on");
            immLightsToggle.classList.remove("off"); 
            localStorage.setItem("immersiveLights", 1)
            immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-on"></i>`
            backCircle1.style.opacity = 1;
            backCircle2.style.opacity = 1;
            initImmirsiveLights()
        }
        localStorage.setItem("immersiveLights", immersiveLights);
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

    addGoalbtn.addEventListener('click', () => { 
        addGoalDetails.classList.add('show');  
        cover.classList.add('show');
    });

    closeDetails.addEventListener('click', () => {
        addGoalDetails.classList.remove('show');  
        cover.classList.remove('show'); 
    });

    inputNameOfGoal.addEventListener('input', e => {
        goalName = e.target.value;
        if (e.target.value != "") {
            labelfornameofGoal.classList.add('hide');
        } else {
            labelfornameofGoal.classList.remove('hide');
        }
    });
    
    inputGoal.addEventListener('input', e => {
        goalAmount = e.target.value;
        if (e.target.value!= "") {
            labelforGoal.classList.add('hide');
        } else {
            labelforGoal.classList.remove('hide');
        }
    });

    addGoalConfirm.addEventListener('click', createGoal);
}

function createGoal() {
    if (goalName == "" ||  goalName ==  undefined || goalName == null || goalAmount == null || goalAmount == "" || goalAmount == undefined) {
        labelpleaseenterallofthem.classList.add('show')
        setTimeout(() => {
            labelpleaseenterallofthem.classList.remove('show')
        }, 2000);
        return
    }
}

function ApplySettings() {
    if (darkMode == 2) {
        document.documentElement.style.setProperty('--main-color', '#000');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--lighter-shade', '#222');
        document.documentElement.style.setProperty('--total-color', '#000');
        document.documentElement.style.setProperty('--nav-hover-color', '#222');
        document.documentElement.style.setProperty('--overbudget-color', '#3b0505')
        document.documentElement.style.setProperty('--overbudget-text-color', '#fff')
    } else if (darkMode == 1) {
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