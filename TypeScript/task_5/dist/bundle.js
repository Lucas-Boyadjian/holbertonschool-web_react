/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}
var major1 = { credits: 30, brand: 'MajorCredits' };
var major2 = { credits: 20, brand: 'MajorCredits' };
var minor1 = { credits: 15, brand: 'MinorCredits' };
var minor2 = { credits: 10, brand: 'MinorCredits' };
console.log(sumMajorCredits(major1, major2)); // { credits: 50, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 25, brand: 'MinorCredits' }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDckUsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO1FBQzVDLEtBQUssRUFBRSxjQUFjO0tBQ3RCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsUUFBc0IsRUFBRSxRQUFzQjtJQUNyRSxPQUFPO1FBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsS0FBSyxFQUFFLGNBQWM7S0FDdEIsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNwRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNwRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNwRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUVwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztBQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlDQUF5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBicmFuZDogJ01ham9yQ3JlZGl0cyc7XG59XG5cbmludGVyZmFjZSBNaW5vckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIGJyYW5kOiAnTWlub3JDcmVkaXRzJztcbn1cblxuZnVuY3Rpb24gc3VtTWFqb3JDcmVkaXRzKHN1YmplY3QxOiBNYWpvckNyZWRpdHMsIHN1YmplY3QyOiBNYWpvckNyZWRpdHMpOiBNYWpvckNyZWRpdHMge1xuICByZXR1cm4ge1xuICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxuICAgIGJyYW5kOiAnTWFqb3JDcmVkaXRzJyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VtTWlub3JDcmVkaXRzKHN1YmplY3QxOiBNaW5vckNyZWRpdHMsIHN1YmplY3QyOiBNaW5vckNyZWRpdHMpOiBNaW5vckNyZWRpdHMge1xuICByZXR1cm4ge1xuICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxuICAgIGJyYW5kOiAnTWlub3JDcmVkaXRzJyxcbiAgfTtcbn1cblxuY29uc3QgbWFqb3IxOiBNYWpvckNyZWRpdHMgPSB7IGNyZWRpdHM6IDMwLCBicmFuZDogJ01ham9yQ3JlZGl0cycgfTtcbmNvbnN0IG1ham9yMjogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiAyMCwgYnJhbmQ6ICdNYWpvckNyZWRpdHMnIH07XG5jb25zdCBtaW5vcjE6IE1pbm9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMTUsIGJyYW5kOiAnTWlub3JDcmVkaXRzJyB9O1xuY29uc3QgbWlub3IyOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDEwLCBicmFuZDogJ01pbm9yQ3JlZGl0cycgfTtcblxuY29uc29sZS5sb2coc3VtTWFqb3JDcmVkaXRzKG1ham9yMSwgbWFqb3IyKSk7IC8vIHsgY3JlZGl0czogNTAsIGJyYW5kOiAnTWFqb3JDcmVkaXRzJyB9XG5jb25zb2xlLmxvZyhzdW1NaW5vckNyZWRpdHMobWlub3IxLCBtaW5vcjIpKTsgLy8geyBjcmVkaXRzOiAyNSwgYnJhbmQ6ICdNaW5vckNyZWRpdHMnIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=