declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';

interface ThemeInterface {
    lightCyanColor: "hsl(193, 38%, 86%)",
    neonGreenColor: "hsl(150, 100%, 66%)",
    greyishBlueColor: "hsl(217, 19%, 38%)",
    darkGreyishBlueColor: "hsl(217, 19%, 24%)",
    darkBlueColor: "hsl(218, 23%, 16%)",
    fontSize: "28px"
};

interface Quote {
    id: number,
    advice: string
}
interface QuoteInterface {
    data: {
        slip: Quote
    }
};

