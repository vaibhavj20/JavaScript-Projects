let expenses = [];

    function addExpense() {
      const amount = document.getElementById('expenseAmount').value;
      const description = document.getElementById('expenseDescription').value;
      const category = document.getElementById('expenseCategory').value;

      if (amount && description) {
        const expense = {
          id: Date.now(),
          amount: parseFloat(amount),
          description,
          category
        };

        expenses.push(expense);
        renderExpenses();
        clearForm();
      }
    }

    function renderExpenses() {
      const expenseList = document.getElementById('expenseList');
      expenseList.innerHTML = '';

      expenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
          <span>${expense.description} - ${expense.amount} (${expense.category})</span>
          <button class="btn btn-danger btn-sm float-right" onclick="deleteExpense(${expense.id})">Delete</button>
          <button class="btn btn-info btn-sm float-right mr-2" onclick="editExpense(${expense.id})">Edit</button>
        `;
        expenseList.appendChild(li);
      });
    }


    function deleteExpense(id) {
        
        var updatedExpenses = [];
        for (var i = 0; i < expenses.length; i++) {
            if (expenses[i].id !== id) {    
                updatedExpenses.push(expenses[i]);
            }
        }
        expenses = updatedExpenses;
        renderExpenses();
    }


    function editExpense(id) {
      const expenseToEdit = expenses.find(expense => expense.id === id);
      if (expenseToEdit) {
        document.getElementById('expenseAmount').value = expenseToEdit.amount;
        document.getElementById('expenseDescription').value = expenseToEdit.description;
        document.getElementById('expenseCategory').value = expenseToEdit.category;

        deleteExpense(id); // Remove old expense after editing
      }
    }

    function clearForm() {
      document.getElementById('expenseAmount').value = '';
      document.getElementById('expenseDescription').value = '';
      document.getElementById('expenseCategory').selectedIndex = 0;
    }