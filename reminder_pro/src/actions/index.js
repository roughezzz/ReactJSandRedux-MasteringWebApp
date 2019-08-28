import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';

export const addReminder = (text, dueDate) => {
    const action = {
        type : ADD_REMINDER,
        text : text,
        dueDate: dueDate
    }
    console.log("Addinng reminder ", action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id : id
    }
    console.log("Deleting reminder ", action);
    return action;
}

export const clearReminders = () => {
    return{
        type: CLEAR_REMINDERS
    }
}