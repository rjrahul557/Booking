const {StatusCodes} =  require ('http-status-codes');

const {BookingService } = require('../services/index');

const bookingService = new BookingService();

const create = async(req,res) => {
    try{
        const response = await bookingService.createBooking(req.body);
        console.log(response);
        return res.status(StatusCodes.OK).json({
            message : 'succesfully created booking',
            success : true,
            err:{},
            data:response
            
        })
    }
    catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            message : error.message,
            success : false,
            err:error.explanation,
            data:{}
            
        })
    }
}

module.exports = {
    create

}