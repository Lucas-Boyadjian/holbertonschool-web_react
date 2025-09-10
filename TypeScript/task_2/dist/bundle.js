/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math')
        return 'Teaching Math';
    return 'Teaching History';
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBO0lBQUE7SUFXQSxDQUFDO0lBVEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUdEO0lBQUE7SUFXQSxDQUFDO0lBVEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUdELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sQ0FBQztLQUNwQjtJQUNELE9BQU8sSUFBSSxRQUFRLENBQUM7QUFDdEIsQ0FBQztBQUdELFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzlDLE9BQU8sUUFBUSxZQUFZLFFBQVEsQ0FBQztBQUN0QyxDQUFDO0FBR0QsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDL0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUc7UUFDekIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUNyQztTQUFNO1FBQ0wsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUNwQztBQUNILENBQUM7QUFLRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN0QyxJQUFJLFVBQVUsS0FBSyxNQUFNO1FBQUUsT0FBTyxlQUFlLENBQUM7SUFDbEQsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcblxuICB3b3JrRnJvbUhvbWUoKSB7XG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKSB7XG4gICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcbiAgfVxuICB3b3JrRGlyZWN0b3JUYXNrcygpIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuXG4gIHdvcmtGcm9tSG9tZSgpIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKSB7XG4gICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgfVxuICB3b3JrVGVhY2hlclRhc2tzKCkge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcjtcbiAgfSBcbiAgcmV0dXJuIG5ldyBEaXJlY3Rvcjtcbn1cblxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpIHtcbiAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSAge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7IFxuICB9XG59XG5cblxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcblxuZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XG4gIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG4gIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSc7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==