##Problem Statement: Student Mark Sheet Preparation
Objective:
A master has come to the school, and he wants to prepare the mark sheets of some students. He has
some data that he uses to create a specific format with which to produce this output.
Task:
Develop a function named generateStudentMarkSheets to process the provided student and
subject data, and produce a formatted mark sheet for each student.
Input:
const students = [
{ name: "Dhishan Debnath", Roll: 1 },
{ name: "Animesh Gupta", Roll: 2 },
{ name: "Tapas Sen", Roll: 3 },
{ name: "Misti Dutta", Roll: 4 },
{ name: "Chini Misra", Roll: 5 }
];
const Details = [
{ Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
{ Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
{ Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
{ Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
{ Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];
Output:
const studentsMarkSheets = [
{ name: "Dhishan Debnath", Roll: 1, math: 55, english: 75, chemistry: 76, computer: 94, total:
300, status: "pass" },
{ name: "Animesh Gupta", Roll: 2, math: 55, english: 56, computer: 48, chemistry: 12, total: 171,
status: "fail" },
{ name: "Tapas Sen", Roll: 3, math: 33, chemistry: 12, computer: 50, english: 35, total: 130, status:
"fail" },
{ name: "Misti Dutta", Roll: 4, english: 12, chemistry: 85, computer: 68, math: 45, total: 207,
status: "pass" },
{ name: "Chini Misra", Roll: 5, math: 35, english: 56, chemistry: 76, computer: 68, total: 235,
status: "pass" }
];
Requirements:
Create the generateStudentMarkSheets function to process student and subject data.
Calculate total marks for each student.
Determine pass/fail status based on a total marks threshold (e.g., total marks >= 200 for passing).
Ensure the output follows the specified format.

![Screenshot (532)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/17e1845b-2e00-4673-90ed-4250bb51871e)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION 2

Café Explorer Function
Problem Statement:
Joy recently shifted to California for his new job. He loves exploring new cafes. Though he
managed to get some data related to nearby cafes, he needs some help to arrange them for easy
access. He got 2 data sets: cafes and places.
cafes is an array of cafes (objects). It contains two properties: the name of the cafe and the
corresponding place's id as place_id.
[
{
"name": "Ashley's Cafe",
"place_id": "12hydbdf76sljfts87sbfis"
},
{
"name": "Avenue Bakery Cafe",
"place_id": "jahgde7wgdiau8ewsahgosd"
},
{
"name": "Avenue Cafe",
"place_id": "skjd86svvfdrsv55svbvf3f"
},
{
"name": "Bazaar Cafe",
"place_id": "kjk234g4gcvfx8usg1l33pi"
},
{
"name": "California Chicken Cafe",
"place_id": "12hydbdf76sljfts87sbfis"
},
{
"name": "Hi-Lo Cafe",
"place_id": "mjdhgetr4pojfyts22fzfsh"
},
{
"name": "Philz Coffee",
"place_id": "urhw3837ehalod7w02b7835"
}
]
places is an array containing the details of all the places in California.
[
{
"id": "12hydbdf76sljfts87sbfis",
"street_no": "1B",
"locality": "Macarthur Blvd",
"postal_code": "20619",

"lat": "38.1781 N",
"long": "118.4171 W"
},
{
"id": "jahgde7wgdiau8ewsahgosd",
"street_no": "60H",
"locality": "Solomos Island Road",
"postal_code": "20688",
"lat": "36.7783 N",
"long": "119.4179 W"
},
{
"id": "kjk234g4gcvfx8usg1l33pi",
"street_no": "45250",
"locality": "Worth Avenue, Unit A",
"postal_code": "20619",
"lat": "36.1152",
"long": "117.521"
},
{
"id": "saswe3s6yydtdr52hsd72yst",
"street_no": "1X",
"locality": "Macarthur Blvd",
"postal_code": "20687",
"lat": "36.7783",
"long": "119.4179"
},
{
"id": "skjd86svvfdrsv55svbvf3f",
"street_no": "7S",
"locality": "Three Notch Road",
"postal_code": "20619",
"lat": "36.83",
"long": "119.6"
},
{
"id": "mjdhgetr4pojfyts22fzfsh",
"street_no": "22803",
"locality": "Gunston Dr Lexington Park",
"postal_code": "20688",
"lat": "35.7788",
"long": "119.979"
},
{
"id": "urhw3837ehalod7w02b7835",
"street_no": "225",
"locality": "Macarthur Blvd",
"postal_code": "20687",
"lat": "35.77813",
"long": "119.41791"
}

]
You have to design a function, findCaliforniaCafes, which will take a string as an argument. It will
search cafes' names containing the searched term as a substring and should return an array
containing all matched places and their corresponding location details.
Function Signature:
You can define the given 2 data sets inside your function. Following is a
sample function skeleton
function findCaliforniaCafes(searchTerm) {
// You can store the given arrays in 2 internal variables
const cafes = [...];
const places = [...];
// Your code goes here
return results;
}
Example Usage:
const results = findCaliforniaCafes('Avenue');
console.log(results);
Expected Output:

[
{
"name": "Avenue Cafe",
"street_no": "7S",
"locality": "Three Notch Road",
"postal_code": "20619",
"lat": "36.83",
"long": "119.6"
},
{
"name": "Avenue Bakery Cafe",
"street_no": "60H",
"locality": "Solomos Island Road",
"postal_code": "20688",
"lat": "36.7783 N",
"long": "119.4179 W"
}
// ... (other matching places)
![Screenshot (533)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/9485afdc-688b-4f62-80c9-63819befa219)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION 3

Building Joy's Café Search UI
Problem Statement:
Joy is delighted with the simple search method developed in the previous section and now wishes to
enhance it by creating a user interface connected to a real data source through a REST API.
Requirements:

1. Develop a single-page application using HTML and vanilla JavaScript. Avoid using any
JavaScript frameworks or libraries.
2. A search box should be provided where Joy can search for cafes by name (case-insensitive).
Search results should dynamically update with each keystroke, using the searched term as a
substring.
3. Just below the search box, a table should display the cafe list.
4. When the search box is empty, the table should show all cafes. As the user enters text in the
search box, it should display the filtered results.
5. On page load, fetch cafes and places from the given endpoints and use them to generate the
cafe list.
API Endpoints:
• GET REQUEST: Cafes Endpoint
• GET REQUEST: Places Endpoint
Note:
Special credits will be given for:
• Clean and properly structured code.
• Optimized performance.
• Lesser runtime complexity.![Screenshot (537)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/b6e047e6-4d63-4f80-922a-8d566cb61f5f)
![Screenshot (536)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/53ee2acf-bf24-445e-9d29-9d481290033d)
![Screenshot (538)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/ff2d6198-514e-486c-8d5d-d0230beb6725)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION 4
Building a Basic Resource Management System
Problem Statement:
Andrew Parker, the Project Manager at ABC Corporation, needs a basic resource management
system to efficiently track employee availability. The provided HTML and CSS files are intended
for use in your React/Vue/Angular application. Let's delve into the requirements.
Requirements Analysis:
1. Dashboard Overview:
• The Dashboard consists of two sections: left side for an overall view of total and
available employees, and right side listing employees.
• Employees can be added by clicking the "Add Employee" button.
2. Employee Listing:
• The employee list may incorporate pagination or load on scroll to optimize resource
utilization.
• A search functionality by text (name or designation) is preferred.
• Initially, show available employees first.
3. Availability and Shuffling:
• Availability of employees can be changed from the list.
• Changes in availability won't shuffle the list; however, a shuffle occurs upon page
refresh.
4. Add Employee:
• The "Add" button opens a modal with a basic validation form.
• Mandatory fields must be filled, and age must be an integer.
• After saving, display a popup indicating success or a specific reason for failure.
• If successful, close the modal, and the new employee is shown at the top, increasing the
total and available employee count.
5. Edit Employee:
• Each row has an edit button (pencil icon) opening a modal with pre-filled values for
updating employee details.
6. Delete Employee:
• Each row has a delete button (trash icon) for removing an employee.
• Implement your approach for cases like confirmation prompts, which Andrew hasn't
explicitly mentioned.
7. Department Information:
• The company has four departments: Frontend Development, Backend Development,
Testing, and Deployment.

Implementation Details:
• Store all data locally using local storage/session storage.

Note:
If you encounter special cases or action flows not covered above, feel free to implement your
approach. For example, in the employee delete feature, where Andrew has not specified any
confirmation prompt before deleting, you can implement your approach in such cases.
Instructions:
1. Utilize the provided HTML and CSS files for your application.
2. Implement the specified features using React/Vue/Angular.
3. Incorporate local storage/session storage for data persistence.
4. Feel free to address any additional scenarios or flows not explicitly mentioned.
Submission:
Submit the code for your React/Vue/Angular
![Screenshot (535)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/9ccdebfb-7cfa-42d5-9894-1e623285f267)
![Screenshot (534)](https://github.com/mjthakur1925/Logic-assignment/assets/114571796/013346dc-97b2-4cfc-a2a9-51656af7c704)




