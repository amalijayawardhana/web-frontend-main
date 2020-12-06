/*============================================================================
 * Global variables and constants
 ============================================================================*/

var tblStudents = null;

$(function () {
    initializeDataTable(loadAllData)
});

function loadAllData(){
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/webapp/api/v1/data'
    }).done(function (students){
        for (var i=0; i<students.length; i++){
            var name = students[i].studentId;
            var subject = students[i].subjectId;
            var mark = students[i].mark;

            var rowHtml = " <tr>\n" +
                "<td>" + name + "</td>\n" +
                "<td>" + subject + "</td>\n" +
                "<td>" + mark + "</td>\n" +
                "<td class='bin'><i class=\"fas fa-trash\"></i></td>\n" +
                "</tr>"

            initializeDataTable(function () {
                $("#tbl-students tbody").append(rowHtml);
            });
        }
    }).fail(function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    });
}


function initializeDataTable(callbackFn) {
    if (tblStudents != null) {
        tblStudents.destroy();
    }
    if (callbackFn != undefined) {
        callbackFn();
        if ($("#tbl-students tbody tr").length > 0){
            $("#tbl-students tfoot").addClass("d-none");
        }else{
            $("#tbl-students tfoot").removeClass("d-none");
        }
    }
}

