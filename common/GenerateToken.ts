export const generateRandomToken = (length: number): String => {
    const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const tokenArray: any = [];

    for (let i = 0; i < length; i++) {
        const randomIndex: number = Math.floor(Math.random() * characters.length);
        tokenArray.push(characters.charAt(randomIndex));
    }

    return tokenArray.join('');
};
