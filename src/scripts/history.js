import moment from 'moment';
moment.locale('ru');

function addToHistory(page) {
  const currentDate = moment().toISOString();
  const visit = {
    page,
    date: currentDate,
    title: document.title,
  };
  const history = getHistory();
  history.push(visit);
  localStorage.setItem('history', JSON.stringify(history));
}

function getHistory() {
  const historyString = localStorage.getItem('history');
  return historyString ? JSON.parse(historyString) : [];
}

function displayHistory() {
  const historyContainer = $('.header-history__list');
  historyContainer.empty();
  const history = getHistory();
  const groupedHistory = groupByDate(history);

  for (const date in groupedHistory) {
    const dateHeading = formatDate(date);
    const historyItems = groupedHistory[date]
      .map((visit) => {
        const time = formatTime(visit.date);
        const title = visit.title;
        const href = visit.page;
        return `
        <div class="header-history__time-item">
          <p class="header-history__time-date">${time}</p>
          <a class="header-history__time-page" href=${href}>${title}</a>
        </div>
      `;
      })
      .join('');

    const historyBlock = `
      <div class="header-history__item">
        <div class="header-history__date">${dateHeading}</div>
        <div class="header-history__time-list">${historyItems}</div>
      </div>
    `;

    historyContainer.append(historyBlock);
  }
}

function formatDate(dateString) {
  const date = moment(dateString).format('D MMMM');
  return date.charAt(0).toUpperCase() + date.slice(1);
}

function formatTime(dateString) {
  return moment(dateString).format('HH:mm');
}

function groupByDate(history) {
  const groupedHistory = {};

  for (const visit of history) {
    const date = moment(visit.date).startOf('day').toISOString();

    if (groupedHistory[date]) {
      groupedHistory[date].push(visit);
    } else {
      groupedHistory[date] = [visit];
    }
  }

  return groupedHistory;
}

function clearHistory() {
  console.log('done');
  localStorage.removeItem('history');
  displayHistory();
  console.info('asdf');
}

$(document).ready(function () {
  const clearHistoryButton = $('.header-history__clear');
  clearHistoryButton.on('click', clearHistory);

  const currentPage = window.location.pathname;
  addToHistory(currentPage);
  displayHistory();
});
