function generateStudentMarkSheets(students, Details) {
    const markSheetsContainer = document.getElementById('markSheets');

    students.forEach(student => {
        const studentDetails = Details.find(detail => detail.Roll === student.Roll);

        let totalMarks = 0;
        let status = 'fail';

        if (studentDetails) {
            totalMarks = Object.values(studentDetails.subjects).reduce((acc, curr) => acc + curr, 0);
            status = totalMarks >= 200 ? 'pass' : 'fail';
        }

        const markSheet = document.createElement('div');
        markSheet.classList.add('mark-sheet');
        markSheet.classList.add(status);

        let markSheetContent = `<div>Name: ${student.name}</div>`;
        markSheetContent += `<div>Roll: ${student.Roll}</div>`;

        Object.entries(studentDetails.subjects).forEach(([subject, mark]) => {
            markSheetContent += `<div class="subject">${subject}: ${mark}</div>`;
        });

        markSheetContent += `<div class="total">Total: ${totalMarks}</div>`;
        markSheetContent += `<div class="status">Status: ${status}</div>`;

        markSheet.innerHTML = markSheetContent;
        markSheetsContainer.appendChild(markSheet);
    });
}

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

generateStudentMarkSheets(students, Details);
