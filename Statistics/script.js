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

const pieChartBudgets = document.querySelector('[data-pie-chart-budgets]')
const pieChartBudgetsLegend = document.querySelector('[data-pie-chart-budgets-legend]')
const pieChartBudgetsTitle = document.querySelector('[data-pie-chart-budgets-title]')
const consoleText = document.querySelector('[data-console]')

const summaryContainer = document.querySelector('[data-summary-container]')
const closeSummaryBtn = document.querySelector('[data-close-summary-btn]')
const totalSpendingsSummary = document.querySelector('[data-total-spendings-summary]')
const totalSavingsSummary = document.querySelector('[data-total-savings-summary]')
const totalProfitSummary = document.querySelector('[data-total-profit-summary]')
const totalProfitSummaryNum = document.querySelector('[data-total-profit-summary-num]')

if (!localStorage.getItem('HasGoneTroughTut')) {localStorage.setItem('lastVisited', 'Budgets'); window.location.href = `/Budgets/index.html`}
if (!localStorage.getItem('lastVisited')) {localStorage.setItem('lastVisited', 'Budgets');window.location.href = `/Budgets/index.html`}
if (localStorage.getItem('lastVisited') != 'Statistics' && localStorage.getItem('redirecting') == 'false') window.location.href = `/${localStorage.getItem('lastVisited')}/index.html`
if (parseInt(localStorage.getItem('numofbudget')) < 1) { localStorage.setItem('lastVisited', 'Budgets'); localStorage.setItem('redirectingError', true); localStorage.setItem('redirectingErrorMessage', `noBudgets`); localStorage.setItem('redirecting', true); window.location.href = `/Budgets/index.html` }
if (localStorage.getItem('redirecting') == 'false') openSummary();

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
       localStorage.setItem("mainColor", mainColor)
       ApplySettings()
    });

    accColorInput.addEventListener("input", () => {
        accColor = accColorInput.value 
        localStorage.setItem("accColor", accColor)
        ApplySettings()
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
    // createPieChartBudgets()
}

function DeleteData() {
    let deleteData = "Are you sure you want to delete you data?"
    if (confirm(deleteData)) {
         localStorage.clear()
        location.reload()
    }
}

function createPieChartBudgets() {
    pieChartBudgetsLegend.innerHTML = ''
    let listValues = []
    let totalAmount = 0
    for (let i = 0; i < localStorage.getItem("numofbudget"); i++) {
        if (localStorage.getItem('loadBudgetExpense' + i) == null || localStorage.getItem('loadBudgetExpense' + i) == undefined || localStorage.getItem('loadBudgetExpense' + i) == "" || localStorage.getItem('loadBudgetExpense' + i) == '0') {} else { 
            let value = {amount: localStorage.getItem("loadBudgetExpense" + i), name: localStorage.getItem('nameOfBudget' + i)}
            listValues.push(value)
        }
        if (localStorage.getItem('amountOfBudget' + i) == null || localStorage.getItem('amountOfBudget' + i) == undefined || localStorage.getItem('amountOfBudget' + i) == "") {} else {totalAmount += parseInt(localStorage.getItem('amountOfBudget' + i))}
    }
    let total = 0
    for (let i = 0; i < listValues.length; i++) {
        total += parseFloat(listValues[i].amount)
    }
    if (total == 0) {pieChartBudgets.innerHTML = "No expenses added yet."; pieChartBudgets.style.width = "450px"}
    let color = hexToHSL(localStorage.getItem('mainColor'))
    color = {h:color.h,s:color.s,l:95}
    let colorChangeInterval = 50 / listValues.length
    let conicGradText = ''
    let curPercentage = 0
    let lastPercentage 
    for (let i = 0; i < listValues.length; i++) {
        lastPercentage = curPercentage
        curPercentage = lastPercentage + 100 / (total / parseInt(listValues[i].amount))
        color = {h: color.h, s: color.s, l: parseInt(color.l) - colorChangeInterval}
        if (i == listValues.length - 1) {
            conicGradText += ` hsl(${color.h}, ${color.s}%, ${color.l}%) ${lastPercentage}% ${curPercentage}%`
        } else {
            conicGradText += ` hsl(${color.h}, ${color.s}%, ${color.l}%) ${lastPercentage}% ${curPercentage}%,`
        }
        const legendEntry = document.createElement('div')
        legendEntry.classList.add('pieChartLegendEntry')
        pieChartBudgetsLegend.append(legendEntry)

        const legendEntryColor = document.createElement('div')
        legendEntryColor.classList.add('pieChartLegendEntryColor')
        legendEntryColor.style.backgroundColor = `hsl(${color.h}, ${color.s}%, ${color.l}%)`
        legendEntry.append(legendEntryColor)

        const legendEntryName = document.createElement('div')
        legendEntryName.classList.add('pieChartLegendEntryName')
        legendEntryName.textContent = listValues[i].name + `(${Math.round(100 / (total / parseInt(listValues[i].amount))*10)/10}%)`
        legendEntry.append(legendEntryName)
    }
    pieChartBudgets.style.background = `conic-gradient(${conicGradText})`
    pieChartBudgetsTitle.textContent = `Budgets - ${total}$/${totalAmount}$`
}

function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    var colorInHSL = {h: h, s: s, l: l}
    return colorInHSL
}

function createChart() {
    
}