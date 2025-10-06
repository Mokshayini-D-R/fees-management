const form = document.getElementById('studentForm');
const list = document.getElementById('studentList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const feesPaid = document.getElementById('feesPaid').checked;

  await fetch('http://localhost:3000/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, roll, feesPaid })
  });

  form.reset();
  loadStudents();
});

async function loadStudents() {
  const res = await fetch('http://localhost:3000/api/students');
  const students = await res.json();

  list.innerHTML = '';
  students.forEach(s => {
    const status = s.feesPaid ? '✅ Paid' : '❌ Unpaid';
    list.innerHTML += `<li>${s.name} (${s.roll}) - ${status}</li>`;
  });
}

loadStudents();