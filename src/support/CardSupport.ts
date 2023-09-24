export const validateCardType = (cardNumber: string, cvv: string) => {
    const visaRegvisaPatternEx = /^4\d{3}(| |-)(?:\d{4}\1){2}\d{4}$/;
    const mastercardPattern = /^5[1-5]\d{2}(| |-)(?:\d{4}\1){2}\d{4}$/;
    const amexPattern = /^3[47]\d{1,2}(| |-)\d{6}\1\d{6}$/;
    const cleanedNumber = cardNumber.replace(/\D/g, '');

    if (visaRegvisaPatternEx.test(cleanedNumber) && cvv.length === 3) {
        return true;
    } else if (mastercardPattern.test(cleanedNumber) && cvv.length === 3) {
        return true;
    } else if (amexPattern.test(cleanedNumber) && cvv.length === 4) {
        return true;
    } else {
        return false;
    }
};
