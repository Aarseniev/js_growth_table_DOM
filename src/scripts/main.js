'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const rows = table.rows;

function updateButtonsState() {
  if (rows.length === 2) {
    removeRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }

  if (rows.length < 10) {
    appendRowBtn.disabled = false;
  } else {
    appendRowBtn.disabled = true;
  }

  if (rows[0].cells.length < 10) {
    appendColumnBtn.disabled = false;
  } else {
    appendColumnBtn.disabled = true;
  }

  if (rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

appendRowBtn.addEventListener('click', () => {
  const currentColumns = rows[0].cells.length;
  const newTr = document.createElement('tr');

  for (let i = 0; i < currentColumns; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  table.appendChild(newTr);

  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  table.deleteRow(rows.length - 1);

  updateButtonsState();
});

appendColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    const newTd = document.createElement('td');

    rows[i].appendChild(newTd);
  }

  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(rows[i].cells.length - 1);
  }

  updateButtonsState();
});
