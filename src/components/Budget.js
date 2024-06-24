import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(event.target.value > 20000){
            return (
                alert('The value cannot exceed remaining funds ' + remaining)
            )
        }

        if(event.target.value < totalExpenses){
            return (
                alert('You cannot reduce the budget value lower than the spending')
            )
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} min={{expenses}}></input>
</div>
    );
};
export default Budget;
