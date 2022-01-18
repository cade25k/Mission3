// This function takes input from the grade calculator in index.html
// and calculates a final grade and letter grade, and then displays an alert

$("#btnCalculate").click(function () {
    let assignment_grade = $("#assignments").val() * 0.55
    let group_project_grade = $("#group_project").val() * 0.05
    let quiz_grade = $("#quizzes").val() * 0.1
    let exam_grade = $("#exams").val() * 0.2
    let intex_grade = $("#intex").val() * 0.1

    let final_grade = assignment_grade + group_project_grade + quiz_grade + exam_grade + intex_grade

    let letter_grade = ""

    if (final_grade >= 94) {
        letter_grade = "A"
    }
    else if (final_grade >= 90) {
        letter_grade = "A-"
    }
    else if (final_grade >= 87) {
        letter_grade = "B+"
    }
    else if (final_grade >= 84) {
        letter_grade = "B"
    }
    else if (final_grade >= 80) {
        letter_grade = "B-"
    }
    else if (final_grade >= 77) {
        letter_grade = "C+"
    }
    else if (final_grade >= 74) {
        letter_grade = "C"
    }
    else if (final_grade >= 70) {
        letter_grade = "C-"
    }
    else if (final_grade >= 67) {
        letter_grade = "D+"
    }
    else if (final_grade >= 64) {
        letter_grade = "D"
    }
    else if (final_grade >= 60) {
        letter_grade = "D-"
    }
    else {
        letter_grade = "E"
    }

    alert("Final Grade: " + final_grade + "% (" + letter_grade + ")");
})