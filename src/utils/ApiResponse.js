// ye constructor define kr rhe hai taki jb bhi kuch chaiye hoga yhi se le lenge sara ka sara
class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }