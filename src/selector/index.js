import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch(visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                return todos;
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                break;
        }
    }
);