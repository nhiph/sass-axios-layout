function TeacherList(){
    this.layDSGV = function () {
        let promise = axios({
            method: 'get',
            url: 'https://6065c01db8fbbd001756737e.mockapi.io/products'
        });
        return promise;
    }
}
