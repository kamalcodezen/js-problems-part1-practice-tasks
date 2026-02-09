

function validOtp(otp) {

    if (typeof otp !== "string" || otp.trim().length === 0) {
        return "Invalid";
    }
    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    } else {
        return false;
    }
}
console.log(validOtp("ph-10985"))
