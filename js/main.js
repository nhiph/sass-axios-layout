let Teachers = new TeacherList();
function getTeacherList() {
    let promise = Teachers.layDSGV();

    promise
        .then(function(res){
            console.log(res.data);
            renderTeachers(res.data);
        })
        .catch(function(err){
            console.log(err);
        });
}

getTeacherList();

function renderTeachers(mangGV) {
    let content = "";
    mangGV.map((gv, index) => {
        content += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="./images/${gv.hinhAnh}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${gv.ngonNgu}</p>
                    <h5 class="card-text">${gv.hoTen}</h5>
                    <p class="card-foot">${gv.moTa}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("teacherList").innerHTML = content;
}